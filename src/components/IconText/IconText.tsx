// IconText.tsx
import React from 'react';

export interface IconTextProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  /**
   * The text to display next to the icon.
   */
  text: string;
  /**
   * The icon component to display.
   */
  icon: React.ReactNode;
  /**
   * The size of the component.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the component.
   */
  variant?: 'default' | 'primary';
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional class name for styling.
   */
  className?: string;
}

const IconText = React.forwardRef<HTMLDivElement, IconTextProps>(({
  text,
  icon,
  size = 'medium',
  variant = 'default',
  disabled = false,
  className,
  ...props
}, ref) => {
  const styles = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '1400px',
    backgroundColor: disabled ? 'var(--color-disabled)' : 'var(--color-grey-buttons-bg)',
    color: 'var(--color-white-white)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    fontSize: '14px',
    fontWeight: 500,
    fontFamily: 'Inter, sans-serif',
    ...getSizeStyles(size),
    ...getVariantStyles(variant),
  };

  function getSizeStyles(size: string) {
    switch (size) {
      case 'small':
        return { fontSize: '12px', padding: '4px' };
      case 'large':
        return { fontSize: '16px', padding: '12px' };
      default:
        return {};
    }
  }

  function getVariantStyles(variant: string) {
    switch (variant) {
      case 'primary':
        return { backgroundColor: 'var(--color-primary)' };
      default:
        return {};
    }
  }

  return (
    <div ref={ref} style={styles} className={className} {...props}>
      {icon}
      <span style={{ marginLeft: '4px' }}>{text}</span>
    </div>
  );
});

IconText.displayName = 'IconText';

export default IconText;
export { IconText };