// Header.tsx
import React from 'react';
import type { ReactNode } from 'react';

export interface HeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * The title displayed in the header.
   */
  title: ReactNode;
  /**
   * Optional callback for the back button.
   */
  onBack?: () => void;
  /**
   * Size variant of the header.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Visual variant of the header.
   */
  variant?: 'primary' | 'secondary';
  /**
   * Whether the header is in a disabled state.
   */
  disabled?: boolean;
  /**
   * Additional class names for styling.
   */
  className?: string;
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(({
  title,
  onBack,
  size = 'md',
  variant = 'primary',
  disabled = false,
  className,
  ...props
}, ref) => {
  const styles: Record<string, React.CSSProperties> = {
    base: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      backgroundColor: variant === 'primary' ? 'var(--color-home)' : 'var(--color-grey-2)',
      color: 'var(--color-white-white)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
    },
    title: {
      fontSize: size === 'sm' ? 'var(--font-label-sml)' : size === 'lg' ? 'var(--font-headline-med-18-med-*)' : 'var(--font-headline-reg-16-reg-*)',
    },
    backButton: {
      marginRight: '10px',
      fontSize: 'var(--font-label-large-14-med-*)',
    }
  };

  return (
    <div ref={ref} className={className} style={styles.base} {...props}>
      {onBack && <button style={styles.backButton} onClick={onBack} disabled={disabled}>Back</button>}
      <div style={styles.title}>{title}</div>
    </div>
  );
});

Header.displayName = 'Header';

export { Header };
export default Header;
