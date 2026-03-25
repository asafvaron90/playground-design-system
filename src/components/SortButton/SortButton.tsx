// SortButton.tsx
import React from 'react';

export interface SortButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The size of the button.
   * 'sm' for small, 'md' for medium, 'lg' for large.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the button.
   * 'primary' for primary style, 'secondary' for secondary style.
   */
  variant?: 'primary' | 'secondary';
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * Optional class name for styling overrides.
   */
  className?: string;
}

const SortButton = React.forwardRef<HTMLButtonElement, SortButtonProps>(({
  size = 'md',
  variant = 'primary',
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  const sizeStyles: Record<NonNullable<SortButtonProps['size']>, React.CSSProperties> = {
    sm: { fontSize: 'var(--font-label-sml)', padding: '4px 8px' },
    md: { fontSize: 'var(--font-label-large-14-med)', padding: '8px 16px' },
    lg: { fontSize: 'var(--font-headline-reg-16-med)', padding: '12px 24px' },
  };

  const variantStyles: Record<NonNullable<SortButtonProps['variant']>, React.CSSProperties> = {
    primary: { backgroundColor: 'var(--color-buttons)', color: 'var(--color-white-white)' },
    secondary: { backgroundColor: 'var(--color-grey-buttons-bg)', color: 'var(--color-grey-secondary-body-text)' },
  };

  const styles: React.CSSProperties = {
    ...sizeStyles[size],
    ...variantStyles[variant],
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <button
      ref={ref}
      className={className}
      style={styles}
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
