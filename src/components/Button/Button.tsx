import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { CSSProperties } from 'react';

/**
 * Button variants
 */
export type ButtonVariant = 'default' | 'flat' | 'stroked' | 'basic' | 'toggle' | 'multi' | 'pressed' | 'disabled' | 'icon';

/**
 * Button sizes
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Button props
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button
   */
  variant?: ButtonVariant;
  /**
   * The size of the button
   */
  size?: ButtonSize;
  /**
   * Additional class name for custom styling
   */
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'default', size = 'medium', className = '', ...props }, ref) => {
  const styles: CSSProperties = {
    padding: size === 'small' ? '8px 12px' : size === 'large' ? '16px 24px' : '12px 18px',
    backgroundColor: variant === 'disabled' ? 'var(--color-disabled)' : 'var(--color-primary-buttons)',
    color: variant === 'disabled' ? 'var(--color-disabled-text)' : 'var(--color-text)',
    border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
    borderRadius: '4px',
    cursor: variant === 'disabled' ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-inter-medium-*)',
    fontSize: '14px',
    fontWeight: 500,
  };

  return (
    <button ref={ref} className={className} style={styles} {...props} />
  );
});

export default Button;
export { Button };