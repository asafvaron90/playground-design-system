// Header.tsx
import React, { forwardRef } from 'react';
import type { ReactNode } from 'react';

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The title to display in the header.
   */
  title: string;
  /**
   * Optional back button click handler.
   */
  onBack?: () => void;
  /**
   * Optional size of the header.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional variant of the header.
   */
  variant?: 'primary' | 'secondary';
  /**
   * Additional className for custom styling.
   */
  className?: string;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(({
  title,
  onBack,
  size = 'medium',
  variant = 'primary',
  className,
  ...rest
}, ref) => {
  const styles: Record<NonNullable<HeaderProps['size']>, React.CSSProperties> = {
    small: {
      height: '40px',
      fontSize: 'var(--font-label-sml)',
    },
    medium: {
      height: '60px',
      fontSize: 'var(--font-headline-reg-16-med)',
    },
    large: {
      height: '80px',
      fontSize: 'var(--font-headline-med-18-med)',
    },
  };

  const variantStyles: Record<NonNullable<HeaderProps['variant']>, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--color-home)',
      color: 'var(--color-white-white)',
    },
    secondary: {
      backgroundColor: 'var(--color-grey-2)',
      color: 'var(--color-grey-600-text)',
    },
  };

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        ...styles[size],
        ...variantStyles[variant],
      }}
      className={className}
      {...rest}
    >
      {onBack && (
        <button onClick={handleBackClick} style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'inherit',
        }}>
          ← Back
        </button>
      )}
      <span>{title}</span>
    </div>
  );
});

Header.displayName = 'Header';

export { Header };
export default Header;
