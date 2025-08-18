import { useState, useCallback, useRef } from 'react';
import { useErrorHandler } from '../components/common/ErrorBoundary';
import FeatureDemo from "./components/common/FeatureDemo";

// Custom hook for API calls with loading states and error handling
export const useApi = (apiFunction, options = {}) => {
  const {
    initialData = null,
    autoExecute = false,
    onSuccess = null,
    onError = null,
    onFinally = null,
    retryCount = 0,
    retryDelay = 1000,
  } = options;

  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryAttempts, setRetryAttempts] = useState(0);
  
  const { handleError, clearError } = useErrorHandler();
  const abortControllerRef = useRef(null);
  const timeoutRef = useRef(null);

  // Execute API call
  const execute = useCallback(async (...args) => {
    // Clear previous error
    setError(null);
    clearError();
    
    // Set loading state
    setLoading(true);
    
    // Create abort controller for cancellation
    abortControllerRef.current = new AbortController();
    
    try {
      // Add signal to API call if it supports it
      const apiArgs = args.length > 0 && typeof args[args.length - 1] === 'object' && args[args.length - 1].signal
        ? args
        : [...args, { signal: abortControllerRef.current.signal }];
      
      const response = await apiFunction(...apiArgs);
      
      if (response.success) {
        setData(response.data);
        setError(null);
        setRetryAttempts(0);
        
        // Call success callback
        if (onSuccess) {
          onSuccess(response.data, response);
        }
        
        return response;
      } else {
        throw new Error(response.error.message || 'API call failed');
      }
    } catch (err) {
      // Handle abort error separately
      if (err.name === 'AbortError') {
        setError({ type: 'aborted', message: 'Request was cancelled' });
        return { success: false, error: { type: 'aborted', message: 'Request was cancelled' } };
      }
      
      const apiError = {
        type: err.response?.status ? 'api_error' : 'network_error',
        message: err.message || 'An unexpected error occurred',
        status: err.response?.status,
        details: err.response?.data,
      };
      
      setError(apiError);
      handleError(err);
      
      // Call error callback
      if (onError) {
        onError(apiError, err);
      }
      
      // Handle retry logic
      if (retryCount > 0 && retryAttempts < retryCount) {
        setRetryAttempts(prev => prev + 1);
        
        // Set timeout for retry
        timeoutRef.current = setTimeout(() => {
          execute(...args);
        }, retryDelay * (retryAttempts + 1)); // Exponential backoff
      }
      
      return { success: false, error: apiError };
    } finally {
      setLoading(false);
      
      // Call finally callback
      if (onFinally) {
        onFinally();
      }
    }
  }, [apiFunction, onSuccess, onError, onFinally, retryCount, retryAttempts, retryDelay, handleError, clearError]);

  // Cancel current request
  const cancel = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    setLoading(false);
  }, []);

  // Reset hook state
  const reset = useCallback(() => {
    setData(initialData);
    setLoading(false);
    setError(null);
    setRetryAttempts(0);
    clearError();
    
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [initialData, clearError]);

  // Update data manually
  const updateData = useCallback((newData) => {
    setData(newData);
  }, []);

  // Clear error manually
  const clearApiError = useCallback(() => {
    setError(null);
    clearError();
  }, [clearError]);

  // Auto-execute on mount if specified
  const autoExecuteRef = useRef(autoExecute);
  if (autoExecuteRef.current && !loading && !data && !error) {
    autoExecuteRef.current = false;
    execute();
  }

  return {
    data,
    loading,
    error,
    retryAttempts,
    execute,
    cancel,
    reset,
    updateData,
    clearError: clearApiError,
    isSuccess: !loading && !error && data !== null,
    isError: !loading && error !== null,
    isIdle: !loading && !error && data === null,
  };
};

// Hook for multiple API calls
export const useMultipleApis = (apiConfigs) => {
  const [results, setResults] = useState({});
  const [overallLoading, setOverallLoading] = useState(false);
  const [overallError, setOverallError] = useState(null);

  const executeAll = useCallback(async () => {
    setOverallLoading(true);
    setOverallError(null);
    
    try {
      const promises = Object.entries(apiConfigs).map(async ([key, config]) => {
        try {
          const response = await config.apiFunction(...(config.args || []));
          return { key, success: true, data: response };
        } catch (error) {
          return { key, success: false, error };
        }
      });
      
      const responses = await Promise.all(promises);
      const newResults = {};
      
      responses.forEach(({ key, success, data, error }) => {
        newResults[key] = { success, data, error };
      });
      
      setResults(newResults);
      
      // Check if any failed
      const hasErrors = responses.some(response => !response.success);
      if (hasErrors) {
        setOverallError('Some API calls failed');
      }
      
      return newResults;
    } catch (error) {
      setOverallError(error.message);
      throw error;
    } finally {
      setOverallLoading(false);
    }
  }, [apiConfigs]);

  const resetAll = useCallback(() => {
    setResults({});
    setOverallLoading(false);
    setOverallError(null);
  }, []);

  return {
    results,
    overallLoading,
    overallError,
    executeAll,
    resetAll,
    isAllSuccess: !overallLoading && !overallError && Object.keys(results).length > 0 && 
                  Object.values(results).every(result => result.success),
    hasAnyErrors: Object.values(results).some(result => !result.success),
  };
};

// Hook for paginated API calls
export const usePaginatedApi = (apiFunction, options = {}) => {
  const {
    pageSize = 10,
    initialPage = 1,
    ...apiOptions
  } = options;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const {
    data,
    loading,
    error,
    execute,
    ...rest
  } = useApi(apiFunction, {
    ...apiOptions,
    onSuccess: (responseData, response) => {
      // Extract pagination info from response
      if (responseData.pagination) {
        setTotalPages(responseData.pagination.totalPages);
        setTotalItems(responseData.pagination.totalItems);
        setHasMore(responseData.pagination.currentPage < responseData.pagination.totalPages);
      }
      
      if (apiOptions.onSuccess) {
        apiOptions.onSuccess(responseData, response);
      }
    },
  });

  const goToPage = useCallback((page) => {
    setCurrentPage(page);
    execute(page, pageSize);
  }, [execute, pageSize]);

  const nextPage = useCallback(() => {
    if (hasMore) {
      goToPage(currentPage + 1);
    }
  }, [hasMore, currentPage, goToPage]);

  const prevPage = useCallback(() => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  }, [currentPage, goToPage]);

  const goToFirstPage = useCallback(() => {
    goToPage(1);
  }, [goToPage]);

  const goToLastPage = useCallback(() => {
    goToPage(totalPages);
  }, [goToPage, totalPages]);

  return {
    data,
    loading,
    error,
    execute,
    currentPage,
    totalPages,
    totalItems,
    hasMore,
    goToPage,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    ...rest,
  };
};

export default useApi;
