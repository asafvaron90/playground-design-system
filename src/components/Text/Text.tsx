// Text.tsx

import React, { forwardRef, HTMLAttributes } from 'react';

/**
 * Typography variants mapped to design tokens.
 */
const typographyVariants = {
  heading1: 'var(--font-heading-lg-family)',
  heading2: 'var(--font-heading-lg-family)',
  heading3: 'var(--font-heading-lg-family)',
  body: 'var(--font-body-sm-family)',
  caption: 'var(--font-label-sm-family)'
};

/**
 * Props for the Text component.
 */
interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * The variant of the text.
   */
  variant?: keyof typeof typographyVariants;
  /**
   * Additional className for custom styling.
   */
  className?: string;
}

/**
 * Text component for displaying typographic elements.
 */
const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant = 'body', className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={className}
        style={{ fontFamily: typographyVariants[variant] }}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = 'Text';

export default Text;
export { Text };