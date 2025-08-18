import { authAPI } from './apiService';

// Token storage keys
const TOKEN_KEY = 'authToken';
const REFRESH_TOKEN_KEY = 'refreshToken';
const USER_ID_KEY = 'UserID';
const USER_DATA_KEY = 'userData';

// Token expiration time (15 minutes)
const TOKEN_EXPIRY_TIME = 15 * 60 * 1000;

class AuthService {
  constructor() {
    this.isRefreshing = false;
    this.failedQueue = [];
    this.tokenExpiryTimer = null;
  }

  // Process failed requests queue
  processQueue(error, token = null) {
    this.failedQueue.forEach(({ resolve, reject }) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
    
    this.failedQueue = [];
  }

  // Set authentication tokens
  setTokens(accessToken, refreshToken) {
    localStorage.setItem(TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    
    // Set token expiry timer
    this.setTokenExpiryTimer();
  }

  // Get access token
  getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  // Get refresh token
  getRefreshToken() {
    return localStorage.setItem(REFRESH_TOKEN_KEY);
  }

  // Check if token is expired
  isTokenExpired() {
    const token = this.getAccessToken();
    if (!token) return true;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiryTime = payload.exp * 1000;
      return Date.now() >= expiryTime;
    } catch (error) {
      console.error('Error parsing token:', error);
      return true;
    }
  }

  // Set token expiry timer
  setTokenExpiryTimer() {
    if (this.tokenExpiryTimer) {
      clearTimeout(this.tokenExpiryTimer);
    }

    const token = this.getAccessToken();
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const expiryTime = payload.exp * 1000;
        const timeUntilExpiry = expiryTime - Date.now();
        
        // Set timer to refresh token 5 minutes before expiry
        const refreshTime = Math.max(timeUntilExpiry - (5 * 60 * 1000), 0);
        
        this.tokenExpiryTimer = setTimeout(() => {
          this.refreshToken();
        }, refreshTime);
      } catch (error) {
        console.error('Error setting token expiry timer:', error);
      }
    }
  }

  // Login user
  async login(credentials) {
    try {
      const response = await authAPI.login(credentials);
      
      if (response.success) {
        const { accessToken, refreshToken, user } = response.data;
        
        // Store tokens and user data
        this.setTokens(accessToken, refreshToken);
        localStorage.setItem(USER_ID_KEY, user.userid);
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
        
        return { success: true, user };
      } else {
        return { success: false, error: response.error };
      }
    } catch (error) {
      return { 
        success: false, 
        error: { 
          type: 'network_error', 
          message: 'Login failed. Please check your connection and try again.' 
        } 
      };
    }
  }

  // Logout user
  async logout() {
    try {
      const refreshToken = this.getRefreshToken();
      if (refreshToken) {
        await authAPI.logout();
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.clearAuth();
    }
  }

  // Clear all authentication data
  clearAuth() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_ID_KEY);
    localStorage.removeItem(USER_DATA_KEY);
    
    if (this.tokenExpiryTimer) {
      clearTimeout(this.tokenExpiryTimer);
      this.tokenExpiryTimer = null;
    }
  }

  // Refresh access token
  async refreshToken() {
    if (this.isRefreshing) {
      return new Promise((resolve, reject) => {
        this.failedQueue.push({ resolve, reject });
      });
    }

    this.isRefreshing = true;

    try {
      const refreshToken = this.getRefreshToken();
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      const response = await authAPI.refreshToken(refreshToken);
      
      if (response.success) {
        const { accessToken, refreshToken: newRefreshToken } = response.data;
        
        this.setTokens(accessToken, newRefreshToken);
        this.processQueue(null, accessToken);
        
        return { success: true, accessToken };
      } else {
        throw new Error(response.error.message);
      }
    } catch (error) {
      this.processQueue(error, null);
      this.clearAuth();
      throw error;
    } finally {
      this.isRefreshing = false;
    }
  }

  // Validate current token
  async validateToken() {
    try {
      const token = this.getAccessToken();
      if (!token || this.isTokenExpired()) {
        return false;
      }

      const response = await authAPI.validateToken();
      return response.success;
    } catch (error) {
      return false;
    }
  }

  // Get current user data
  getCurrentUser() {
    try {
      const userData = localStorage.getItem(USER_DATA_KEY);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  }

  // Check if user is authenticated
  isAuthenticated() {
    const token = this.getAccessToken();
    const userData = this.getCurrentUser();
    
    return !!(token && userData && !this.isTokenExpired());
  }

  // Check if user has specific role
  hasRole(role) {
    const user = this.getCurrentUser();
    return user && user.accesslevel === role;
  }

  // Check if user is admin
  isAdmin() {
    return this.hasRole('admin');
  }

  // Check if user is therapist
  isTherapist() {
    return this.hasRole('therapist');
  }

  // Get user permissions
  getUserPermissions() {
    const user = this.getCurrentUser();
    if (!user) return [];

    const permissions = [];
    
    if (user.accesslevel === 'admin') {
      permissions.push('manage_users', 'manage_settings', 'view_reports', 'manage_billing');
    }
    
    if (user.accesslevel === 'therapist') {
      permissions.push('manage_patients', 'create_notes', 'manage_treatment_plans', 'view_own_patients');
    }

    return permissions;
  }

  // Check if user has specific permission
  hasPermission(permission) {
    const permissions = this.getUserPermissions();
    return permissions.includes(permission);
  }

  // Update user data
  updateUserData(userData) {
    try {
      const currentData = this.getCurrentUser();
      const updatedData = { ...currentData, ...userData };
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(updatedData));
      return true;
    } catch (error) {
      console.error('Error updating user data:', error);
      return false;
    }
  }

  // Get token expiry time
  getTokenExpiryTime() {
    const token = this.getAccessToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return new Date(payload.exp * 1000);
    } catch (error) {
      console.error('Error parsing token expiry:', error);
      return null;
    }
  }

  // Check if token will expire soon (within 5 minutes)
  isTokenExpiringSoon() {
    const expiryTime = this.getTokenExpiryTime();
    if (!expiryTime) return true;

    const fiveMinutesFromNow = new Date(Date.now() + (5 * 60 * 1000));
    return expiryTime <= fiveMinutesFromNow;
  }

  // Auto-refresh token if needed
  async autoRefreshIfNeeded() {
    if (this.isTokenExpiringSoon() && !this.isRefreshing) {
      try {
        await this.refreshToken();
        return true;
      } catch (error) {
        console.error('Auto-refresh failed:', error);
        return false;
      }
    }
    return true;
  }
}

// Create singleton instance
const authService = new AuthService();

export default authService;
