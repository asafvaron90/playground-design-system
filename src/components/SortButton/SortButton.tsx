// SortButton.tsx
import React from 'react';
import { forwardRef } from 'react';

export interface SortButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * The size of the button
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the button
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';
  /**
   * Whether the button is in a loading state
   * @default false
   */
  loading?: boolean;
  /**
   * Optional class name for styling overrides
   */
  className?: string;
}

const SortButton = forwardRef<HTMLButtonElement, SortButtonProps>(({
  size = 'md',
  variant = 'primary',
  loading = false,
  className,
  children,
  ...props
}, ref) => {
  const sizeStyles: Record<NonNullable<SortButtonProps['size']>, React.CSSProperties> = {
    sm: { fontSize: 'var(--font-label-sml)', padding: '4px 8px' },
    md: { fontSize: 'var(--font-label-large-14-med)', padding: '8px 16px' },
    lg: { fontSize: 'var(--font-headline-med-18-med)', padding: '12px 24px' },
  };

  const variantStyles: Record<NonNullable<SortButtonProps['variant']>, React.CSSProperties> = {
    primary: { backgroundColor: 'var(--color-home)', color: 'var(--color-white-white)' },
    secondary: { backgroundColor: 'var(--color-grey-100)', color: 'var(--color-grey-600-text)' },
  };

  const loadingStyles: React.CSSProperties = loading ? { opacity: 0.5, cursor: 'not-allowed' } : {};

  const styles: React.CSSProperties = {
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...loadingStyles,
    border: 'none',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s',
    ...props.style,
  };

  return (
    <button ref={ref} className={className} style={styles} disabled={loading} {...props}>
      {children}
    </button>
  );
});

SortButton.displayName = 'SortButton';

export { SortButton };
export default SortButton;
