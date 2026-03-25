// Card.tsx
import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the card.
   * 'sm' for small, 'md' for medium, 'lg' for large.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the card.
   * 'primary' for primary, 'secondary' for secondary.
   */
  variant?: 'primary' | 'secondary';
  /**
   * The state of the card.
   * 'default' for default, 'disabled' for disabled.
   */
  state?: 'default' | 'disabled';
  /**
   * Additional className for custom styling.
   */
  className?: string;
}

const sizeStyles: Record<NonNullable<CardProps['size']>, React.CSSProperties> = {
  sm: { padding: '8px' },
  md: { padding: '16px' },
  lg: { padding: '24px' },
};

const variantStyles: Record<NonNullable<CardProps['variant']>, React.CSSProperties> = {
  primary: { backgroundColor: 'var(--color-home)' },
  secondary: { backgroundColor: 'var(--color-grey-100)' },
};

const stateStyles: Record<NonNullable<CardProps['state']>, React.CSSProperties> = {
  default: {},
  disabled: { backgroundColor: 'var(--color-disabled)', pointerEvents: 'none', opacity: 0.6 },
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ size = 'md', variant = 'primary', state = 'default', className, ...props }, ref) => {
    const style: React.CSSProperties = {
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...stateStyles[state],
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'background-color 0.3s',
    };

    return <div ref={ref} style={style} className={className} {...props} />;
  }
);

Card.displayName = 'Card';

export default Card;
