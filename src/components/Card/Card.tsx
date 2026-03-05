// Card.tsx
import React, { ReactNode, forwardRef, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Padding inside the card
   */
  padding?: string;
  /**
   * Shadow style for the card
   */
  shadow?: string;
  /**
   * Border radius for the card
   */
  borderRadius?: string;
  /**
   * Optional header content
   */
  header?: ReactNode;
  /**
   * Optional footer content
   */
  footer?: ReactNode;
  /**
   * Variant of the card
   */
  variant?: 'default' | 'outlined' | 'elevated';
  /**
   * Size of the card
   */
  size?: 'small' | 'medium' | 'large';
}

const Card = forwardRef<HTMLDivElement, CardProps>(({
  padding = '16px',
  shadow = '0 1px 3px rgba(0, 0, 0, 0.1)',
  borderRadius = '8px',
  header,
  footer,
  variant = 'default',
  size = 'medium',
  style,
  children,
  ...props
}, ref) => {
  const variantStyles = {
    default: {
      backgroundColor: 'var(--color-bg-surface)',
      border: 'none',
    },
    outlined: {
      backgroundColor: 'var(--color-bg-surface)',
      border: '1px solid var(--color-vector)',
    },
    elevated: {
      backgroundColor: 'var(--color-bg-surface)',
      boxShadow: shadow,
    },
  };

  const sizeStyles = {
    small: {
      padding: '8px',
    },
    medium: {
      padding: '16px',
    },
    large: {
      padding: '24px',
    },
  };

  return (
    <div
      ref={ref}
      style={{
        ...variantStyles[variant],
        ...sizeStyles[size],
        borderRadius,
        ...style,
      }}
      {...props}
    >
      {header && <div>{header}</div>}
      <div>{children}</div>
      {footer && <div>{footer}</div>}
    </div>
  );
});

export { Card };
export default Card;
