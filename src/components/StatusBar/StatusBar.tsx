// StatusBar.tsx
import React, { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

export interface StatusBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  /**
   * The size of the status bar
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the status bar
   * @default 'default'
   */
  variant?: 'default' | 'inverted';
  /**
   * Whether the status bar is in a loading state
   * @default false
   */
  loading?: boolean;
}

const StatusBar = forwardRef<HTMLDivElement, StatusBarProps>(({
  size = 'medium',
  variant = 'default',
  loading = false,
  className,
  ...props
}, ref) => {
  const styles: Record<NonNullable<StatusBarProps['size']>, React.CSSProperties> = {
    small: { height: '24px', fontSize: '12px' },
    medium: { height: '42px', fontSize: '15px' },
    large: { height: '60px', fontSize: '18px' },
  };

  const variantStyles: Record<NonNullable<StatusBarProps['variant']>, React.CSSProperties> = {
    default: { backgroundColor: 'var(--color-white-white)', color: 'var(--color-grey-600-text)' },
    inverted: { backgroundColor: 'var(--color-grey-page-1)', color: 'var(--color-white-white)' },
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px',
        ...styles[size],
        ...variantStyles[variant],
        opacity: loading ? 0.5 : 1,
      }}
      {...props}
    >
      <span style={{ fontFamily: 'var(--font-white-white-status-bar)', fontWeight: 590 }}>9:41</span>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-white-white-container)', marginRight: '10px' }}>􀙇</span>
        <span style={{ fontFamily: 'var(--font-white-white-container)' }}>􀛨</span>
      </div>
    </div>
  );
});

StatusBar.displayName = 'StatusBar';

export { StatusBar };
export default StatusBar;
