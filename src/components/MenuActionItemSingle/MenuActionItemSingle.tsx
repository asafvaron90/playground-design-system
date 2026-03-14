// full .tsx file content based on the template
import React, { forwardRef } from 'react';

// 1. Export the props interface
export interface MenuActionItemSingleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color' | 'style'> {
  /** Optional size variant */
  size?: 'small' | 'medium' | 'large';
  /** Optional variant type */
  variant?: 'default' | 'selected';
  /** Optional state */
  state?: 'enabled' | 'disabled';
  /** Optional custom class name */
  className?: string;
  /** Custom inline styles */
  style?: React.CSSProperties;
}

// 2. Define the component with forwardRef
export const MenuActionItemSingle = forwardRef<HTMLDivElement, MenuActionItemSingleProps>(
  ({ size = 'medium', variant = 'default', state = 'enabled', className = '', style, ...props }, ref) => {
    const customStyles: React.CSSProperties = {
      ...style,
      backgroundColor: variant === 'selected' ? 'var(--color-selected-menu-list)' : 'var(--color-grey-100)',
      color: state === 'disabled' ? 'var(--color-disabled-text)' : 'var(--color-body-text-buttons)',
      padding: size === 'small' ? '8px' : size === 'large' ? '16px' : '12px',
      borderRadius: '8px',
      opacity: state === 'disabled' ? 0.5 : 1,
      cursor: state === 'disabled' ? 'not-allowed' : 'pointer',
    };

    return (
      <div ref={ref} className={className} style={customStyles} {...props}>
        {/* Component implementation */}
      </div>
    );
  }
);

// 3. Set displayName
MenuActionItemSingle.displayName = 'MenuActionItemSingle';

// 4. Default export
export default MenuActionItemSingle;