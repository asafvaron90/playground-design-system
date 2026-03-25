// StatusBar.tsx
import React from 'react';

export interface StatusBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The current time to display.
   * @default '9:41'
   */
  time?: string;
  /**
   * Additional class names to apply to the component.
   */
  className?: string;
}

/**
 * A horizontal layout component for displaying time and connectivity icons at the top of the screen.
 */
export const StatusBar = React.forwardRef<HTMLDivElement, StatusBarProps>(
  ({ time = '9:41', className, ...props }, ref) => {
    const styles: React.CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 20px',
      backgroundColor: 'var(--color-white-white)',
      fontFamily: 'var(--font-white-white-status-bar)',
      fontSize: '15px',
      fontWeight: 600,
    };

    return (
      <div ref={ref} className={className} style={styles} {...props}>
        <span>{time}</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', marginRight: '10px' }}>􀙇</span>
          <span style={{ fontSize: '17px' }}>􀛨</span>
        </div>
      </div>
    );
  }
);

StatusBar.displayName = 'StatusBar';

export default StatusBar;
