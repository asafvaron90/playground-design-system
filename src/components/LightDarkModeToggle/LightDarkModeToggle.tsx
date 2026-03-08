// LightDarkModeToggle.tsx
import React from 'react';

interface LightDarkModeToggleProps {
  /**
   * The size of the button
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button
   * @default 'default'
   */
  variant?: 'default' | 'flat' | 'stroked';
  /**
   * If true, the button will be disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Additional class name for custom styling
   */
  className?: string;
  /**
   * Callback fired when the button is clicked
   */
  onClick?: () => void;
}

const LightDarkModeToggle = React.forwardRef<HTMLButtonElement, LightDarkModeToggleProps>(({
  size = 'medium',
  variant = 'default',
  disabled = false,
  className = '',
  onClick,
}, ref) => {
  const styles = {
    base: {
      fontFamily: 'var(--font-large-header)',
      color: 'var(--color-text)',
      backgroundColor: 'var(--color-dialog-sections-master-table)',
      border: variant === 'stroked' ? '1px solid var(--color-divider-stroke)' : 'none',
      padding: size === 'small' ? '4px 8px' : size === 'large' ? '12px 24px' : '8px 16px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
    },
    flat: {
      backgroundColor: 'transparent',
    },
    default: {
      backgroundColor: 'var(--color-primary-buttons)',
    },
  };

  const variantStyle = variant === 'flat' ? styles.flat : styles.default;

  return (
    <button
      ref={ref}
      style={{ ...styles.base, ...variantStyle }}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      Light/Dark Mode Toggle
    </button>
  );
});

export { LightDarkModeToggle };
export default LightDarkModeToggle;
