// MenuActionItem.tsx
import React, { forwardRef } from 'react';

export interface MenuActionItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  /**
   * The size of the menu action item
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the menu action item
   */
  variant?: 'default' | 'primary' | 'secondary';
  /**
   * The state of the menu action item
   */
  state?: 'normal' | 'disabled' | 'active';
  /**
   * Additional class name for custom styling
   */
  className?: string;
}

const MenuActionItem = forwardRef<HTMLDivElement, MenuActionItemProps>(({
  size = 'medium',
  variant = 'default',
  state = 'normal',
  className,
  ...props
}, ref) => {
  const sizeStyles = {
    small: { padding: '8px 12px', fontSize: '12px' },
    medium: { padding: '10px 16px', fontSize: '14px' },
    large: { padding: '12px 20px', fontSize: '16px' },
  };

  const variantStyles = {
    default: { backgroundColor: 'var(--color-grey-100)', color: 'var(--color-body-text-buttons)' },
    primary: { backgroundColor: 'var(--color-primary)', color: 'var(--color-white-white)' },
    secondary: { backgroundColor: 'var(--color-selected-secondary-button)', color: 'var(--color-body-text-frame-2147225184-default)' },
  };

  const stateStyles = {
    normal: {},
    disabled: { backgroundColor: 'var(--color-disabled)', color: 'var(--color-disabled-text)', cursor: 'not-allowed' },
    active: { backgroundColor: 'var(--color-selected-menu-list)' },
  };

  const styles = {
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...stateStyles[state],
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s',
  };

  return (
    <div ref={ref} className={className} style={styles} {...props} />
  );
});

export default MenuActionItem;
export { MenuActionItem };