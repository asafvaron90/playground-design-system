// src/components/ButtonOutline/ButtonOutline.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress, SxProps } from '@mui/material';

export interface ButtonOutlineProps {
  /**
   * Click handler for the button
   */
  onClick?: () => void;
  /**
   * Mouse enter handler for hover state
   */
  onHover?: () => void;
  /**
   * Disables the button
   */
  isDisabled?: boolean;
  /**
   * Shows a loading spinner instead of children
   */
  isLoading?: boolean;
  /**
   * Content of the button
   */
  children?: React.ReactNode;
  /**
   * Style overrides
   */
  sx?: Record<string, unknown>;
  /**
   * Class name overrides
   */
  className?: string;
  /**
   * Size of the button
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Full width button
   */
  fullWidth?: boolean;
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
      isDisabled,
      isLoading,
      children,
      sx,
      className,
      size = 'md',
      fullWidth = false,
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
          justifyContent: fullWidth ? 'center' : 'flex-start',
          width: fullWidth ? '100%' : 'auto',
          color: 'var(--color-text-neutral-base, #1D1F23)',
          border: '1px solid var(--color-border-neutral-bold-200, #6E7581)',
          borderRadius: 'var(--radius-large, 12px)',
          fontSize: 'var(--font-text-md-l-24-medium-size, 16px)',
          fontFamily: 'var(--font-text-md-l-24-medium-family, Inter)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight, 500)',
          gap: 'var(--gap-8, 8px)',
          ...sizeStyles[size],
          '&:hover': {
            background: 'rgba(29,31,35,0.05)',
          },
          '&:disabled, &[aria-disabled="true"]': {
            color: 'var(--color-text-neutral-subtle-300, #8B939F)',
            borderColor: 'var(--color-border-neutral-bold-200, #6E7581)',
          },
          ...sx,
        }}
      >
        {isLoading ? <CircularProgress size={24} /> : children}
      </MuiButton>
    );
  }
);

ButtonOutline.displayName = 'ButtonOutline';

export { ButtonOutline };