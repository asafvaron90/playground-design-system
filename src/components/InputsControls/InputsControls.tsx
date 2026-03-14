// InputsControls.tsx
import React, { forwardRef } from 'react';

export interface InputsControlsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  /**
   * The size of the input control
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the input control
   */
  variant?: 'default' | 'outlined';
  /**
   * The state of the input control
   */
  state?: 'normal' | 'disabled' | 'error';
  /**
   * Additional class name for styling overrides
   */
  className?: string;
}

const InputsControls = forwardRef<HTMLDivElement, InputsControlsProps>(({ size = 'medium', variant = 'default', state = 'normal', className, ...props }, ref) => {
  const sizeStyles = {
    small: { fontSize: 'var(--font-label-sml-fontSize)', padding: '8px' },
    medium: { fontSize: 'var(--font-label-large-14-med-fontSize)', padding: '12px' },
    large: { fontSize: 'var(--font-primary-fontSize)', padding: '16px' },
  };

  const variantStyles = {
    default: { border: '1px solid var(--color-grey-stroke)', backgroundColor: 'var(--color-white-white)' },
    outlined: { border: '2px solid var(--color-primary)', backgroundColor: 'transparent' },
  };

  const stateStyles = {
    normal: { color: 'var(--color-body-text-frame-2147225184-default)' },
    disabled: { color: 'var(--color-disabled-text)', cursor: 'not-allowed' },
    error: { color: 'var(--color-red-error)' },
  };

  const styles = {
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...stateStyles[state],
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return <div ref={ref} className={className} style={styles} {...props} />;
});

InputsControls.displayName = 'InputsControls';

export default InputsControls;
export { InputsControls };