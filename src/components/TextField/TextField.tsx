// TextField.tsx
import React, { InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The size of the text field
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the text field
   */
  variant?: 'outlined' | 'filled' | 'standard';
  /**
   * The state of the text field
   */
  state?: 'default' | 'error' | 'disabled';
  /**
   * Additional class name for custom styling
   */
  className?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(({
  size = 'medium',
  variant = 'outlined',
  state = 'default',
  className,
  ...props
}, ref) => {
  const styles = {
    base: {
      fontFamily: 'var(--font-inter-regular)',
      padding: '8px 12px',
      borderRadius: '4px',
      border: '1px solid',
      outline: 'none',
      width: '100%',
    },
    size: {
      small: {
        fontSize: '12px',
      },
      medium: {
        fontSize: '14px',
      },
      large: {
        fontSize: '16px',
      },
    },
    variant: {
      outlined: {
        backgroundColor: 'var(--color-white-white)',
        borderColor: 'var(--color-divider-stroke)',
      },
      filled: {
        backgroundColor: 'var(--color-buttons-input)',
        borderColor: 'transparent',
      },
      standard: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderBottom: '1px solid var(--color-divider-stroke)',
      },
    },
    state: {
      default: {
        color: 'var(--color-body-text)',
      },
      error: {
        color: 'var(--color-error)',
        borderColor: 'var(--color-red-error-text-field)',
      },
      disabled: {
        color: 'var(--color-disabled-text)',
        backgroundColor: 'var(--color-disabled)',
        cursor: 'not-allowed',
      },
    },
  };

  return (
    <input
      ref={ref}
      className={className}
      style={{
        ...styles.base,
        ...styles.size[size],
        ...styles.variant[variant],
        ...styles.state[state],
      }}
      disabled={state === 'disabled'}
      {...props}
    />
  );
});

export { TextField };
export default TextField;
