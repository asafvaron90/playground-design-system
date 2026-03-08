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
  variant?: 'default' | 'flat' | 'stroked';
  /**
   * If true, the text field will be disabled
   */
  disabled?: boolean;
  /**
   * Additional class names for styling
   */
  className?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(({
  size = 'medium',
  variant = 'default',
  disabled = false,
  className,
  ...props
}, ref) => {
  const styles = {
    base: {
      padding: size === 'small' ? '4px 8px' : size === 'large' ? '12px 16px' : '8px 12px',
      backgroundColor: variant === 'flat' ? 'var(--color-buttons-input)' : 'var(--color-white)',
      border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
      borderRadius: '4px',
      color: 'var(--color-text)',
      fontFamily: 'var(--font-inter-regular-*)',
      fontSize: '14px',
      outline: 'none',
      transition: 'background-color 0.3s ease',
      width: '100%',
    },
    disabled: {
      backgroundColor: 'var(--color-disabled)',
      color: 'var(--color-disabled-text)',
      cursor: 'not-allowed',
    },
  };

  return (
    <input
      ref={ref}
      type="text"
      className={className}
      disabled={disabled}
      style={{
        ...styles.base,
        ...(disabled ? styles.disabled : {}),
      }}
      {...props}
    />
  );
});

export default TextField;
export { TextField };