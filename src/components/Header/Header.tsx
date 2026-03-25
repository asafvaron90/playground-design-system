// Header.tsx
import React from 'react';
import { forwardRef } from 'react';

export interface HeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * The title text to display in the header.
   */
  title: string;
  /**
   * The size of the header.
   * 'sm' for small, 'md' for medium, 'lg' for large.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the header.
   * 'primary' for main headers, 'secondary' for sub-headers.
   */
  variant?: 'primary' | 'secondary';
  /**
   * If true, the header is in a loading state.
   */
  isLoading?: boolean;
  /**
   * Additional className for custom styling.
   */
  className?: string;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(({
  title,
  size = 'md',
  variant = 'primary',
  isLoading = false,
  className,
  ...props
}, ref) => {
  const sizeStyles: Record<NonNullable<HeaderProps['size']>, React.CSSProperties> = {
    sm: { fontSize: 'var(--font-label-sml)', padding: '8px 16px' },
    md: { fontSize: 'var(--font-headline-reg-16-reg)', padding: '12px 20px' },
    lg: { fontSize: 'var(--font-headline-med-18-med)', padding: '16px 24px' },
  };

  const variantStyles: Record<NonNullable<HeaderProps['variant']>, React.CSSProperties> = {
    primary: { backgroundColor: 'var(--color-home)', color: 'var(--color-white-white)' },
    secondary: { backgroundColor: 'var(--color-grey-100)', color: 'var(--color-grey-600-text)' },
  };

  const styles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  return (
    <div ref={ref} className={className} style={styles} {...props}>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>&larr;</button>
      <span>{isLoading ? 'Loading...' : title}</span>
    </div>
  );
});

export { Header };
export default Header;
