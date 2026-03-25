// StatusBar.tsx
import React, { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

export interface StatusBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  /**
   * The size of the status bar.
   * 'sm' for small, 'md' for medium, 'lg' for large.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the status bar.
   * 'light' for light theme, 'dark' for dark theme.
   */
  variant?: 'light' | 'dark';
  /**
   * The current time to display.
   */
  time?: string;
  /**
   * Additional className for custom styling.
   */
  className?: string;
}

const sizeStyles: Record<NonNullable<StatusBarProps['size']>, React.CSSProperties> = {
  sm: { height: '30px', fontSize: '12px' },
  md: { height: '42px', fontSize: '15px' },
  lg: { height: '54px', fontSize: '18px' },
};

const variantStyles: Record<NonNullable<StatusBarProps['variant']>, React.CSSProperties> = {
  light: { backgroundColor: 'var(--color-white-white)', color: 'var(--color-grey-600-text)' },
  dark: { backgroundColor: 'var(--color-grey-page-1)', color: 'var(--color-white-white)' },
};

export const StatusBar = forwardRef<HTMLDivElement, StatusBarProps>(({
  size = 'md',
  variant = 'light',
  time = '9:41',
  className,
  ...props
}, ref) => {
  const styles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    boxSizing: 'border-box',
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  return (
    <div ref={ref} style={styles} className={className} {...props}>
      <span style={{ fontFamily: 'var(--font-white-white-status-bar)', fontWeight: 600 }}>{time}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontFamily: 'var(--font-white-white-container)', fontSize: '17px' }}>􀙇</span>
        <span style={{ fontFamily: 'var(--font-white-white-container)', fontSize: '17px' }}>􀛨</span>
      </div>
    </div>
  );
});

StatusBar.displayName = 'StatusBar';

export default StatusBar;
