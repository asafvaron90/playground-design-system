// NavigationBar.tsx
import React from 'react';

export interface NavigationBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The title to display in the navigation bar.
   */
  title: string;
  /**
   * The size of the navigation bar.
   * - 'sm': Small
   * - 'md': Medium
   * - 'lg': Large
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the navigation bar.
   * - 'default': Default styling
   * - 'primary': Primary styling
   */
  variant?: 'default' | 'primary';
  /**
   * The state of the navigation bar.
   * - 'active': Active state
   * - 'disabled': Disabled state
   */
  state?: 'active' | 'disabled';
}

const NavigationBar = React.forwardRef<HTMLDivElement, NavigationBarProps>(({
  title,
  size = 'md',
  variant = 'default',
  state = 'active',
  className,
  ...props
}, ref) => {
  const styles: Record<NonNullable<NavigationBarProps['size']>, React.CSSProperties> = {
    sm: { height: '40px', fontSize: 'var(--font-label-sml-*)' },
    md: { height: '50px', fontSize: 'var(--font-headline-reg-16-reg-*)' },
    lg: { height: '60px', fontSize: 'var(--font-headline-med-18-med-*)' },
  };

  const variantStyles: Record<NonNullable<NavigationBarProps['variant']>, React.CSSProperties> = {
    default: { backgroundColor: 'var(--color-grey-100)' },
    primary: { backgroundColor: 'var(--color-home)' },
  };

  const stateStyles: Record<NonNullable<NavigationBarProps['state']>, React.CSSProperties> = {
    active: { opacity: 1 },
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
      <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>←</button>
      <span>{title}</span>
    </div>
  );
});

NavigationBar.displayName = 'NavigationBar';

export { NavigationBar };
export default NavigationBar;
