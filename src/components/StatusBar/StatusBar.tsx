// StatusBar.tsx
import React from 'react';

export interface StatusBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The current time to display on the status bar.
   */
  time: string;
  /**
   * Additional class names to apply to the status bar.
   */
  className?: string;
}

/**
 * StatusBar component displays the current time and connectivity icons.
 */
export const StatusBar = React.forwardRef<HTMLDivElement, StatusBarProps>(({ time, className, ...props }, ref) => {
  const styles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    backgroundColor: 'var(--color-grey-page-1)',
    color: 'var(--color-white-white)',
    fontFamily: 'var(--font-white-white-status-bar)',
    fontSize: '15px',
    fontWeight: 600,
  };

  return (
    <div ref={ref} className={className} style={styles} {...props}>
      <span>{time}</span>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-white-white-container)', fontSize: '17px' }}>􀛨</span>
        <span style={{ fontFamily: 'var(--font-white-white-container-2)', fontSize: '14px', marginLeft: '10px' }}>􀙇</span>
      </div>
    </div>
  );
});

StatusBar.displayName = 'StatusBar';

export default StatusBar;
