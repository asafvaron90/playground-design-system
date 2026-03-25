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
   * The current time to display
   */
  time: string;
  /**
   * Custom class name for styling overrides
   */
  className?: string;
}

const StatusBar = forwardRef<HTMLDivElement, StatusBarProps>(({
  size = 'medium',
  variant = 'default',
  time,
  className,
  ...props
}, ref) => {
  const sizeStyles: Record<NonNullable<StatusBarProps['size']>, React.CSSProperties> = {
    small: { height: '30px', fontSize: '12px' },
    medium: { height: '42px', fontSize: '15px' },
    large: { height: '54px', fontSize: '18px' },
  };

  const variantStyles: Record<NonNullable<StatusBarProps['variant']>, React.CSSProperties> = {
    default: { backgroundColor: 'var(--color-grey-100)', color: 'var(--color-grey-600-text)' },
    inverted: { backgroundColor: 'var(--color-grey-page-1)', color: 'var(--color-white-white)' },
  };

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
    <div ref={ref} className={className} style={styles} {...props}>
      <span>{time}</span>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '8px' }}>􀙇</span> {/* Wi-Fi Icon */}
        <span>􀛨</span> {/* Battery Icon */}
      </div>
    </div>
  );
});

StatusBar.displayName = 'StatusBar';

export { StatusBar };
export default StatusBar;
