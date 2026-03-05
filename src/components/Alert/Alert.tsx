// Alert.tsx

import React, { forwardRef } from 'react';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The variant of the alert, determining its color scheme.
   */
  variant: 'info' | 'success' | 'warning' | 'error';
  /**
   * The size of the alert, determining its padding and font size.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional className for additional styling.
   */
  className?: string;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, size = 'medium', className, children, ...props }, ref) => {
    const variantStyles = {
      info: { backgroundColor: 'var(--color-bg-default)', color: 'var(--color-helper-text)' },
      success: { backgroundColor: 'var(--color-bg-surface)', color: 'var(--color-helper-text)' },
      warning: { backgroundColor: 'var(--color-menu-item)', color: 'var(--color-helper-text)' },
      error: { backgroundColor: 'var(--color-error)', color: 'var(--color-helper-text)' },
    };

    const sizeStyles = {
      small: { padding: '8px', fontFamily: 'var(--font-body-sm-family)', fontSize: 'var(--font-body-sm-size)', fontWeight: 'var(--font-body-sm-weight)', lineHeight: 'var(--font-body-sm-line-height)' },
      medium: { padding: '16px', fontFamily: 'var(--font-default-xl-family)', fontSize: 'var(--font-default-xl-size)', fontWeight: 'var(--font-default-xl-weight)', lineHeight: 'var(--font-default-xl-line-height)' },
      large: { padding: '24px', fontFamily: 'var(--font-heading-lg-family)', fontSize: 'var(--font-heading-lg-size)', fontWeight: 'var(--font-heading-lg-weight)', lineHeight: 'var(--font-heading-lg-line-height)' },
    };

    return (
      <div
        ref={ref}
        style={{
          borderRadius: '4px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          ...variantStyles[variant],
          ...sizeStyles[size],
        }}
        className={className}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export { Alert };
export default Alert;
