// Input.tsx

import React, { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

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
   * Error message displayed below the input field
   */
  error?: string;
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * The size of the input field
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Additional class names to apply to the input field
   */
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  placeholder,
  helperText,
  error,
  disabled = false,
  size = 'medium',
  className,
  ...props
}, ref) => {
  return (
    <div className={clsx('input-wrapper', className)}>
      <label className="input-label" style={{ font: 'var(--font-label-*)' }}>
        {label}
      </label>
      <input
        ref={ref}
        className={clsx('input-field', {
          'input-small': size === 'small',
          'input-medium': size === 'medium',
          'input-large': size === 'large',
          'input-error': !!error,
          'input-disabled': disabled,
        })}
        placeholder={placeholder}
        disabled={disabled}
        style={{
          color: 'var(--color-input-dropdown-txt)',
          backgroundColor: 'var(--color-input-dropdown)',
          borderColor: error ? 'var(--color-error)' : 'var(--color-d7e3ec)',
          font: 'var(--font-value-*)',
        }}
        {...props}
      />
      {helperText && !error && (
        <span className="input-helper-text" style={{ font: 'var(--font-helper-text-*)', color: 'var(--color-helper-text)' }}>
          {helperText}
        </span>
      )}
      {error && (
        <span className="input-error-text" style={{ font: 'var(--font-error-*)', color: 'var(--color-error)' }}>
          {error}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
export { Input };