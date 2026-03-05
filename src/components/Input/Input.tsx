// Input.tsx

import React, { forwardRef, InputHTMLAttributes } from 'react';

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
    <div className={className}>
      <label className="input-label" style={{ fontFamily: 'var(--font-label-sm-family)', fontSize: 'var(--font-label-sm-size)', fontWeight: 'var(--font-label-sm-weight)', lineHeight: 'var(--font-label-sm-line-height)' }}>
        {label}
      </label>
      <input
        ref={ref}
        className={className}
        placeholder={placeholder}
        disabled={disabled}
        style={{
          color: 'var(--color-input-dropdown-text)',
          backgroundColor: 'var(--color-input-dropdown)',
          borderColor: error ? 'var(--color-error)' : 'var(--color-bg-surface)',
          fontFamily: 'var(--font-text-field-xxl-family)',
          fontSize: 'var(--font-text-field-xxl-size)',
          fontWeight: 'var(--font-text-field-xxl-weight)',
          lineHeight: 'var(--font-text-field-xxl-line-height)',
        }}
        {...props}
      />
      {helperText && !error && (
        <span className="input-helper-text" style={{ fontFamily: 'var(--font-assistive-text-xl-family)', fontSize: 'var(--font-assistive-text-xl-size)', fontWeight: 'var(--font-assistive-text-xl-weight)', lineHeight: 'var(--font-assistive-text-xl-line-height)', color: 'var(--color-helper-text)' }}>
          {helperText}
        </span>
      )}
      {error && (
        <span className="input-error-text" style={{ fontFamily: 'var(--font-error-xl-family)', fontSize: 'var(--font-error-xl-size)', fontWeight: 'var(--font-error-xl-weight)', lineHeight: 'var(--font-error-xl-line-height)', color: 'var(--color-error)' }}>
          {error}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
export { Input };