// SortButton.tsx
import React from 'react';
import { forwardRef } from 'react';

export interface SortButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * The size of the button.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the button.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';
  /**
   * If true, the button will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Additional class name for custom styling.
   */
  className?: string;
}

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
  sm: {
    fontSize: 'var(--font-label-sml)',
    padding: '4px 8px',
  },
  md: {
    fontSize: 'var(--font-label-large-14-med)',
    padding: '8px 16px',
  },
  lg: {
    fontSize: 'var(--font-headline-med-18-med)',
    padding: '12px 24px',
  },
};

const SortButton = forwardRef<HTMLButtonElement, SortButtonProps>(({
  size = 'md',
  variant = 'primary',
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  const variantStyle = styles[variant];
  const sizeStyle = sizeStyles[size];

  return (
    <button
      ref={ref}
      style={{
        ...variantStyle,
        ...sizeStyle,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
      }}
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

SortButton.displayName = 'SortButton';

export { SortButton };
export default SortButton;
