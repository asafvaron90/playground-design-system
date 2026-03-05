// Card.tsx
import React, { ReactNode, forwardRef } from 'react';
import clsx from 'clsx';

interface CardProps {
  /**
   * Optional class name for custom styling
   */
  className?: string;
  /**
   * Padding size of the card
   * - 'small': 8px
   * - 'medium': 16px
   * - 'large': 24px
   */
  padding?: 'small' | 'medium' | 'large';
  /**
   * Shadow variant of the card
   * - 'none': No shadow
   * - 'small': Small shadow
   * - 'medium': Medium shadow
   * - 'large': Large shadow
   */
  shadow?: 'none' | 'small' | 'medium' | 'large';
  /**
   * Border radius of the card
   * - 'none': No border radius
   * - 'small': Small border radius
   * - 'medium': Medium border radius
   * - 'large': Large border radius
   */
  borderRadius?: 'none' | 'small' | 'medium' | 'large';
  /**
   * Optional header content
   */
  header?: ReactNode;
  /**
   * Optional footer content
   */
  footer?: ReactNode;
  /**
   * Main content of the card
   */
  children: ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ 
  className,
  padding = 'medium',
  shadow = 'none',
  borderRadius = 'medium',
  header,
  footer,
  children,
}, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(
        'card',
        className,
        `padding-${padding}`,
        `shadow-${shadow}`,
        `border-radius-${borderRadius}`
      )}
      style={{
        padding: `var(--spacing-${padding})`,
        boxShadow: `var(--shadow-${shadow})`,
        borderRadius: `var(--border-radius-${borderRadius})`,
        backgroundColor: 'var(--color-bg-surface)', // Updated color token
      }}
    >
      {header && <div className="card-header">{header}</div>}
      <div className="card-content">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
});

export default Card;
export { Card };