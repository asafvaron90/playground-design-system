// StatusBar.tsx
import React from 'react';

export interface StatusBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The current time to display.
   */
  time: string;
  /**
   * The battery level as a percentage (0-100).
   */
  batteryLevel: number;
  /**
   * Whether the Wi-Fi is connected.
   */
  isWifiConnected: boolean;
  /**
   * Additional class names for custom styling.
   */
  className?: string;
}

const StatusBar = React.forwardRef<HTMLDivElement, StatusBarProps>(({
  time,
  batteryLevel,
  isWifiConnected,
  className,
  ...rest
}, ref) => {
  const styles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    backgroundColor: 'var(--color-grey-100)',
    color: 'var(--color-grey-600-text)',
    fontFamily: 'var(--font-white-white-status-bar)',
    fontSize: '15px',
    fontWeight: 600,
  };

  return (
    <div ref={ref} className={className} style={styles} {...rest}>
      <span>{time}</span>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px' }}>{isWifiConnected ? '􀙇' : '􀙈'}</span>
        <span>{'􀛨'}</span>
        <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '20px',
              height: '10px',
              border: '1px solid var(--color-grey-600-text)',
              position: 'relative',
              marginRight: '3px',
            }}
          >
            <div
              style={{
                width: `${batteryLevel}%`,
                height: '100%',
                backgroundColor: batteryLevel > 20 ? 'var(--color-green-green)' : 'var(--color-red-red-error)',
              }}
            />
          </div>
          <div
            style={{
              width: '3px',
              height: '5px',
              backgroundColor: 'var(--color-grey-600-text)',
            }}
          />
        </div>
      </div>
    </div>
  );
});

StatusBar.displayName = 'StatusBar';

export { StatusBar };
export default StatusBar;
