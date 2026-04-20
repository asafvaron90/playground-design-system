// src/components/ButtonOutline/ButtonOutline.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/material';

/**
 * Props for the ButtonOutline component.
 */
export interface ButtonOutlineProps {
  /** Click handler */
  onClick?: () => void;
  /** Mouse enter handler */
  onHover?: () => void;
  /** Disabled state */
  isDisabled?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Content slot */
  children?: React.ReactNode;
  /** Style overrides */
  sx?: Record<string, unknown>;
  /** Class overrides */
  className?: string;
  /** Size of the button */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /** Full width button */
  fullWidth?: boolean;
  /** Icon slot */
  icon?: React.ReactNode;
}

const sizeStyles: Record<NonNullable<ButtonOutlineProps['size']>, SxProps> = {
  lg: { height: '44px', paddingLeft: '24px', paddingRight: '24px', gap: '8px' },
  md: { height: '40px', paddingLeft: '20px', paddingRight: '20px', gap: '8px' },
  sm: { height: '36px', paddingLeft: '16px', paddingRight: '16px', gap: '8px' },
  xs: { height: '32px', paddingLeft: '16px', paddingRight: '16px', gap: '4px' },
};

const ButtonOutline = React.forwardRef<HTMLButtonElement, ButtonOutlineProps>(
  (
    {
      onClick,
      onHover,
      isDisabled = false,
      isLoading = false,
      children,
      sx = {},
      className,
      size = 'md',
      fullWidth = false,
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: fullWidth ? '100%' : 'auto',
          border: '1px solid',
          borderColor: 'var(--color-border-neutral-bold-200, #6E7581)',
          borderRadius: 'var(--radius-large, 12px)',
          color: 'var(--color-text-neutral-base, #1D1F23)',
          fontSize: 'var(--font-text-md-l-24-medium-size, 16px)',
          fontFamily: 'var(--font-text-md-l-24-medium-family, Inter)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight, 500)',
          letterSpacing: 'var(--gap-body-md-letter-spacing, 0px)',
          lineHeight: 'var(--font-body-md-line-height-24, 24px)', /* WARN: --font-body-md-line-height-24 not defined by Figma tokens — check approved tokens */
          ...sizeStyles[size],
          '&:hover': {
            background: 'rgba(29,31,35,0.05)',
          },
          '&:disabled, &[aria-disabled="true"]': {
            color: 'var(--color-text-neutral-subtle-300, #8B939F)',
            borderColor: 'var(--color-border-neutral-subtle-200, #E4E7EC)',
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

ButtonOutline.displayName = 'ButtonOutline';

export { ButtonOutline };