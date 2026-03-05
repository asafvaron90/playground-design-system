// Badge.tsx
import React from 'react';

interface BadgeProps {
  /**
   * The content to display inside the badge.
   */
  children: React.ReactNode;
  /**
   * The size of the badge.
   * - 'small': Small size badge
   * - 'medium': Medium size badge
   * - 'large': Large size badge
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the badge.
   * - 'default': Default styling
   * - 'primary': Primary styling
   * - 'success': Success styling
   * - 'warning': Warning styling
   * - 'error': Error styling
   */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  /**
   * If true, the badge will appear disabled.
   */
  disabled?: boolean;
  /**
   * Additional class names to apply to the badge.
   */
  className?: string;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({
  children,
  size = 'medium',
  variant = 'default',
  disabled = false,
  className,
}, ref) => {
  const sizeStyles = {
    small: { padding: '4px 8px', fontSize: 'var(--font-label-sm-size)', fontFamily: 'var(--font-label-sm-family)', fontWeight: 'var(--font-label-sm-weight)', lineHeight: 'var(--font-label-sm-line-height)' },
    medium: { padding: '6px 12px', fontSize: 'var(--font-body-sm-size)', fontFamily: 'var(--font-body-sm-family)', fontWeight: 'var(--font-body-sm-weight)', lineHeight: 'var(--font-body-sm-line-height)' },
    large: { padding: '8px 16px', fontSize: 'var(--font-value-md-size)', fontFamily: 'var(--font-value-md-family)', fontWeight: 'var(--font-value-md-weight)', lineHeight: 'var(--font-value-md-line-height)' },
  }[size];

  const variantStyles = {
    default: { backgroundColor: 'var(--color-bg-default)', color: 'var(--color-input-dropdown-text)' },
    primary: { backgroundColor: 'var(--color-button-primary)', color: 'var(--font-default-xl-family)' },
    success: { backgroundColor: 'var(--color-active)', color: 'var(--color-bg-default)' },
    warning: { backgroundColor: 'var(--color-hover-click)', color: 'var(--color-bg-default)' },
    error: { backgroundColor: 'var(--color-error)', color: 'var(--color-bg-default)' },
  }[variant];

  const disabledStyles = disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {};

  return (
    <span
      ref={ref}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '9999px',
        ...sizeStyles,
        ...variantStyles,
        ...disabledStyles,
      }}
      className={className}
    >
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export { Badge };
export default Badge;
