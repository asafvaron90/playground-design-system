// Card.tsx
import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface CardProps {
  /**
   * Content to be displayed in the card.
   */
  children: ReactNode;
  /**
   * Optional header content.
   */
  header?: ReactNode;
  /**
   * Optional footer content.
   */
  footer?: ReactNode;
  /**
   * Padding inside the card.
   */
  padding?: 'small' | 'medium' | 'large';
  /**
   * Shadow variant for the card.
   */
  shadow?: 'none' | 'small' | 'medium' | 'large';
  /**
   * Border radius for the card.
   */
  borderRadius?: 'none' | 'small' | 'medium' | 'large';
  /**
   * Additional class names for custom styling.
   */
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({
  children,
  header,
  footer,
  padding = 'medium',
  shadow = 'medium',
  borderRadius = 'medium',
  className,
}, ref) => {
  return (
    <div
      ref={ref}
      className={classNames('card', className, {
        'card--padding-small': padding === 'small',
        'card--padding-medium': padding === 'medium',
        'card--padding-large': padding === 'large',
        'card--shadow-none': shadow === 'none',
        'card--shadow-small': shadow === 'small',
        'card--shadow-medium': shadow === 'medium',
        'card--shadow-large': shadow === 'large',
        'card--border-radius-none': borderRadius === 'none',
        'card--border-radius-small': borderRadius === 'small',
        'card--border-radius-medium': borderRadius === 'medium',
        'card--border-radius-large': borderRadius === 'large',
      })}
      style={{
        '--color-background': 'var(--color-e7f4fd)',
        '--color-border': 'var(--color-d7e3ec)',
        '--font-body': 'var(--font-body-text-*)',
      }}
    >
      {header && <div className="card__header">{header}</div>}
      <div className="card__content">{children}</div>
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
});

export { Card };
export default Card;
