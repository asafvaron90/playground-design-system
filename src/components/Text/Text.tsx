// Text.tsx

import React, { forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';

/**
 * Typography variants mapped to design tokens.
 */
const typographyVariants = {
  heading1: 'var(--font-heading-lg-family)', // Updated to use the latest design token
  heading2: 'var(--font-heading-md-family)', // Updated to use the latest design token
  heading3: 'var(--font-heading-md-family)', // Updated to use the latest design token
  body: 'var(--font-body-md-family)', // Updated to use the latest design token
  caption: 'var(--font-label-sm-family)' // Updated to use the latest design token
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
        className={clsx(className)}
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