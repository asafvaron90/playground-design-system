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
      <label className="input-label" style={{ fontFamily: 'var(--font-label-sm-family)', fontSize: 'var(--font-label-sm-size)', fontWeight: 'var(--font-label-sm-weight)', lineHeight: 'var(--font-label-sm-line-height)' }}>
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
          color: 'var(--color-input-text)',
          backgroundColor: 'var(--color-input-bg)',
          borderColor: error ? 'var(--color-error)' : 'var(--color-bg-surface)',
          fontFamily: 'var(--font-body-md-family)',
          fontSize: 'var(--font-body-md-size)',
          fontWeight: 'var(--font-body-md-weight)',
          lineHeight: 'var(--font-body-md-line-height)',
        }}
        {...props}
      />
      {helperText && !error && (
        <span className="input-helper-text" style={{ fontFamily: 'var(--font-body-sm-family)', fontSize: 'var(--font-body-sm-size)', fontWeight: 'var(--font-body-sm-weight)', lineHeight: 'var(--font-body-sm-line-height)', color: 'var(--color-text-helper)' }}>
          {helperText}
        </span>
      )}
      {error && (
        <span className="input-error-text" style={{ fontFamily: 'var(--font-error-family)', fontSize: 'var(--font-error-size)', fontWeight: 'var(--font-error-weight)', lineHeight: 'var(--font-error-line-height)', color: 'var(--color-error)' }}>
          {error}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
export { Input };