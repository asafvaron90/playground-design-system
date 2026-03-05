// Button.tsx
import React, { forwardRef, ButtonHTMLAttributes } from 'react';

// Define the button variants
const VARIANTS = {
  primary: { backgroundColor: 'var(--color-button-primary)', color: 'var(--color-text-primary)' },
  secondary: { backgroundColor: 'var(--color-button-secondary)', color: 'var(--color-text-primary)' },
  ghost: { backgroundColor: 'transparent', color: 'var(--color-text-primary)', border: '1px solid var(--color-text-primary)' },
};

// Define the button sizes
const SIZES = {
  sm: { padding: '4px 12px', fontSize: 'var(--font-body-sm-size)', fontFamily: 'var(--font-body-sm-family)', fontWeight: 'var(--font-body-sm-weight)', lineHeight: 'var(--font-body-sm-line-height)' },
  md: { padding: '8px 16px', fontSize: 'var(--font-value-md-size)', fontFamily: 'var(--font-value-md-family)', fontWeight: 'var(--font-value-md-weight)', lineHeight: 'var(--font-value-md-line-height)' },
  lg: { padding: '12px 20px', fontSize: 'var(--font-heading-lg-size)', fontFamily: 'var(--font-heading-lg-family)', fontWeight: 'var(--font-heading-lg-weight)', lineHeight: 'var(--font-heading-lg-line-height)' },
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
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4px',
        opacity: disabled || loading ? 0.5 : 1,
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        ...VARIANTS[variant],
        ...SIZES[size],
      }}
      disabled={disabled || loading}
      className={className}
      {...props}
    >
      {loading ? <span className="loader" /> : children}
    </button>
  );
});

export { Button };
export default Button;
