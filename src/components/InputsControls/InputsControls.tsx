// InputsControls.tsx
import React, { forwardRef } from 'react';
import type { ReactNode } from 'react';

interface InputsControlsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  /**
   * The content of the InputsControls component.
   */
  children: ReactNode;
  /**
   * The size of the component.
   * 'small' | 'medium' | 'large'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the component.
   * 'default' | 'outlined'
   */
  variant?: 'default' | 'outlined';
  /**
   * If true, the component is disabled.
   */
  disabled?: boolean;
  /**
   * Additional class name for styling overrides.
   */
  className?: string;
}

const InputsControls = forwardRef<HTMLDivElement, InputsControlsProps>(({
  children,
  size = 'medium',
  variant = 'default',
  disabled = false,
  className,
  ...props
}, ref) => {
  const sizeStyles = {
    small: { padding: '4px 8px', fontSize: '12px' },
    medium: { padding: '8px 16px', fontSize: '14px' },
    large: { padding: '12px 24px', fontSize: '16px' },
  };

  const variantStyles = {
    default: {
      backgroundColor: 'var(--color-grey-page-2)',
      border: 'none',
    },
    outlined: {
      backgroundColor: 'transparent',
      border: `1px solid var(--color-grey-stroke)`
    },
  };

  const styles = {
    ...sizeStyles[size],
    ...variantStyles[variant],
    color: disabled ? 'var(--color-disabled-text)' : 'var(--color-body-text-buttons)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div ref={ref} className={className} style={styles} {...props}>
      {children}
    </div>
  );
});

export default InputsControls;
export { InputsControls };