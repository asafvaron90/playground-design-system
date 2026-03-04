// Text.tsx
import React from 'react';
import classNames from 'classnames';

interface TextProps {
  /**
   * The content of the text component.
   */
  children: React.ReactNode;
  /**
   * The variant of the text, which determines the font size and weight.
   */
  variant?: 'heading-1' | 'heading-2' | 'heading-3' | 'body' | 'caption';
  /**
   * The state of the text, which can be used to apply different styles.
   */
  state?: 'default' | 'active' | 'disabled' | 'error';
  /**
   * Additional class names to apply to the text component.
   */
  className?: string;
}

const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ children, variant = 'body', state = 'default', className }, ref) => {
    const variantClasses = {
      'heading-1': 'var(--font-large-header-*)',
      'heading-2': 'var(--font-subheader-*)',
      'heading-3': 'var(--font-header-*)',
      body: 'var(--font-body-*)',
      caption: 'var(--font-small-text-*)',
    };

    const stateClasses = {
      default: '',
      active: 'var(--font-active-*)',
      disabled: 'var(--font-disabled-*)',
      error: 'var(--font-error-*)',
    };

    return (
      <span
        ref={ref}
        className={classNames(
          variantClasses[variant],
          stateClasses[state],
          className
        )}
      >
        {children}
      </span>
    );
  }
);

Text.displayName = 'Text';

export { Text };
export default Text;
