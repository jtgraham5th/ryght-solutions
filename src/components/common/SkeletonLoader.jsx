import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './SkeletonLoader.css';

// Skeleton for table rows
export const TableRowSkeleton = ({ columns = 4, className = '' }) => (
  <div className={`skeleton-table-row ${className}`}>
    {Array.from({ length: columns }).map((_, index) => (
      <div key={index} className="skeleton-cell skeleton-pulse" />
    ))}
  </div>
);

// Skeleton for cards
export const CardSkeleton = ({ 
  title = true, 
  body = true, 
  footer = false, 
  className = '' 
}) => (
  <Card className={`skeleton-card ${className}`}>
    {title && (
      <Card.Header>
        <div className="skeleton-title skeleton-pulse" />
      </Card.Header>
    )}
    {body && (
      <Card.Body>
        <div className="skeleton-text skeleton-pulse" />
        <div className="skeleton-text skeleton-pulse" style={{ width: '75%' }} />
        <div className="skeleton-text skeleton-pulse" style={{ width: '50%' }} />
      </Card.Body>
    )}
    {footer && (
      <Card.Footer>
        <div className="skeleton-text skeleton-pulse" style={{ width: '30%' }} />
      </Card.Footer>
    )}
  </Card>
);

// Skeleton for patient list
export const PatientListSkeleton = ({ count = 5 }) => (
  <div className="skeleton-patient-list">
    {Array.from({ length: count }).map((_, index) => (
      <Card key={index} className="skeleton-patient-item mb-3">
        <Card.Body>
          <Row>
            <Col md={3}>
              <div className="skeleton-avatar skeleton-pulse" />
            </Col>
            <Col md={9}>
              <div className="skeleton-name skeleton-pulse" />
              <div className="skeleton-text skeleton-pulse" style={{ width: '60%' }} />
              <div className="skeleton-text skeleton-pulse" style={{ width: '40%' }} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    ))}
  </div>
);

// Skeleton for dashboard widgets
export const DashboardWidgetSkeleton = ({ count = 4 }) => (
  <Row>
    {Array.from({ length: count }).map((_, index) => (
      <Col key={index} md={3} className="mb-3">
        <Card className="skeleton-widget">
          <Card.Body className="text-center">
            <div className="skeleton-icon skeleton-pulse" />
            <div className="skeleton-number skeleton-pulse" />
            <div className="skeleton-label skeleton-pulse" />
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

// Skeleton for forms
export const FormSkeleton = ({ fields = 6, className = '' }) => (
  <div className={`skeleton-form ${className}`}>
    {Array.from({ length: fields }).map((_, index) => (
      <div key={index} className="skeleton-form-group">
        <div className="skeleton-label skeleton-pulse" />
        <div className="skeleton-input skeleton-pulse" />
      </div>
    ))}
    <div className="skeleton-button skeleton-pulse" />
  </div>
);

// Skeleton for progress notes
export const ProgressNoteSkeleton = ({ count = 3 }) => (
  <div className="skeleton-progress-notes">
    {Array.from({ length: count }).map((_, index) => (
      <Card key={index} className="skeleton-note mb-3">
        <Card.Header>
          <div className="d-flex justify-content-between">
            <div className="skeleton-date skeleton-pulse" />
            <div className="skeleton-therapist skeleton-pulse" />
          </div>
        </Card.Header>
        <Card.Body>
          <div className="skeleton-content skeleton-pulse" />
          <div className="skeleton-content skeleton-pulse" style={{ width: '80%' }} />
          <div className="skeleton-content skeleton-pulse" style={{ width: '60%' }} />
        </Card.Body>
      </Card>
    ))}
  </div>
);

// Skeleton for treatment plans
export const TreatmentPlanSkeleton = ({ count = 2 }) => (
  <div className="skeleton-treatment-plan">
    {Array.from({ length: count }).map((_, index) => (
      <Card key={index} className="skeleton-goal mb-3">
        <Card.Header>
          <div className="skeleton-goal-title skeleton-pulse" />
        </Card.Header>
        <Card.Body>
          <div className="skeleton-goal-description skeleton-pulse" />
          <div className="skeleton-objectives skeleton-pulse" />
          <div className="skeleton-interventions skeleton-pulse" />
        </Card.Body>
      </Card>
    ))}
  </div>
);

// Main skeleton loader component
const SkeletonLoader = ({ 
  type = 'card', 
  count = 1, 
  className = '',
  ...props 
}) => {
  switch (type) {
    case 'table-row':
      return <TableRowSkeleton {...props} className={className} />;
    case 'card':
      return <CardSkeleton {...props} className={className} />;
    case 'patient-list':
      return <PatientListSkeleton count={count} />;
    case 'dashboard-widget':
      return <DashboardWidgetSkeleton count={count} />;
    case 'form':
      return <FormSkeleton {...props} className={className} />;
    case 'progress-notes':
      return <ProgressNoteSkeleton count={count} />;
    case 'treatment-plan':
      return <TreatmentPlanSkeleton count={count} />;
    default:
      return <CardSkeleton {...props} className={className} />;
  }
};

export default SkeletonLoader;
