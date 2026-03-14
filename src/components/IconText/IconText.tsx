// IconText.tsx
import React, { forwardRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';

interface IconTextProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  /**
   * The icon to display, typically an SVG or an icon component
   */
  icon: ReactNode;
  /**
   * The text to display next to the icon
   */
  text: string;
  /**
   * The size of the component
   * - 'small': 12px font size
   * - 'medium': 14px font size
   * - 'large': 16px font size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the component
   * - 'default': standard style
   * - 'primary': primary style
   */
  variant?: 'default' | 'primary';
  /**
   * Whether the component is disabled
   */
  disabled?: boolean;
  /**
   * Additional class name for custom styling
   */
  className?: string;
}

const IconText = forwardRef<HTMLDivElement, IconTextProps>(({
  icon,
  text,
  size = 'medium',
  variant = 'default',
  disabled = false,
  className,
  ...props
}, ref) => {
  const sizeStyles = {
    small: { fontSize: '12px', padding: '6px' },
    medium: { fontSize: '14px', padding: '8px' },
    large: { fontSize: '16px', padding: '10px' },
  };

  const variantStyles = {
    default: { backgroundColor: 'var(--color-grey-buttons-bg)', color: 'var(--color-white-white)' },
    primary: { backgroundColor: 'var(--color-primary)', color: 'var(--color-white-white)' },
  };

  const disabledStyles = disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {};

  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '1400px',
    border: '1px solid var(--color-grey-stroke)',
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...disabledStyles,
  };

  return (
    <div ref={ref} className={className} style={styles} {...props}>
      <span style={{ marginRight: '4px' }}>{icon}</span>
      <span>{text}</span>
    </div>
  );
});

export default IconText;
export { IconText };