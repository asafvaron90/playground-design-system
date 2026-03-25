// NavigationBar.tsx
import React from 'react';

export interface NavigationBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The title to display in the navigation bar.
   */
  title: string;
  /**
   * The size of the navigation bar.
   * 'sm' for small, 'md' for medium, 'lg' for large.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the navigation bar.
   * 'default' for standard, 'primary' for primary styling.
   */
  variant?: 'default' | 'primary';
  /**
   * If true, the navigation bar is in a loading state.
   */
  isLoading?: boolean;
  /**
   * Additional class names to apply to the navigation bar.
   */
  className?: string;
}

const NavigationBar = React.forwardRef<HTMLDivElement, NavigationBarProps>(({
  title,
  size = 'md',
  variant = 'default',
  isLoading = false,
  className,
  ...props
}, ref) => {
  const sizeStyles: Record<NonNullable<NavigationBarProps['size']>, React.CSSProperties> = {
    sm: { height: '40px', fontSize: '14px' },
    md: { height: '50px', fontSize: '16px' },
    lg: { height: '60px', fontSize: '18px' },
  };

  const variantStyles: Record<NonNullable<NavigationBarProps['variant']>, React.CSSProperties> = {
    default: { backgroundColor: 'var(--color-grey-100)', color: 'var(--color-grey-600-text)' },
    primary: { backgroundColor: 'var(--color-home)', color: 'var(--color-white-white)' },
  };

  const styles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    boxSizing: 'border-box',
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  return (
    <div ref={ref} style={styles} className={className} {...props}>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        ← Back
      </button>
      <div>{isLoading ? 'Loading...' : title}</div>
    </div>
  );
});

NavigationBar.displayName = 'NavigationBar';

export { NavigationBar };
export default NavigationBar;
