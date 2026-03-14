// MenuActionItemSingle.tsx
import React, { forwardRef } from 'react';

export interface MenuActionItemSingleProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the menu item
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the menu item
   */
  variant?: 'default' | 'selected';
  /**
   * If true, the menu item is disabled
   */
  disabled?: boolean;
  /**
   * Additional className for custom styling
   */
  className?: string;
}

const MenuActionItemSingle = forwardRef<HTMLDivElement, MenuActionItemSingleProps>(({
  size = 'medium',
  variant = 'default',
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  const styles = {
    base: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
      borderRadius: '8px',
      backgroundColor: disabled ? 'var(--color-disabled)' : 'var(--color-grey-100)',
      color: disabled ? 'var(--color-disabled-text)' : 'var(--color-body-text-buttons)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background-color 0.3s',
      ...variantStyles[variant],
      ...sizeStyles[size],
    },
  };

  const variantStyles = {
    default: {
      backgroundColor: 'var(--color-grey-100)',
    },
    selected: {
      backgroundColor: 'var(--color-selected-menu-list)',
    },
  };

  const sizeStyles = {
    small: {
      width: '120px',
      height: '40px',
    },
    medium: {
      width: '140px',
      height: '50px',
    },
    large: {
      width: '160px',
      height: '60px',
    },
  };

  return (
    <div
      ref={ref}
      className={className}
      style={styles.base}
      {...props}
    >
      {children}
    </div>
  );
});

MenuActionItemSingle.displayName = 'MenuActionItemSingle';

export default MenuActionItemSingle;
export { MenuActionItemSingle };