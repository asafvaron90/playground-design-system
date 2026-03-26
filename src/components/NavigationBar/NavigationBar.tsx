// NavigationBar.tsx
import React, { forwardRef } from 'react';
import type { ReactNode } from 'react';

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
   * 'primary' or 'secondary'.
   */
  variant?: 'primary' | 'secondary';
  /**
   * The state of the navigation bar.
   * 'default' or 'disabled'.
   */
  state?: 'default' | 'disabled';
  /**
   * Additional className for custom styling.
   */
  className?: string;
  /**
   * The back button content, typically an icon or text.
   */
  backButtonContent?: ReactNode;
}

const NavigationBar = forwardRef<HTMLDivElement, NavigationBarProps>(({
  title,
  size = 'md',
  variant = 'primary',
  state = 'default',
  className,
  backButtonContent = 'Back',
  ...props
}, ref) => {
  const styles: Record<NonNullable<NavigationBarProps['size']>, React.CSSProperties> = {
    sm: { height: '40px', fontSize: '14px' },
    md: { height: '50px', fontSize: '16px' },
    lg: { height: '60px', fontSize: '18px' },
  };

  const variantStyles: Record<NonNullable<NavigationBarProps['variant']>, React.CSSProperties> = {
    primary: { backgroundColor: 'var(--color-home)', color: 'var(--color-white-white)' },
    secondary: { backgroundColor: 'var(--color-grey-page-1)', color: 'var(--color-grey-600-text)' },
  };

  const stateStyles: Record<NonNullable<NavigationBarProps['state']>, React.CSSProperties> = {
    default: {},
    disabled: { opacity: 0.5, pointerEvents: 'none' },
  };

  const combinedStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    ...styles[size],
    ...variantStyles[variant],
    ...stateStyles[state],
  };

  return (
    <div ref={ref} style={combinedStyles} className={className} {...props}>
      <button style={{ border: 'none', background: 'none', color: 'inherit', cursor: 'pointer' }}>
        {backButtonContent}
      </button>
      <span>{title}</span>
    </div>
  );
});

export { NavigationBar };
export default NavigationBar;
