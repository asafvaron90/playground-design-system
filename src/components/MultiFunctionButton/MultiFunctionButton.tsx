// MultiFunctionButton.tsx
import React, { forwardRef } from 'react';
import { CSSProperties } from 'react';

interface MultiFunctionButtonProps {
  /**
   * The size of the button
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the button
   * @default 'default'
   */
  variant?: 'default' | 'flat' | 'stroked' | 'basic';
  /**
   * If true, the button will be disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * The content of the button
   */
  children: React.ReactNode;
  /**
   * Additional class name for custom styling
   */
  className?: string;
  /**
   * Click event handler
   */
  onClick?: () => void;
}

const MultiFunctionButton = forwardRef<HTMLButtonElement, MultiFunctionButtonProps>(({
  size = 'medium',
  variant = 'default',
  disabled = false,
  children,
  className,
  onClick,
}, ref) => {
  const styles: CSSProperties = {
    padding: size === 'small' ? '8px 16px' : size === 'large' ? '16px 32px' : '12px 24px',
    backgroundColor: variant === 'flat' ? 'transparent' : variant === 'stroked' ? 'transparent' : 'var(--color-primary-buttons)',
    border: variant === 'stroked' ? '2px solid var(--color-primary-buttons)' : 'none',
    color: variant === 'flat' || variant === 'stroked' ? 'var(--color-primary-buttons)' : 'var(--color-white)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    borderRadius: '4px',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <button
      ref={ref}
      style={styles}
      className={className}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
});

export default MultiFunctionButton;
export { MultiFunctionButton };