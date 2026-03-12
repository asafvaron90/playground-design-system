// TextField.tsx
import React, { InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The variant of the text field, which determines the background color.
   */
  variant?: 'default' | 'light' | 'dark';
  /**
   * The size of the text field.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If true, the text field will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional class name for custom styling.
   */
  className?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(({
  variant = 'default',
  size = 'medium',
  disabled = false,
  className,
  ...props
}, ref) => {
  const backgroundColor = {
    default: 'var(--color-dialog-sections)',
    light: 'var(--color-white-white)',
    dark: 'var(--color-section)',
  }[variant];

  const fontSize = {
    small: 'var(--font-inter-12-regular)',
    medium: 'var(--font-inter-regular)',
    large: 'var(--font-body-text)',
  }[size];

  const styles = {
    backgroundColor,
    fontSize,
    padding: '8px 12px',
    border: `1px solid ${disabled ? 'var(--color-disabled)' : 'var(--color-divider-stroke)'}`,
    borderRadius: '4px',
    color: disabled ? 'var(--color-disabled-text)' : 'var(--color-body-text)',
    width: '100%',
    boxSizing: 'border-box' as const,
  };

  return (
    <input
      ref={ref}
      type="text"
      disabled={disabled}
      className={className}
      style={styles}
      {...props}
    />
  );
});

export default TextField;
export { TextField };