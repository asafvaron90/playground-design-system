// StatusBar.tsx
import React from 'react';

export interface StatusBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The time to display on the status bar.
   * @default '9:41'
   */
  time?: string;
  /**
   * The size of the status bar.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the status bar.
   * @default 'default'
   */
  variant?: 'default' | 'inverted';
  /**
   * Additional className for custom styling.
   */
  className?: string;
}

const StatusBar = React.forwardRef<HTMLDivElement, StatusBarProps>(({
  time = '9:41',
  size = 'medium',
  variant = 'default',
  className,
  ...props
}, ref) => {
  const styles: Record<'default' | 'inverted', React.CSSProperties> = {
    default: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 20px',
      backgroundColor: 'var(--color-white-white)',
      color: 'var(--color-grey-600-text)',
      fontFamily: 'var(--font-white-white-status-bar)',
      fontSize: '15px',
      fontWeight: 600,
    },
    inverted: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 20px',
      backgroundColor: 'var(--color-grey-page-1)',
      color: 'var(--color-white-white)',
      fontFamily: 'var(--font-white-white-status-bar)',
      fontSize: '15px',
      fontWeight: 600,
    },
  };

  const sizeStyles: Record<'small' | 'medium' | 'large', React.CSSProperties> = {
    small: { height: '32px' },
    medium: { height: '42px' },
    large: { height: '52px' },
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...styles[variant], ...sizeStyles[size] }}
      {...props}
    >
      <span>{time}</span>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '8px' }}>􀙇</span> {/* Wi-Fi icon */}
        <span>􀛨</span> {/* Battery icon */}
      </div>
    </div>
  );
});

StatusBar.displayName = 'StatusBar';

export { StatusBar };
export default StatusBar;
