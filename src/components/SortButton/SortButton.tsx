// SortButton.tsx
import React from 'react';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface SortButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * The label text of the button.
   */
  label: string;
  /**
   * The icon to be displayed alongside the label.
   */
  icon: React.ReactNode;
  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button.
   */
  variant?: 'primary' | 'secondary';
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * Additional className for custom styling.
   */
  className?: string;
}

const SortButton = forwardRef<HTMLButtonElement, SortButtonProps>(({
  label,
  icon,
  size = 'medium',
  variant = 'primary',
  disabled = false,
  className,
  ...props
}, ref) => {
  const sizeStyles: Record<NonNullable<SortButtonProps['size']>, React.CSSProperties> = {
    small: { fontSize: 'var(--font-label-sml-*)', padding: '4px 8px' },
    medium: { fontSize: 'var(--font-label-large-14-med-*)', padding: '8px 16px' },
    large: { fontSize: 'var(--font-headline-reg-16-med-*)', padding: '12px 24px' },
  };

  const variantStyles: Record<NonNullable<SortButtonProps['variant']>, React.CSSProperties> = {
    primary: { backgroundColor: 'var(--color-buttons)', color: 'var(--color-white-white)' },
    secondary: { backgroundColor: 'var(--color-grey-buttons-bg)', color: 'var(--color-grey-600-text)' },
  };

  const styles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  return (
    <button
      ref={ref}
      style={styles}
      className={className}
      disabled={disabled}
      {...props}
    >
      {icon}
      <span style={{ marginLeft: '8px' }}>{label}</span>
    </button>
  );
});

SortButton.displayName = 'SortButton';

export { SortButton };
export default SortButton;
