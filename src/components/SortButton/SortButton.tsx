// SortButton.tsx
import React from 'react';
import { forwardRef } from 'react';

/**
 * Props for the SortButton component.
 */
export interface SortButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
   * Additional class names to apply to the button.
   */
  className?: string;
}

const sizeStyles: Record<NonNullable<SortButtonProps['size']>, React.CSSProperties> = {
  sm: { fontSize: 'var(--font-label-sml)', padding: '4px 8px' },
  md: { fontSize: 'var(--font-label-large-14-med)', padding: '8px 16px' },
  lg: { fontSize: 'var(--font-headline-reg-16-med)', padding: '12px 24px' },
};

const variantStyles: Record<NonNullable<SortButtonProps['variant']>, React.CSSProperties> = {
  primary: { backgroundColor: 'var(--color-home)', color: 'var(--color-white-white)' },
  secondary: { backgroundColor: 'var(--color-grey-buttons-bg)', color: 'var(--color-grey-2)' },
};

/**
 * A button component with text and an icon, used for sorting options.
 */
export const SortButton = forwardRef<HTMLButtonElement, SortButtonProps>(({
  size = 'md',
  variant = 'primary',
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  const styles: React.CSSProperties = {
    ...sizeStyles[size],
    ...variantStyles[variant],
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <button ref={ref} className={className} style={styles} disabled={disabled} {...props}>
      {children}
    </button>
  );
});

SortButton.displayName = 'SortButton';

export default SortButton;
