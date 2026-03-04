// Alert.tsx

import React, { forwardRef } from 'react';
import clsx from 'clsx';

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
    const variantClasses = {
      info: 'bg-[var(--color-light-blue---info)] text-[var(--font-light-blue---info)]',
      success: 'bg-[var(--color-green---success)] text-[var(--font-green---success)]',
      warning: 'bg-[var(--color-orange---warning)] text-[var(--font-orange---warning)]',
      error: 'bg-[var(--color-red---error)] text-[var(--font-red---error)]',
    };

    const sizeClasses = {
      small: 'p-2 text-sm',
      medium: 'p-4 text-base',
      large: 'p-6 text-lg',
    };

    return (
      <div
        ref={ref}
        className={clsx(
          'rounded shadow-md',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
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
