// SortButton.tsx
import React from 'react';
import type { ButtonHTMLAttributes } from 'react';

export interface SortButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button.
   */
  variant?: 'primary' | 'secondary';
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * Custom class name for styling overrides.
   */
  className?: string;
}

const SortButton = React.forwardRef<HTMLButtonElement, SortButtonProps>(({
  size = 'medium',
  variant = 'primary',
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  const styles: Record<NonNullable<SortButtonProps['variant']>, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--color-home)',
      color: 'var(--color-white-white)',
    },
    secondary: {
      backgroundColor: 'var(--color-grey-2)',
      color: 'var(--color-grey-600-text)',
    },
  };

  const sizeStyles: Record<NonNullable<SortButtonProps['size']>, React.CSSProperties> = {
    small: {
      padding: '4px 8px',
      fontSize: 'var(--font-label-sml-*)',
    },
    medium: {
      padding: '8px 16px',
      fontSize: 'var(--font-label-large-14-med-*)',
    },
    large: {
      padding: '12px 24px',
      fontSize: 'var(--font-headline-reg-16-med-*)',
    },
  };

  return (
    <button
      ref={ref}
      className={className}
      style={{
        ...styles[variant],
        ...sizeStyles[size],
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      disabled={disabled}
      {...props}
    >
      {children}
      <span style={{ marginLeft: '8px' }}>▼</span>
    </button>
  );
});

SortButton.displayName = 'SortButton';

export { SortButton };
export default SortButton;
