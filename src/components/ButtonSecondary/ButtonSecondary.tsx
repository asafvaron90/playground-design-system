// src/components/ButtonSecondary/ButtonSecondary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';

export interface ButtonSecondaryProps {
  /** Click event handler */
  onClick?: () => void;
  /** Mouse enter event handler */
  onHover?: () => void;
  /** Disables the button */
  isDisabled?: boolean;
  /** Shows a loading spinner */
  isLoading?: boolean;
  /** Button content */
  children?: React.ReactNode;
  /** Style overrides */
  sx?: Record<string, unknown>;
  /** Class name overrides */
  className?: string;
  /** Button type: Text or Icon */
  type?: 'text' | 'icon';
  /** Button size: lg, md, sm, xs */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /** Button width: Compact or Fluid/block */
  width?: 'compact' | 'fluid';
}

const ButtonSecondary = React.forwardRef<HTMLButtonElement, ButtonSecondaryProps>(
  (
    {
      onClick,
      onHover,
      isDisabled = false,
      isLoading = false,
      children,
      sx = {},
      className,
      type = 'text',
      size = 'md',
      width = 'compact',
    },
    ref
  ) => {
    const isIconType = type === 'icon';
    const isFluid = width === 'fluid';

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
          paddingLeft: isIconType ? 'var(--gap-8, 0.5rem)' : size === 'lg' ? 'var(--gap-24, 1.5rem)' : size === 'md' ? 'var(--gap-20, 1.25rem)' : 'var(--gap-16, 1rem)', /* WARN: --gap-20 not defined by Figma tokens — check approved tokens */
          paddingRight: isIconType ? 'var(--gap-8, 0.5rem)' : size === 'lg' ? 'var(--gap-24, 1.5rem)' : size === 'md' ? 'var(--gap-20, 1.25rem)' : 'var(--gap-16, 1rem)', /* WARN: --gap-20 not defined by Figma tokens — check approved tokens */
          borderRadius: size === 'xs' ? 'var(--radius-medium, 8px)' : 'var(--radius-large, 12px)',
          color: 'var(--color-text-primary-base, rgba(3,84,166,1))',
          width: isFluid ? '100%' : 'auto',
          '&:hover': {
            backgroundColor: 'var(--color-background-state-interaction-hover-neutral, #f0f0f0)',
          },
          '&:disabled, &[aria-disabled="true"]': {
            backgroundColor: 'var(--color-background-state-interaction-disabled-neutral, #e0e0e0)',
            color: 'var(--color-text-neutral-subtle-300, #b0b0b0)',
          },
          ...sx,
        }}
      >
        {isLoading ? <CircularProgress size={24} sx={{ color: 'inherit' }} /> : children}
      </MuiButton>
    );
  }
);

ButtonSecondary.displayName = 'ButtonSecondary';

export { ButtonSecondary };