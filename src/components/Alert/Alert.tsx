// Alert.tsx
import React, { forwardRef } from 'react';
import classNames from 'classnames';

interface AlertProps {
  /**
   * The variant of the alert, determining its color scheme.
   */
  variant: 'info' | 'success' | 'warning' | 'error';
  /**
   * The size of the alert.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Additional class names to apply to the alert.
   */
  className?: string;
  /**
   * The content of the alert.
   */
  children: React.ReactNode;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(({
  variant,
  size = 'medium',
  className,
  children,
}, ref) => {
  const variantClasses = {
    info: 'var(--color-e7f4fd)',
    success: 'var(--color-25a96b)',
    warning: 'var(--color-ba7714)',
    error: 'var(--color-c84747)',
  };

  const sizeClasses = {
    small: 'var(--font-text-*)',
    medium: 'var(--font-default-*)',
    large: 'var(--font-large-header-*)',
  };

  return (
    <div
      ref={ref}
      className={classNames('alert', className)}
      style={{
        backgroundColor: variantClasses[variant],
        fontSize: sizeClasses[size],
      }}
    >
      {children}
    </div>
  );
});

export { Alert };
export default Alert;
