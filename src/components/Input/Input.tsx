// Input.tsx
import React, { InputHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The label for the input field
   */
  label: string;
  /**
   * The placeholder text for the input field
   */
  placeholder?: string;
  /**
   * Helper text displayed below the input field
   */
  helperText?: string;
  /**
   * If true, the input field will be disabled
   */
  disabled?: boolean;
  /**
   * If true, the input field will display an error state
   */
  error?: boolean;
  /**
   * Additional class names for styling
   */
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  placeholder,
  helperText,
  disabled = false,
  error = false,
  className,
  ...props
}, ref) => {
  return (
    <div className={classNames('input-wrapper', className)}>
      <label className="input-label" style={{ fontFamily: 'var(--font-label-*)' }}>
        {label}
      </label>
      <input
        ref={ref}
        className={classNames('input-field', {
          'input-error': error,
          'input-disabled': disabled,
        })}
        placeholder={placeholder}
        disabled={disabled}
        style={{
          fontFamily: 'var(--font--input-text-*)',
          backgroundColor: disabled ? 'var(--color-buttons)' : 'var(--color-input-dropdown)',
          color: error ? 'var(--color-error)' : 'var(--color-input-dropdown-txt)',
        }}
        {...props}
      />
      {helperText && (
        <span className="input-helper-text" style={{ fontFamily: 'var(--font-helper-text-*)' }}>
          {helperText}
        </span>
      )}
    </div>
  );
});

export default Input;
export { Input };