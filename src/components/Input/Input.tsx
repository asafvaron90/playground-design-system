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
      <label className="input-label" style={{ fontFamily: 'var(--font-label-family)', fontSize: 'var(--font-label-size)', fontWeight: 'var(--font-label-weight)', lineHeight: 'var(--font-label-line-height)' }}>
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
          fontFamily: 'var(--font-text-field-family)',
          fontSize: 'var(--font-text-field-size)',
          fontWeight: 'var(--font-text-field-weight)',
          lineHeight: 'var(--font-text-field-line-height)',
        }}
        {...props}
      />
      {helperText && !error && (
        <span className="input-helper-text" style={{ fontFamily: 'var(--font-assistive-text-family)', fontSize: 'var(--font-assistive-text-size)', fontWeight: 'var(--font-assistive-text-weight)', lineHeight: 'var(--font-assistive-text-line-height)', color: 'var(--color-helper-text)' }}>
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