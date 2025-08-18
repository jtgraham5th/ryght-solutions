import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { Toast, ToastContainer, Alert } from 'react-bootstrap';
import { 
  CheckCircle, 
  ExclamationTriangle, 
  InfoCircle, 
  XCircle,
  X 
} from 'react-bootstrap-icons';
import './NotificationSystem.css';

// Notification types
export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

// Notification context
const NotificationContext = createContext();

// Custom hook to use notifications
export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

// Notification provider component
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const nextId = useRef(1);

  // Add a new notification
  const addNotification = useCallback(({
    type = NOTIFICATION_TYPES.INFO,
    title,
    message,
    duration = 5000,
    persistent = false,
    action = null,
    dismissible = true,
  }) => {
    const id = nextId.current++;
    const notification = {
      id,
      type,
      title,
      message,
      action,
      dismissible,
      timestamp: Date.now(),
    };

    setNotifications(prev => [...prev, notification]);

    // Auto-dismiss after duration (unless persistent)
    if (!persistent && duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, duration);
    }

    return id;
  }, []);

  // Remove a notification
  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  // Clear all notifications
  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  // Add a new alert (persistent until dismissed)
  const addAlert = useCallback(({
    type = NOTIFICATION_TYPES.INFO,
    title,
    message,
    dismissible = true,
    action = null,
  }) => {
    const id = nextId.current++;
    const alert = {
      id,
      type,
      title,
      message,
      action,
      dismissible,
      timestamp: Date.now(),
    };

    setAlerts(prev => [...prev, alert]);
    return id;
  }, []);

  // Remove an alert
  const removeAlert = useCallback((id) => {
    setAlerts(prev => prev.filter(a => a.id !== id));
  }, []);

  // Clear all alerts
  const clearAlerts = useCallback(() => {
    setAlerts([]);
  }, []);

  // Convenience methods for different notification types
  const success = useCallback((title, message, options = {}) => {
    return addNotification({
      type: NOTIFICATION_TYPES.SUCCESS,
      title,
      message,
      ...options,
    });
  }, [addNotification]);

  const error = useCallback((title, message, options = {}) => {
    return addNotification({
      type: NOTIFICATION_TYPES.ERROR,
      title,
      message,
      duration: 8000, // Longer duration for errors
      ...options,
    });
  }, [addNotification]);

  const warning = useCallback((title, message, options = {}) => {
    return addNotification({
      type: NOTIFICATION_TYPES.WARNING,
      title,
      message,
      ...options,
    });
  }, [addNotification]);

  const info = useCallback((title, message, options = {}) => {
    return addNotification({
      type: NOTIFICATION_TYPES.INFO,
      title,
      message,
      ...options,
    });
  }, [addNotification]);

  // Show API error notification
  const showApiError = useCallback((error, title = 'Error') => {
    let message = 'An unexpected error occurred';
    
    if (error?.message) {
      message = error.message;
    } else if (error?.type === 'network_error') {
      message = 'Network error - please check your connection';
    } else if (error?.type === 'validation') {
      message = 'Please check your input and try again';
    } else if (error?.type === 'unauthorized') {
      message = 'Please log in again';
    } else if (error?.type === 'forbidden') {
      message = 'You do not have permission to perform this action';
    }

    return this.error(title, message, { persistent: true });
  }, [error]);

  const contextValue = {
    notifications,
    alerts,
    addNotification,
    removeNotification,
    clearNotifications,
    addAlert,
    removeAlert,
    clearAlerts,
    success,
    error,
    warning,
    info,
    showApiError,
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      <NotificationContainer />
      <AlertContainer />
    </NotificationContext.Provider>
  );
};

// Notification container component
const NotificationContainer = () => {
  const { notifications, removeNotification } = useNotifications();

  if (notifications.length === 0) return null;

  return (
    <ToastContainer
      position="top-end"
      className="notification-container p-3"
      style={{ zIndex: 9999 }}
    >
      {notifications.map((notification) => (
        <NotificationToast
          key={notification.id}
          notification={notification}
          onDismiss={() => removeNotification(notification.id)}
        />
      ))}
    </ToastContainer>
  );
};

// Individual notification toast
const NotificationToast = ({ notification, onDismiss }) => {
  const {
    type,
    title,
    message,
    action,
    dismissible,
  } = notification;

  const getIcon = () => {
    switch (type) {
      case NOTIFICATION_TYPES.SUCCESS:
        return <CheckCircle className="text-success" />;
      case NOTIFICATION_TYPES.ERROR:
        return <XCircle className="text-danger" />;
      case NOTIFICATION_TYPES.WARNING:
        return <ExclamationTriangle className="text-warning" />;
      case NOTIFICATION_TYPES.INFO:
        return <InfoCircle className="text-info" />;
      default:
        return <InfoCircle className="text-info" />;
    }
  };

  const getVariant = () => {
    switch (type) {
      case NOTIFICATION_TYPES.SUCCESS:
        return 'success';
      case NOTIFICATION_TYPES.ERROR:
        return 'danger';
      case NOTIFICATION_TYPES.WARNING:
        return 'warning';
      case NOTIFICATION_TYPES.INFO:
        return 'info';
      default:
        return 'info';
    }
  };

  return (
    <Toast
      className={`notification-toast notification-${type}`}
      onClose={dismissible ? onDismiss : undefined}
      autohide={false}
    >
      <Toast.Header className={`bg-${getVariant()} text-white`}>
        <div className="d-flex align-items-center me-2">
          {getIcon()}
        </div>
        <strong className="me-auto">{title}</strong>
        {dismissible && (
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={onDismiss}
            aria-label="Close"
          />
        )}
      </Toast.Header>
      <Toast.Body>
        <p className="mb-2">{message}</p>
        {action && (
          <div className="d-flex justify-content-end">
            {action}
          </div>
        )}
      </Toast.Body>
    </Toast>
  );
};

// Alert container component
const AlertContainer = () => {
  const { alerts, removeAlert } = useNotifications();

  if (alerts.length === 0) return null;

  return (
    <div className="alert-container">
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          variant={alert.type}
          dismissible={alert.dismissible}
          onClose={() => removeAlert(alert.id)}
          className="alert-item"
        >
          <div className="d-flex align-items-center">
            <div className="me-2">
              {alert.type === NOTIFICATION_TYPES.SUCCESS && <CheckCircle />}
              {alert.type === NOTIFICATION_TYPES.ERROR && <XCircle />}
              {alert.type === NOTIFICATION_TYPES.WARNING && <ExclamationTriangle />}
              {alert.type === NOTIFICATION_TYPES.INFO && <InfoCircle />}
            </div>
            <div className="flex-grow-1">
              {alert.title && <Alert.Heading>{alert.title}</Alert.Heading>}
              {alert.message}
            </div>
            {alert.action && (
              <div className="ms-2">
                {alert.action}
              </div>
            )}
          </div>
        </Alert>
      ))}
    </div>
  );
};

export default NotificationProvider;
