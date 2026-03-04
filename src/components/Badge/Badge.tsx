// Badge.tsx
import React from 'react';
import classNames from 'classnames';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The content of the badge, typically a string or number.
   */
  children: React.ReactNode;
  /**
   * The size of the badge.
   * 'small' | 'medium' | 'large'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of the badge.
   * 'default' | 'primary' | 'success' | 'warning' | 'error'
   */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  /**
   * If true, the badge will have a disabled appearance.
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
  ...props
}, ref) => {
  const badgeClass = classNames('badge', className, {
    'badge--small': size === 'small',
    'badge--medium': size === 'medium',
    'badge--large': size === 'large',
    'badge--default': variant === 'default',
    'badge--primary': variant === 'primary',
    'badge--success': variant === 'success',
    'badge--warning': variant === 'warning',
    'badge--error': variant === 'error',
    'badge--disabled': disabled,
  });

  return (
    <span
      ref={ref}
      className={badgeClass}
      style={{
        backgroundColor: disabled ? 'var(--color-helper-text)' : 'var(--color-' + variant + ')',
        color: 'var(--color-ffffff)',
        fontSize: 'var(--font-value-*)',
      }}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export default Badge;
export { Badge };