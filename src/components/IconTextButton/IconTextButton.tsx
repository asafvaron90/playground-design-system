// IconTextButton.tsx
import React from 'react';

export interface IconTextButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * The size of the button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /**
   * If true, the button will be disabled
   */
  disabled?: boolean;
  /**
   * The text to display inside the button
   */
  text: string;
  /**
   * The icon to display inside the button
   */
  icon: React.ReactNode;
  /**
   * Additional class names to apply to the button
   */
  className?: string;
}

const IconTextButton = React.forwardRef<HTMLButtonElement, IconTextButtonProps>(({
  size = 'medium',
  variant = 'primary',
  disabled = false,
  text,
  icon,
  className,
  ...props
}, ref) => {
  const sizeStyles = {
    small: { padding: '4px 8px', fontSize: '12px' },
    medium: { padding: '8px 16px', fontSize: '14px' },
    large: { padding: '12px 24px', fontSize: '16px' },
  }[size];

  const variantStyles = {
    primary: { backgroundColor: 'var(--color-buttons)', color: 'var(--color-white-white)' },
    secondary: { backgroundColor: 'var(--color-grey-buttons-bg)', color: 'var(--color-white-white)' },
    tertiary: { backgroundColor: 'transparent', color: 'var(--color-body-text-buttons)' },
  }[variant];

  const disabledStyles = disabled ? {
    backgroundColor: 'var(--color-disabled)',
    color: 'var(--color-disabled-text)',
    cursor: 'not-allowed',
  } : {};

  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '1400px',
    border: '1px solid var(--color-grey-stroke)',
    gap: '4px',
    ...sizeStyles,
    ...variantStyles,
    ...disabledStyles,
  };

  return (
    <button
      ref={ref}
      style={styles}
      disabled={disabled}
      className={className}
      {...props}
    >
      {icon}
      <span style={{ fontFamily: 'var(--font-button-text-fontFamily)', fontWeight: 'var(--font-button-text-fontWeight)' }}>
        {text}
      </span>
    </button>
  );
});

export default IconTextButton;
export { IconTextButton };