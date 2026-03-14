// MenuActionItemSingle.tsx
import React, { forwardRef } from 'react';
import type { CSSProperties, HTMLAttributes } from 'react';

interface MenuActionItemSingleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  /**
   * The size of the menu item
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the menu item
   */
  variant?: 'default' | 'primary' | 'secondary';
  /**
   * Whether the menu item is disabled
   */
  disabled?: boolean;
  /**
   * Additional class name for custom styling
   */
  className?: string;
}

const MenuActionItemSingle = forwardRef<HTMLDivElement, MenuActionItemSingleProps>(({
  size = 'medium',
  variant = 'default',
  disabled = false,
  className,
  ...props
}, ref) => {
  const styles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: disabled ? 'var(--color-disabled)' : 'var(--color-grey-100)',
    borderRadius: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background-color 0.3s',
    ...getSizeStyles(size),
    ...getVariantStyles(variant),
  };

  function getSizeStyles(size: string): CSSProperties {
    switch (size) {
      case 'small':
        return { width: '100px', height: '40px' };
      case 'large':
        return { width: '180px', height: '60px' };
      default:
        return { width: '140px', height: '50px' };
    }
  }

  function getVariantStyles(variant: string): CSSProperties {
    switch (variant) {
      case 'primary':
        return { backgroundColor: 'var(--color-primary)', color: 'var(--color-white-white)' };
      case 'secondary':
        return { backgroundColor: 'var(--color-grey-page-1)', color: 'var(--color-white-white)' };
      default:
        return {};
    }
  }

  return (
    <div ref={ref} className={className} style={styles} {...props}>
      {props.children}
    </div>
  );
});

export { MenuActionItemSingle };
export default MenuActionItemSingle;
