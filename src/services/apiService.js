import axios from 'axios';

// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/';

// Create axios instance with default configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth tokens
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common responses
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized - try to refresh token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          const response = await axios.post(`${API_BASE_URL}auth/refresh`, {
            refreshToken,
          });
          
          const { accessToken } = response.data;
          localStorage.setItem('authToken', accessToken);
          
          // Retry original request with new token
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed, redirect to login
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('UserID');
        window.location.href = `${process.env.PUBLIC_URL || ""}/`;
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Error handling utilities
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error status
    const { status, data } = error.response;
    
    switch (status) {
      case 400:
        return {
          type: 'validation',
          message: data.message || 'Invalid request data',
          details: data.errors || [],
        };
      case 401:
        return {
          type: 'unauthorized',
          message: 'Authentication required',
          details: [],
        };
      case 403:
        return {
          type: 'forbidden',
          message: 'Access denied',
          details: [],
        };
      case 404:
        return {
          type: 'not_found',
          message: 'Resource not found',
          details: [],
        };
      case 422:
        return {
          type: 'validation',
          message: data.message || 'Validation failed',
          details: data.errors || [],
        };
      case 500:
        return {
          type: 'server_error',
          message: 'Internal server error',
          details: [],
        };
      default:
        return {
          type: 'unknown',
          message: data.message || 'An unexpected error occurred',
          details: [],
        };
    }
  } else if (error.request) {
    // Request was made but no response received
    return {
      type: 'network_error',
      message: 'Network error - please check your connection',
      details: [],
    };
  } else {
    // Something else happened
    return {
      type: 'unknown',
      message: error.message || 'An unexpected error occurred',
      details: [],
    };
  }
};

// Generic API methods
export const apiService = {
  // GET request
  get: async (endpoint, config = {}) => {
    try {
      const response = await apiClient.get(endpoint, config);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // POST request
  post: async (endpoint, data = {}, config = {}) => {
    try {
      const response = await apiClient.post(endpoint, data, config);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // PUT request
  put: async (endpoint, data = {}, config = {}) => {
    try {
      const response = await apiClient.put(endpoint, data, config);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // DELETE request
  delete: async (endpoint, config = {}) => {
    try {
      const response = await apiClient.delete(endpoint, config);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },

  // PATCH request
  patch: async (endpoint, data = {}, config = {}) => {
    try {
      const response = await apiClient.patch(endpoint, data, config);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: handleApiError(error) };
    }
  },
};

// Specific API methods for common operations
export const authAPI = {
  login: async (credentials) => {
    return apiService.post('auth/login', credentials);
  },

  logout: async () => {
    return apiService.post('auth/logout');
  },

  refreshToken: async (refreshToken) => {
    return apiService.post('auth/refresh', { refreshToken });
  },

  validateToken: async () => {
    return apiService.get('auth/validate');
  },
};

export const userAPI = {
  getCurrentUser: async () => {
    return apiService.get('generic_api/pcheck/760?tid=19');
  },

  getUsers: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiService.get(`generic_api/list/19?${queryString}`);
  },

  updateUser: async (userId, userData) => {
    return apiService.post(`generic_api/${userId}?tid=19`, userData);
  },
};

export const patientAPI = {
  getPatients: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiService.get(`generic_api/list/20?${queryString}`);
  },

  getPatient: async (patientId) => {
    return apiService.get(`generic_api/${patientId}?tid=20`);
  },

  updatePatient: async (patientId, patientData) => {
    return apiService.post(`generic_api/${patientId}?tid=20`, patientData);
  },
};

export const contactAPI = {
  getContacts: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiService.get(`generic_api/list/23?${queryString}`);
  },

  getPhysicians: async () => {
    return apiService.get('generic_api/list/23?fields=*&where=contacttypeid=24&orderby=name');
  },

  getPharmacies: async () => {
    return apiService.get('generic_api/list/23?fields=*&where=contacttypeid=23&orderby=name');
  },
};

export const treatmentAPI = {
  getTreatmentPlans: async (patientId) => {
    return apiService.get(`generic_api/list/16?fields=*&where=patientid=${patientId},docid=1&orderby=billingid`);
  },

  getGoals: async (patientId) => {
    return apiService.get(`generic_api/list/18?fields=*&where=patientid=${patientId},isdeleted=0&orderby=goalid`);
  },

  getObjectives: async (goalId) => {
    return apiService.get(`generic_api/list/26?fields=*&where=goalid=${goalId},isdeleted=0&orderby=objectiveid`);
  },

  getInterventions: async (objectiveId) => {
    return apiService.get(`generic_api/list/27?fields=*&where=objectiveid=${objectiveId},isdeleted=0&orderby=interventionid`);
  },
};

export const progressNotesAPI = {
  getProgressNotes: async (patientId) => {
    return apiService.get(`generic_api/list/16?fields=*&where=patientid=${patientId},docid=2&orderby=billingid`);
  },

  createProgressNote: async (noteData) => {
    return apiService.post('generic_api/16', noteData);
  },

  updateProgressNote: async (noteId, noteData) => {
    return apiService.post(`generic_api/${noteId}?tid=16`, noteData);
  },
};

export default apiService;
