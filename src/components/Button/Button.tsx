// Button.tsx
import React from 'react';
import classNames from 'classnames';

/**
 * Button component props
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button
   */
  variant?: 'primary' | 'secondary' | 'ghost';
  /**
   * The size of the button
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * If true, the button will show a loading spinner
   */
  loading?: boolean;
  /**
   * Additional class names to apply to the button
   */
  className?: string;
}

/**
 * A versatile button component with primary, secondary, and ghost variants,
 * multiple sizes, loading state, and disabled state.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading = false, disabled, className, children, ...props }, ref) => {
    const classes = classNames(
      'button',
      `button--${variant}`,
      `button--${size}`,
      {
        'button--loading': loading,
        'button--disabled': disabled,
      },
      className
    );

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? <span className="spinner" /> : children}
      </button>
    );
  }
);

export { Button };
export default Button;

// Styles (CSS-in-JS or external CSS file)
// .button { /* common styles */ }
// .button--primary { background-color: var(--color-buttons); color: var(--color-ffffff); }
// .button--secondary { background-color: var(--color-button); color: var(--color-1b293a); }
// .button--ghost { background-color: transparent; color: var(--color-0e92cb); }
// .button--sm { font-size: var(--font-value-); padding: 4px 8px; }
// .button--md { font-size: var(--font-default-); padding: 8px 16px; }
// .button--lg { font-size: var(--font-large-text-field-); padding: 12px 24px; }
// .button--loading { /* loading styles */ }
// .button--disabled { opacity: 0.5; cursor: not-allowed; }
// .spinner { /* spinner styles */ }
