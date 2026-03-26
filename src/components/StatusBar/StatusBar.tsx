// StatusBar.tsx
import React from 'react';

export interface StatusBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The current time to display.
   */
  time: string;
  /**
   * The battery icon to display.
   */
  batteryIcon: string;
  /**
   * The Wi-Fi icon to display.
   */
  wifiIcon: string;
  /**
   * Additional class names to apply to the component.
   */
  className?: string;
}

const StatusBar = React.forwardRef<HTMLDivElement, StatusBarProps>(({
  time,
  batteryIcon,
  wifiIcon,
  className,
  ...rest
}, ref) => {
  const styles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    fontFamily: 'var(--font-white-white-status-bar)',
    fontSize: '15px',
    fontWeight: 600,
    color: 'var(--color-white-white)',
  };

  return (
    <div ref={ref} className={className} style={styles} {...rest}>
      <span>{time}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontFamily: 'var(--font-white-white-container)' }}>{wifiIcon}</span>
        <span style={{ fontFamily: 'var(--font-white-white-container)' }}>{batteryIcon}</span>
      </div>
    </div>
  );
});

StatusBar.displayName = 'StatusBar';

export { StatusBar };
export default StatusBar;
