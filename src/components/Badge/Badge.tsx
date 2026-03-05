// Badge.tsx
import React from 'react';
import clsx from 'clsx';

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
  const baseClasses = 'inline-flex items-center justify-center rounded-full';
  const sizeClasses = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1.5 text-sm',
    large: 'px-4 py-2 text-base',
  }[size];

  const variantClasses = {
    default: 'bg-gray-200 text-gray-800',
    primary: 'bg-[var(--color-button-primary)] text-[var(--font-default-family)]',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-black',
    error: 'bg-red-500 text-white',
  }[variant];

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <span
      ref={ref}
      className={clsx(baseClasses, sizeClasses, variantClasses, disabledClasses, className)}
    >
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export { Badge };
export default Badge;
