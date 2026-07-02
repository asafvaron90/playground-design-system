import React from 'react';
import { MuiButton, MuiBox, MuiTypography } from '../adapters/mui/internal';

export interface PrimayButtonProps {
  label?: string;
  icon?: React.ReactNode;
  showIcon?: boolean;
  disabled?: boolean;
  state?: 'default' | 'pressed' | 'disabled';
  variant?: 'default' | 'pressed' | 'disabled';
  onClick?: () => void;
  onPress?: () => void;
  onRelease?: () => void;
  onHover?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  sx?: Record<string, unknown>;
  className?: string;
}

const PrimayButton = React.forwardRef<HTMLButtonElement, PrimayButtonProps>(
  (
    {
      label = 'Confirm',
      icon,
      showIcon = false,
      disabled,
      state = 'default',
      variant = 'default',
      onClick,
      onPress,
      onRelease,
      onHover,
      isDisabled = false,
      isLoading = false,
      children,
      sx = {},
      className,
    },
    ref
  ) => {
    // Resolve the effective state — designer API uses both `state` and `variant`
    const effectiveState: 'default' | 'pressed' | 'disabled' =
      disabled || isDisabled
        ? 'disabled'
        : (state === 'disabled' || variant === 'disabled')
        ? 'disabled'
        : (state === 'pressed' || variant === 'pressed')
        ? 'pressed'
        : 'default';

    const isComponentDisabled = effectiveState === 'disabled';

    // Per-state background
    const backgroundStyles: Record<string, unknown> = (() => {
      if (effectiveState === 'pressed') {
        return {
          background: 'none',
          backgroundColor: '#0a0520',
          boxShadow: 'none',
        };
      }
      if (effectiveState === 'disabled') {
        return {
          background: 'none',
          backgroundColor: 'var(--color-grey-light-grey, #C9CFDC)',
          boxShadow: 'none',
          pointerEvents: 'none',
        };
      }
      // default
      return {
        background:
          'linear-gradient(97deg, rgba(58,62,123,1) 0%, rgba(97,74,176,1) 56.5%, rgba(155,93,255,1) 100%)',
        backgroundColor: 'transparent',
        boxShadow: '0px 1.5px 3px 0px rgba(22,5,50,0.2)',
      };
    })();

    const textColor: string = (() => {
      if (effectiveState === 'disabled') {
        return 'var(--color-grey-secondary-body-text, #90A3B1)';
      }
      return 'var(--color-white-white, #FFFFFF)';
    })();

    const iconColor: string = (() => {
      if (effectiveState === 'disabled') {
        return 'var(--color-grey-secondary-body-text, #90A3B1)';
      }
      return 'var(--color-white-white, #FFFFFF)';
    })();

    return (
      <MuiButton
        ref={ref}
        data-figma-component="PrimayButton"
        className={className}
        disableRipple={effectiveState === 'disabled'}
        disabled={isComponentDisabled}
        onClick={!isComponentDisabled ? onClick : undefined}
        onMouseDown={!isComponentDisabled ? onPress : undefined}
        onMouseUp={!isComponentDisabled ? onRelease : undefined}
        onMouseEnter={!isComponentDisabled ? onHover : undefined}
        variant="contained"
        sx={{
          // Exact dimensions
          width: '108px',
          height: '44px',
          minHeight: '44px',
          // Layout
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          // Padding from Figma: top=8 right=24 bottom=8 left=24
          padding: '8px 24px',
          // Border radius — exact from manifest: 12px
          borderRadius: '12px',
          // Background & shadow per state
          ...backgroundStyles,
          // Reset MUI button defaults that could interfere
          border: 'none',
          outline: 'none',
          textTransform: 'none',
          minWidth: 'unset',
          // Override MUI disabled styles
          '&.Mui-disabled': {
            background: 'none',
            backgroundColor: 'var(--color-grey-light-grey, #C9CFDC)',
            boxShadow: 'none',
            color: 'var(--color-grey-secondary-body-text, #90A3B1)',
            pointerEvents: 'none',
          },
          '&:hover': {
            background:
              effectiveState === 'default'
                ? 'linear-gradient(97deg, rgba(68,72,143,1) 0%, rgba(107,84,186,1) 56.5%, rgba(165,103,255,1) 100%)'
                : undefined,
            boxShadow:
              effectiveState === 'default'
                ? '0px 1.5px 3px 0px rgba(22,5,50,0.2)'
                : 'none',
          },
          '&:active': {
            background: 'none',
            backgroundColor: '#0a0520',
            boxShadow: 'none',
          },
          // Spread consumer overrides last
          ...sx,
        }}
      >
        {/* Inner frame matching Figma: Frame 2147225404 */}
        <MuiBox
          sx={{
            width: 'fit-content',
            height: 'fit-content',
            minHeight: 'fit-content',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--gap-space-xxs, 4px)',
          }}
        >
          {showIcon && icon && (
            <MuiBox
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: iconColor,
                fontSize: '14px',
              }}
            >
              {icon}
            </MuiBox>
          )}
          <MuiTypography
            component="span"
            sx={{
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: 'var(--font-headline-med-headline-reg-label-large-14-med-family, Inter)',
              lineHeight: 'normal',
              color: textColor,
              userSelect: 'none',
            }}
          >
            {children ?? label}
          </MuiTypography>
        </MuiBox>
      </MuiButton>
    );
  }
);

PrimayButton.displayName = 'PrimayButton';

export { PrimayButton };
