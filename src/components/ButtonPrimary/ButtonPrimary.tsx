// src/components/ButtonPrimary/ButtonPrimary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/system';

/**
 * ButtonPrimaryProps interface for the ButtonPrimary component.
 */
export interface ButtonPrimaryProps {
  /**
   * Click event handler.
   */
  onClick?: () => void;
  /**
   * Hover event handler.
   */
  onHover?: () => void;
  /**
   * Disabled state of the button.
   */
  isDisabled?: boolean;
  /**
   * Loading state of the button.
   */
  isLoading?: boolean;
  /**
   * Content of the button.
   */
  children?: React.ReactNode;
  /**
   * Style overrides.
   */
  sx?: SxProps;
  /**
   * Class name for styling overrides.
   */
  className?: string;
  /**
   * Icon to be displayed in the button.
   */
  icon?: React.ReactNode;
}

/**
 * ButtonPrimary component for primary action buttons.
 */
const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  (
    {
      onClick,
      onHover,
      isDisabled = false,
      isLoading = false,
      children,
      sx,
      className,
      icon,
    },
    ref
  ) => {
    return (
      <MuiButton
        ref={ref}
        onClick={onClick}
        onMouseEnter={onHover}
        disabled={isDisabled || isLoading}
        className={className}
        sx={{
          backgroundColor: 'var(--color-action-primary, var(--color-brand-500, #0ea5e9))',
          color: 'var(--color-text-white-base, #ffffff)',
          paddingLeft: 'var(--gap-24, 1.5rem)',
          paddingRight: 'var(--gap-24, 1.5rem)',
          borderRadius: 'var(--radius-large, 12px)',
          fontSize: 'var(--font-text-md-l-24-medium-size, 16px)',
          fontFamily: 'var(--font-text-md-l-24-medium-family, Inter)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight, 500)',
          letterSpacing: 'var(--gap-body-md-letter-spacing, 0px)',
          lineHeight: 'var(--body-md-line-height-24, 24px)', /* WARN: --body-md-line-height-24 not defined by Figma tokens — check approved tokens */
          '&:hover': {
            backgroundColor: 'var(--color-background-state-interaction-hover-primary, #0354A6)',
          },
          '&:disabled, &[aria-disabled="true"]': {
            backgroundColor: 'var(--color-background-state-interaction-disabled-neutral, #D1D5DB)',
            color: 'var(--color-text-neutral-subtle-500, #6E7581)',
          },
          ...sx,
        }}
      >
        {isLoading ? <CircularProgress size={24} color="inherit" /> : icon}
        {children}
      </MuiButton>
    );
  }
);

export { ButtonPrimary };