// src/components/ButtonSecondary/ButtonSecondary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';

/**
 * Props for the ButtonSecondary component.
 */
export interface ButtonSecondaryProps {
  /**
   * Click handler for the button.
   */
  onClick?: () => void;
  /**
   * Mouse enter handler for hover state.
   */
  onHover?: () => void;
  /**
   * Disables the button when true.
   */
  isDisabled?: boolean;
  /**
   * Shows a loading spinner when true.
   */
  isLoading?: boolean;
  /**
   * Content to be displayed inside the button.
   */
  children?: React.ReactNode;
  /**
   * Style overrides.
   */
  sx?: Record<string, unknown>;
  /**
   * Class name overrides.
   */
  className?: string;
  /**
   * Optional icon to display before the children.
   */
  icon?: React.ReactNode;
}

const ButtonSecondary = React.forwardRef<HTMLButtonElement, ButtonSecondaryProps>(
  ({ onClick, onHover, isDisabled, isLoading, children, sx, className, icon }, ref) => {
    return (
      <MuiButton
        ref={ref}
        onClick={onClick}
        onMouseEnter={onHover}
        disabled={isDisabled || isLoading}
        className={className}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 'var(--gap-24, 1.5rem)',
          paddingRight: 'var(--gap-24, 1.5rem)',
          borderRadius: 'var(--radius-large, 12px)',
          fontSize: 'var(--font-text-md-l-24-medium-size, 16px)',
          fontFamily: 'var(--font-text-md-l-24-medium-family, Inter)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight, 500)',
          color: 'var(--color-text-primary-base, #0354A6)',
          '&:hover': {
            backgroundColor: 'var(--color-background-neutral-subtle-300, #F2F4F7)',
          },
          '&:disabled, &[aria-disabled="true"]': {
            color: 'var(--color-text-neutral-subtle-300, #8B939F)',
          },
          ...sx,
        }}
      >
        {isLoading ? <CircularProgress size={24} /> : icon}
        {children}
      </MuiButton>
    );
  }
);

ButtonSecondary.displayName = 'ButtonSecondary';

export { ButtonSecondary };