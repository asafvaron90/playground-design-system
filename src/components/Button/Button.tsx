// full .tsx file content based on the template
import React from 'react';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic' | 'toggle' | 'multi' | 'pressed' | 'disabled' | 'icon';
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional class name for custom styling.
   */
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  size = 'medium',
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  const styles = {
    base: {
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background-color 0.3s',
      fontFamily: 'var(--font-button-text-*)',
      fontSize: 'var(--font-button-text-*)',
      fontWeight: 500,
    },
    variants: {
      default: {
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-white-white)',
      },
      flat: {
        backgroundColor: 'transparent',
        color: 'var(--color-primary)',
      },
      stroked: {
        backgroundColor: 'transparent',
        border: '1px solid var(--color-primary)',
        color: 'var(--color-primary)',
      },
      basic: {
        backgroundColor: 'var(--color-buttons)',
        color: 'var(--color-white-white)',
      },
      toggle: {
        backgroundColor: 'var(--color-selected-secondary-button)',
        color: 'var(--color-body-text-frame-2147225184-default)',
      },
      multi: {
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-white-white)',
      },
      pressed: {
        backgroundColor: 'var(--color-grey-page-1)',
        color: 'var(--color-white-white)',
      },
      disabled: {
        backgroundColor: 'var(--color-disabled)',
        color: 'var(--color-disabled-text)',
      },
      icon: {
        backgroundColor: 'transparent',
        color: 'var(--color-icons)',
      },
    },
    sizes: {
      small: {
        padding: '5px 10px',
        fontSize: '12px',
      },
      medium: {
        padding: '10px 20px',
        fontSize: '14px',
      },
      large: {
        padding: '15px 30px',
        fontSize: '16px',
      },
    },
  };

  const combinedStyles = {
    ...styles.base,
    ...styles.variants[variant],
    ...styles.sizes[size],
  };

  return (
    <button
      ref={ref}
      style={combinedStyles}
      className={className}
      disabled={disabled || variant === 'disabled'}
      {...props}
    >
      {children}
    </button>
  );
});

export { Button };
export default Button;
