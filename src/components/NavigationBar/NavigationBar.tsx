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
   * 'primary' for main navigation, 'secondary' for sub-navigation.
   */
  variant?: 'primary' | 'secondary';
  /**
   * Additional icons or elements to display in the navigation bar.
   */
  children?: ReactNode;
  /**
   * Additional class names to apply to the navigation bar.
   */
  className?: string;
}

const NavigationBar = forwardRef<HTMLDivElement, NavigationBarProps>(({
  title,
  size = 'md',
  variant = 'primary',
  children,
  className,
  ...rest
}, ref) => {
  const styles: Record<'primary' | 'secondary', React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--color-home)',
      color: 'var(--color-white-white)',
    },
    secondary: {
      backgroundColor: 'var(--color-grey-buttons-bg)',
      color: 'var(--color-grey-secondary-body-text)',
    },
  };

  const sizeStyles: Record<'sm' | 'md' | 'lg', React.CSSProperties> = {
    sm: {
      height: '40px',
      fontSize: 'var(--font-label-sml)',
    },
    md: {
      height: '56px',
      fontSize: 'var(--font-headline-reg-16-reg)',
    },
    lg: {
      height: '72px',
      fontSize: 'var(--font-headline-med-18-med)',
    },
  };

  const combinedStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    ...styles[variant],
    ...sizeStyles[size],
  };

  return (
    <div ref={ref} className={className} style={combinedStyles} {...rest}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  );
});

NavigationBar.displayName = 'NavigationBar';

export { NavigationBar };
export default NavigationBar;
