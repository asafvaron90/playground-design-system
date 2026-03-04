// Button.tsx
import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

// Define the button variants
const VARIANTS = {
  primary: 'bg-var(--color-new-buttons) text-var(--color-new-ffffff)',
  secondary: 'bg-var(--color-button) text-var(--color-1b293a)',
  ghost: 'bg-transparent text-var(--color-1b293a) border border-var(--color-1b293a)',
};

// Define the button sizes
const SIZES = {
  sm: 'py-1 px-3 text-var(--font-text-*)',
  md: 'py-2 px-4 text-var(--font-default-*)',
  lg: 'py-3 px-5 text-var(--font-buttons-*)',
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
