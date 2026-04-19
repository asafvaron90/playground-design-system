// src/components/ButtonSecondary/ButtonSecondary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/system';

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
   * Disables the button if true.
   */
  isDisabled?: boolean;
  /**
   * Shows a loading spinner if true.
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
   * Class name for custom styling.
   */
  className?: string;
  /**
   * Sets the button to full width if true.
   */
  fullWidth?: boolean;
  /**
   * Size of the button.
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Icon to display in the button.
   */
  icon?: React.ReactNode;
}

const ButtonSecondary = React.forwardRef<HTMLButtonElement, ButtonSecondaryProps>(
  (
    {
      onClick,
      onHover,
      isDisabled = false,
      isLoading = false,
      children,
      sx,
      className,
      fullWidth = false,
      size = 'md',
      icon,
    },
    ref
  ) => {
    const sizeStyles = {
      lg: { height: '44px', px: 3, gap: '8px' },
      md: { height: '40px', px: 2.5, gap: '8px' },
      sm: { height: '36px', px: 2, gap: '8px' },
      xs: { height: '32px', px: 2, gap: '4px' },
    }[size];

    return (
      <MuiButton
        ref={ref}
        onClick={onClick}
        onMouseEnter={onHover}
        disabled={isDisabled || isLoading}
        fullWidth={fullWidth}
        className={className}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'var(--radius-large, 12px)',
          border: '1px solid var(--color-border-primary-bold-100, #0354A6)',
          color: 'var(--color-text-primary-base, #0354A6)',
          fontSize: 'var(--font-text-md-l-24-medium-size, 16px)',
          fontFamily: 'var(--font-text-md-l-24-medium-family, Inter)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight, 500)',
          letterSpacing: 'var(--font-body-md-letter-spacing, 0px)', /* WARN: --font-body-md-letter-spacing not defined by Figma tokens — check approved tokens */
          lineHeight: 'var(--font-body-md-line-height-24, 24px)', /* WARN: --font-body-md-line-height-24 not defined by Figma tokens — check approved tokens */
          backgroundColor: 'transparent',
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: 'var(--color-background-state-interaction-hover-primary, #0354A6)',
          },
          '&:disabled, &[aria-disabled="true"]': {
            color: 'var(--color-text-neutral-subtle-300, #8B939F)',
            borderColor: 'var(--color-border-neutral-subtle-200, #E4E7EC)',
          },
          ...sizeStyles,
          ...sx,
        }}
      >
        {isLoading ? <CircularProgress size={24} color="inherit" /> : icon}
        {children}
      </MuiButton>
    );
  }
);

ButtonSecondary.displayName = 'ButtonSecondary';

export { ButtonSecondary };