// Common components exports
export { default as ErrorBoundary, withErrorBoundary, useErrorHandler } from './ErrorBoundary';
export { default as LoadingSpinner } from './LoadingSpinner';
export { default as SkeletonLoader } from './SkeletonLoader';
export { default as NotificationProvider, useNotifications, NOTIFICATION_TYPES } from './NotificationSystem';

// Re-export specific skeleton components
export {
  TableRowSkeleton,
  CardSkeleton,
  PatientListSkeleton,
  DashboardWidgetSkeleton,
  FormSkeleton,
  ProgressNoteSkeleton,
  TreatmentPlanSkeleton,
} from './SkeletonLoader';
