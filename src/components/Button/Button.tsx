// Button.tsx
import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

// Define the button variants
const VARIANTS = {
  primary: 'bg-var(--color-button-primary) text-var(--color-text-primary)',
  secondary: 'bg-var(--color-button-secondary) text-var(--color-text-primary)',
  ghost: 'bg-transparent text-var(--color-text-primary) border border-var(--color-text-primary)',
};

// Define the button sizes
const SIZES = {
  sm: 'py-1 px-3 text-var(--font-text-size)',
  md: 'py-2 px-4 text-var(--font-default-size)',
  lg: 'py-3 px-5 text-var(--font-large-header-size)',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'ghost';
  /**
   * The size of the button.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * If true, the button will show a loading spinner.
   * @default false
   */
  loading?: boolean;
  /**
   * If true, the button will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Additional className for custom styling.
   */
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(
        'inline-flex items-center justify-center rounded',
        VARIANTS[variant],
        SIZES[size],
        { 'opacity-50 cursor-not-allowed': disabled || loading },
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <span className="loader" /> : children}
    </button>
  );
});

export { Button };
export default Button;
