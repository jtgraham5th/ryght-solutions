import React from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { ExclamationTriangle, ArrowClockwise, Home } from 'react-bootstrap-icons';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      errorId: null 
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console for debugging
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Generate unique error ID for tracking
    const errorId = `ERR_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    this.setState({
      error,
      errorInfo,
      errorId
    });

    // In production, you might want to log this to an error reporting service
    // logErrorToService(error, errorInfo, errorId);
  }

  handleRetry = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null,
      errorId: null 
    });
  };

  handleGoHome = () => {
    window.location.href = '/ryght-solutions/';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="error-boundary-container">
          <Card className="error-boundary-card">
            <Card.Header className="text-center bg-danger text-white">
              <ExclamationTriangle size={24} className="me-2" />
              Something went wrong
            </Card.Header>
            <Card.Body className="text-center">
              <Alert variant="danger" className="mb-3">
                <strong>Error ID:</strong> {this.state.errorId}
              </Alert>
              
              <p className="text-muted mb-4">
                We're sorry, but something unexpected happened. This error has been logged 
                and our team will investigate.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-start mb-4">
                  <summary className="text-danger cursor-pointer">
                    Error Details (Development)
                  </summary>
                  <pre className="error-details mt-2">
                    <strong>Error:</strong> {this.state.error.toString()}
                    {this.state.errorInfo && (
                      <>
                        <br />
                        <strong>Component Stack:</strong>
                        <br />
                        {this.state.errorInfo.componentStack}
                      </>
                    )}
                  </pre>
                </details>
              )}

              <div className="d-flex justify-content-center gap-2">
                <Button 
                  variant="primary" 
                  onClick={this.handleRetry}
                  className="d-flex align-items-center gap-2"
                >
                  <ArrowClockwise size={16} />
                  Try Again
                </Button>
                <Button 
                  variant="outline-secondary" 
                  onClick={this.handleGoHome}
                  className="d-flex align-items-center gap-2"
                >
                  <Home size={16} />
                  Go Home
                </Button>
              </div>

              <div className="mt-3">
                <small className="text-muted">
                  If this problem persists, please contact support with Error ID: {this.state.errorId}
                </small>
              </div>
            </Card.Body>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for wrapping components with error boundary
export const withErrorBoundary = (WrappedComponent, fallbackUI = null) => {
  return class extends React.Component {
    render() {
      return (
        <ErrorBoundary fallbackUI={fallbackUI}>
          <WrappedComponent {...this.props} />
        </ErrorBoundary>
      );
    }
  };
};

// Hook for functional components to handle errors
export const useErrorHandler = () => {
  const [error, setError] = React.useState(null);

  const handleError = React.useCallback((error) => {
    console.error('Error caught by hook:', error);
    setError(error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
};

export default ErrorBoundary;
