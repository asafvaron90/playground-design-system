import React, { forwardRef } from 'react';

// 1. Export the props interface
export interface IconTextProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color' | 'style'> {
  /** Optional size variant */
  size?: 'small' | 'medium' | 'large';
  /** Optional variant type */
  variant?: 'default' | 'primary' | 'secondary';
  /** Optional state */
  state?: 'normal' | 'disabled';
  /** Optional custom class name */
  className?: string;
  /** Custom inline styles */
  style?: React.CSSProperties;
}

// 2. Define the component with forwardRef
export const IconText = forwardRef<HTMLDivElement, IconTextProps>(
  ({ size = 'medium', variant = 'default', state = 'normal', className = '', style, ...props }, ref) => {
    const customStyles: React.CSSProperties = {
      ...style,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px',
      gap: '4px',
      borderRadius: '1400px',
      backgroundColor: state === 'disabled' ? 'var(--color-disabled)' : 'var(--color-grey-buttons-bg)',
      color: state === 'disabled' ? 'var(--color-disabled-text)' : 'var(--color-white-white)',
      fontSize: '14px',
      fontFamily: 'Inter',
      fontWeight: 500,
      border: '1px solid var(--color-grey-stroke)',
    };

    return (
      <div ref={ref} className={className} style={customStyles} {...props}>
        {/* Icon placeholder */}
        <span style={{ backgroundColor: 'var(--color-white-white)', width: '16px', height: '16px', borderRadius: '50%' }}></span>
        {/* Text */}
        <span>join</span>
      </div>
    );
  }
);

// 3. Set displayName
IconText.displayName = 'IconText';

// 4. Default export
export default IconText;
