// SortButton.tsx
import React from 'react';
import { forwardRef } from 'react';

export interface SortButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * The size of the button.
   * - 'sm': Small
   * - 'md': Medium
   * - 'lg': Large
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the button.
   * - 'primary': Primary style
   * - 'secondary': Secondary style
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

const styles: Record<'sm' | 'md' | 'lg', React.CSSProperties> = {
  sm: {
    padding: '4px 8px',
    fontSize: 'var(--font-label-sml)',
  },
  md: {
    padding: '8px 16px',
    fontSize: 'var(--font-label-large-14-med)',
  },
  lg: {
    padding: '12px 24px',
    fontSize: 'var(--font-headline-reg-16-med)',
  },
};

const variantStyles: Record<'primary' | 'secondary', React.CSSProperties> = {
  primary: {
    backgroundColor: 'var(--color-liam-harris)',
    color: 'var(--color-white-white)',
  },
  secondary: {
    backgroundColor: 'var(--color-grey-2)',
    color: 'var(--color-grey-600-text)',
  },
};

const SortButton = forwardRef<HTMLButtonElement, SortButtonProps>(({
  size = 'md',
  variant = 'primary',
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  const sizeStyle = styles[size];
  const variantStyle = variantStyles[variant];

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    ...sizeStyle,
    ...variantStyle,
  };

  return (
    <button
      ref={ref}
      style={buttonStyle}
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

SortButton.displayName = 'SortButton';

export { SortButton };
export default SortButton;
