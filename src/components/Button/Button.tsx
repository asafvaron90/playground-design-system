// Button.tsx
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   * - 'default': Standard button with background color.
   * - 'flat': Button with no background.
   * - 'stroked': Button with a border.
   * - 'basic': Basic button with minimal styling.
   * - 'icon': Button meant for icons.
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic' | 'icon';
  /**
   * The size of the button.
   * - 'small': Small button size.
   * - 'medium': Medium button size.
   * - 'large': Large button size.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional class names to apply to the button.
   */
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'default',
  size = 'medium',
  disabled = false,
  className = '',
  children,
  ...props
}, ref) => {
  const styles = {
    base: {
      fontFamily: 'var(--font-large-header)',
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      padding: size === 'small' ? '4px 8px' : size === 'large' ? '12px 24px' : '8px 16px',
      fontSize: size === 'small' ? '12px' : size === 'large' ? '18px' : '14px',
      opacity: disabled ? 0.6 : 1,
      transition: 'background-color 0.3s, border-color 0.3s',
    },
    default: {
      backgroundColor: 'var(--color-primary-buttons)',
      color: 'var(--color-white)',
      border: 'none',
    },
    flat: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary-buttons)',
      border: 'none',
    },
    stroked: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary-buttons)',
      border: `1px solid var(--color-primary-buttons)`,
    },
    basic: {
      backgroundColor: 'var(--color-buttons-input)',
      color: 'var(--color-text-field)',
      border: 'none',
    },
    icon: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary-buttons)',
      border: 'none',
      padding: '8px',
    },
  };

  const variantStyle = styles[variant];

  return (
    <button
      ref={ref}
      className={className}
      style={{ ...styles.base, ...variantStyle }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

export { Button };
export default Button;
