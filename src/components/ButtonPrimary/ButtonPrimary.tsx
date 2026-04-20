// src/components/ButtonPrimary/ButtonPrimary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress, SxProps } from '@mui/material';

export interface ButtonPrimaryProps {
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
  /** Button size */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /** Full width button */
  fullWidth?: boolean;
  /** Optional icon to display */
  icon?: React.ReactNode;
}

const sizeStyles: Record<NonNullable<ButtonPrimaryProps['size']>, SxProps> = {
  lg: { height: '44px', paddingLeft: '24px', paddingRight: '24px', gap: '8px' },
  md: { height: '40px', paddingLeft: '20px', paddingRight: '20px', gap: '8px' },
  sm: { height: '36px', paddingLeft: '16px', paddingRight: '16px', gap: '8px' },
  xs: { height: '32px', paddingLeft: '16px', paddingRight: '16px', gap: '4px' },
};

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
          backgroundColor: 'var(--color-background-primary-bold-200, #0354A6)',
          color: 'var(--color-text-white-base, #FFFFFF)',
          borderRadius: 'var(--radius-large, 12px)',
          fontSize: 'var(--font-text-md-l-24-medium-size, 16px)',
          fontFamily: 'var(--font-text-md-l-24-medium-family, Inter)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight, 500)',
          ...sizeStyles[size],
          '&:hover': {
            backgroundColor: 'var(--color-background-primary-bold-300, #064280)',
          },
          '&:disabled, &[aria-disabled="true"]': {
            backgroundColor: 'var(--color-background-primary-bold-200, #0354A6)',
            opacity: 'var(--opacity-50, 0.5)',
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

ButtonPrimary.displayName = 'ButtonPrimary';

export { ButtonPrimary };