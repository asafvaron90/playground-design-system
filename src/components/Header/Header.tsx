// Header.tsx
import React from 'react';
import type { CSSProperties } from 'react';

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The title to display in the header.
   */
  title: string;
  /**
   * The size of the header.
   * - 'sm': Small
   * - 'md': Medium
   * - 'lg': Large
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the header.
   * - 'primary': Primary variant
   * - 'secondary': Secondary variant
   */
  variant?: 'primary' | 'secondary';
  /**
   * Whether the back button is disabled.
   */
  disabled?: boolean;
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(({
  title,
  size = 'md',
  variant = 'primary',
  disabled = false,
  className,
  ...props
}, ref) => {
  const styles: Record<NonNullable<HeaderProps['size']>, CSSProperties> = {
    sm: { fontSize: 'var(--font-label-sml)', padding: '8px 16px' },
    md: { fontSize: 'var(--font-headline-reg-16-reg)', padding: '12px 20px' },
    lg: { fontSize: 'var(--font-headline-med-18-med)', padding: '16px 24px' },
  };

  const variantStyles: Record<NonNullable<HeaderProps['variant']>, CSSProperties> = {
    primary: { backgroundColor: 'var(--color-home)', color: 'var(--color-white-white)' },
    secondary: { backgroundColor: 'var(--color-grey-2)', color: 'var(--color-grey-600-text)' },
  };

  const backButtonStyles: CSSProperties = {
    marginRight: '16px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    color: disabled ? 'var(--color-disabled)' : 'inherit',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...styles[size],
        ...variantStyles[variant],
      }}
      {...props}
    >
      <button
        style={backButtonStyles}
        disabled={disabled}
        aria-label="Back"
      >
        ←
      </button>
      <span>{title}</span>
    </div>
  );
});

Header.displayName = 'Header';

export { Header };
export default Header;
