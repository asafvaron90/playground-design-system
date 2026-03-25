// SortButton.tsx
import React from 'react';
import { ReactNode } from 'react';

export interface SortButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The label for the button
   */
  label: string;
  /**
   * The icon to display alongside the label
   */
  icon: ReactNode;
  /**
   * The size of the button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button
   */
  variant?: 'primary' | 'secondary';
  /**
   * If true, the button will be disabled
   */
  disabled?: boolean;
  /**
   * Additional class names for styling
   */
  className?: string;
}

const SortButton = React.forwardRef<HTMLButtonElement, SortButtonProps>(({
  label,
  icon,
  size = 'medium',
  variant = 'primary',
  disabled = false,
  className,
  ...props
}, ref) => {
  const styles: Record<NonNullable<SortButtonProps['size']>, React.CSSProperties> = {
    small: {
      fontSize: 'var(--font-label-sml)',
      padding: '4px 8px',
    },
    medium: {
      fontSize: 'var(--font-label-large-14-med)',
      padding: '8px 16px',
    },
    large: {
      fontSize: 'var(--font-headline-med-18-med)',
      padding: '12px 24px',
    },
  };

  const variantStyles: Record<NonNullable<SortButtonProps['variant']>, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--color-liam-harris)',
      color: 'var(--color-white-white)',
    },
    secondary: {
      backgroundColor: 'var(--color-grey-2)',
      color: 'var(--color-grey-600-text)',
    },
  };

  return (
    <button
      ref={ref}
      className={className}
      style={{
        ...styles[size],
        ...variantStyles[variant],
        border: 'none',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
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
