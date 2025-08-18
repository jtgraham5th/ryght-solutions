import React, { useState } from 'react';
import { Card, Button, Row, Col, Alert } from 'react-bootstrap';
import { 
  LoadingSpinner, 
  SkeletonLoader, 
  useNotifications,
  NOTIFICATION_TYPES 
} from './index';
import { useApi } from '../../hooks/useApi';
import { patientAPI } from '../../services/apiService';

const FeatureDemo = () => {
  const { success, error, warning, info, showApiError } = useNotifications();
  const [showSkeletons, setShowSkeletons] = useState(false);
  const [demoError, setDemoError] = useState(false);

  // Demo API call
  const { data: patients, loading, execute, reset } = useApi(patientAPI.getPatients, {
    onSuccess: (data) => {
      success('Success!', `Loaded ${data.length} patients successfully.`);
    },
    onError: (error) => {
      showApiError(error, 'Failed to load patients');
    },
  });

  // Demo error boundary
  const triggerError = () => {
    setDemoError(true);
  };

  if (demoError) {
    throw new Error('This is a demo error to test the error boundary!');
  }

  return (
    <div className="p-4">
      <h2 className="mb-4">Feature Demo - Loading States, Error Handling & Notifications</h2>
      
      {/* Loading Spinners */}
      <Card className="mb-4">
        <Card.Header>
          <h5>Loading Spinners</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={3} className="text-center mb-3">
              <LoadingSpinner size="sm" text="Small" />
            </Col>
            <Col md={3} className="text-center mb-3">
              <LoadingSpinner size="md" text="Medium" />
            </Col>
            <Col md={3} className="text-center mb-3">
              <LoadingSpinner size="lg" text="Large" />
            </Col>
            <Col md={3} className="text-center mb-3">
              <LoadingSpinner variant="success" text="Success" />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Skeleton Loaders */}
      <Card className="mb-4">
        <Card.Header>
          <h5>Skeleton Loaders</h5>
        </Card.Header>
        <Card.Body>
          <div className="mb-3">
            <Button 
              variant="outline-primary" 
              onClick={() => setShowSkeletons(!showSkeletons)}
              className="me-2"
            >
              {showSkeletons ? 'Hide' : 'Show'} Skeletons
            </Button>
          </div>
          
          {showSkeletons && (
            <Row>
              <Col md={6} className="mb-3">
                <h6>Patient List Skeleton</h6>
                <SkeletonLoader type="patient-list" count={3} />
              </Col>
              <Col md={6} className="mb-3">
                <h6>Dashboard Widgets Skeleton</h6>
                <SkeletonLoader type="dashboard-widget" count={4} />
              </Col>
              <Col md={6} className="mb-3">
                <h6>Form Skeleton</h6>
                <SkeletonLoader type="form" fields={4} />
              </Col>
              <Col md={6} className="mb-3">
                <h6>Progress Notes Skeleton</h6>
                <SkeletonLoader type="progress-notes" count={2} />
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>

      {/* API Demo */}
      <Card className="mb-4">
        <Card.Header>
          <h5>API Integration Demo</h5>
        </Card.Header>
        <Card.Body>
          <div className="mb-3">
            <Button 
              variant="primary" 
              onClick={() => execute()}
              disabled={loading}
              className="me-2"
            >
              {loading ? 'Loading...' : 'Load Patients'}
            </Button>
            <Button 
              variant="outline-secondary" 
              onClick={reset}
              className="me-2"
            >
              Reset
            </Button>
          </div>
          
          {loading && (
            <div className="text-center my-3">
              <LoadingSpinner text="Loading patients..." />
            </div>
          )}
          
          {patients && patients.length > 0 && (
            <Alert variant="success">
              <strong>Success!</strong> Loaded {patients.length} patients from the API.
            </Alert>
          )}
        </Card.Body>
      </Card>

      {/* Notifications Demo */}
      <Card className="mb-4">
        <Card.Header>
          <h5>Notification System Demo</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={3} className="mb-2">
              <Button 
                variant="success" 
                onClick={() => success('Success!', 'This is a success notification.')}
                className="w-100"
              >
                Success
              </Button>
            </Col>
            <Col md={3} className="mb-2">
              <Button 
                variant="danger" 
                onClick={() => error('Error!', 'This is an error notification.')}
                className="w-100"
              >
                Error
              </Button>
            </Col>
            <Col md={3} className="mb-2">
              <Button 
                variant="warning" 
                onClick={() => warning('Warning!', 'This is a warning notification.')}
                className="w-100"
              >
                Warning
              </Button>
            </Col>
            <Col md={3} className="mb-2">
              <Button 
                variant="info" 
                onClick={() => info('Info!', 'This is an info notification.')}
                className="w-100"
              >
                Info
              </Button>
            </Col>
          </Row>
          
          <Row className="mt-3">
            <Col md={6}>
              <Button 
                variant="outline-primary" 
                onClick={() => showApiError({ type: 'network_error' }, 'Network Error')}
                className="w-100"
              >
                Show API Error
              </Button>
            </Col>
            <Col md={6}>
              <Button 
                variant="outline-secondary" 
                onClick={() => showApiError({ type: 'validation' }, 'Validation Error')}
                className="w-100"
              >
                Show Validation Error
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Error Boundary Demo */}
      <Card className="mb-4">
        <Card.Header>
          <h5>Error Boundary Demo</h5>
        </Card.Header>
        <Card.Body>
          <Alert variant="warning">
            <strong>Warning:</strong> Clicking the button below will trigger an error to test the error boundary.
          </Alert>
          <Button 
            variant="danger" 
            onClick={triggerError}
          >
            Trigger Error
          </Button>
        </Card.Body>
      </Card>

      {/* Usage Examples */}
      <Card>
        <Card.Header>
          <h5>Usage Examples</h5>
        </Card.Header>
        <Card.Body>
          <h6>Loading Spinner Usage:</h6>
          <pre className="bg-light p-2 rounded">
{`<LoadingSpinner 
  size="md" 
  variant="primary" 
  text="Loading..." 
  fullScreen={false} 
/>`}
          </pre>
          
          <h6>Skeleton Loader Usage:</h6>
          <pre className="bg-light p-2 rounded">
{`<SkeletonLoader 
  type="patient-list" 
  count={5} 
  className="custom-class" 
/>`}
          </pre>
          
          <h6>Notification Usage:</h6>
          <pre className="bg-light p-2 rounded">
{`const { success, error } = useNotifications();

success('Success!', 'Operation completed successfully.');
error('Error!', 'Something went wrong.');`}
          </pre>
          
          <h6>API Hook Usage:</h6>
          <pre className="bg-light p-2 rounded">
{`const { data, loading, error, execute } = useApi(apiFunction, {
  onSuccess: (data) => console.log('Success:', data),
  onError: (error) => console.error('Error:', error),
  retryCount: 3
});`}
          </pre>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FeatureDemo;
