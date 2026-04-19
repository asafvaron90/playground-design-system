// src/components/ButtonSecondary/ButtonSecondary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress, SxProps } from '@mui/material';

export interface ButtonSecondaryProps {
  /** Click event handler */
  onClick?: () => void;
  /** Mouse enter event handler */
  onHover?: () => void;
  /** Disabled state */
  isDisabled?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Button content */
  children?: React.ReactNode;
  /** Style overrides */
  sx?: Record<string, unknown>;
  /** Class overrides */
  className?: string;
  /** Button size */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /** Full width button */
  fullWidth?: boolean;
  /** Optional icon */
  icon?: React.ReactNode;
}

const sizeStyles: Record<NonNullable<ButtonSecondaryProps['size']>, SxProps> = {
  lg: { height: '44px', paddingLeft: '24px', paddingRight: '24px', gap: '8px' },
  md: { height: '40px', paddingLeft: '20px', paddingRight: '20px', gap: '8px' },
  sm: { height: '36px', paddingLeft: '16px', paddingRight: '16px', gap: '8px' },
  xs: { height: '32px', paddingLeft: '16px', paddingRight: '16px', gap: '4px' },
};

const ButtonSecondary = React.forwardRef<HTMLButtonElement, ButtonSecondaryProps>(
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
          justifyContent: fullWidth ? 'center' : 'flex-start',
          width: fullWidth ? '100%' : 'auto',
          color: 'var(--color-text-primary-base, #0354A6)',
          border: '1px solid var(--color-border-primary-bold-100, #0354A6)',
          borderRadius: 'var(--radius-large, 12px)',
          fontSize: 'var(--font-text-md-l-24-medium-size, 16px)',
          fontFamily: 'var(--font-text-md-l-24-medium-family, Inter)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight, 500)',
          gap: 'var(--gap-8, 8px)',
          ...sizeStyles[size],
          '&:hover': {
            background: 'rgba(3,84,166,0.05)',
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

export { ButtonSecondary };