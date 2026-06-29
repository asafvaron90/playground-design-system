import React from 'react';
import { MuiBox, MuiTypography } from '../adapters/mui/internal';

export interface PppProps {
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
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

const Ppp = React.forwardRef<HTMLDivElement, PppProps>((
  {
    label = 'Confirm',
    icon,
    iconPosition = 'left',
    disabled = false,
    state = 'default',
    variant = 'default',
    onClick,
    onPress,
    onRelease,
    onHover,
    isDisabled = false,
    isLoading = false,
    children,
    sx,
    className,
  },
  ref
) => {
  const resolvedVariant = variant !== 'default' ? variant : state;
  const isDisabledState =
    resolvedVariant === 'disabled' || disabled || isDisabled;
  const isPressedState = resolvedVariant === 'pressed';

  const getBackground = () => {
    if (isDisabledState) return 'var(--color-neutral-300, #D1D5DB)';
    if (isPressedState) return 'var(--color-grey-page, #051321)';
    return 'linear-gradient(97deg, rgba(58,62,123,1) 0%, rgba(97,74,176,1) 56.5%, rgba(155,93,255,1) 100%)';
  };

  const getBoxShadow = () => {
    if (isDisabledState || isPressedState) return 'none';
    return '0px 1.5px 3px 0px rgba(22,5,50,0.2)';
  };

  const getLabelColor = () => {
    if (isDisabledState) return 'var(--color-grey-secondary-body-text, #90A3B1)';
    return 'var(--color-white-white, #FFFFFF)';
  };

  const getIconColor = () => {
    if (isDisabledState) return 'var(--color-grey-secondary-body-text, #90A3B1)';
    return 'var(--color-white-white, #FFFFFF)';
  };

  const handleClick = () => {
    if (isDisabledState) return;
    onClick?.();
  };

  const handleMouseDown = () => {
    if (isDisabledState) return;
    onPress?.();
  };

  const handleMouseUp = () => {
    if (isDisabledState) return;
    onRelease?.();
  };

  const handleMouseEnter = () => {
    if (isDisabledState) return;
    onHover?.();
  };

  return (
    <MuiBox
      ref={ref}
      data-figma-component="Ppp"
      className={className}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      sx={{
        width: '108px',
        height: '44px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'var(--gap-space-xs, 8px)',
        paddingBottom: 'var(--gap-space-xs, 8px)',
        paddingLeft: 'var(--gap-space-xl, 24px)',
        paddingRight: 'var(--gap-space-xl, 24px)',
        borderRadius: '12px',
        background: getBackground(),
        boxShadow: getBoxShadow(),
        cursor: isDisabledState ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        transition: 'background 0.15s ease, box-shadow 0.15s ease',
        boxSizing: 'border-box',
        color: 'var(--color-white-white, #FFFFFF)',
        ...sx,
      }}
    >
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
        {icon && iconPosition === 'left' && (
          <MuiBox
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: getIconColor(),
            }}
          >
            {icon}
          </MuiBox>
        )}
        <MuiTypography
          sx={{
            fontSize: 'var(--font-headline-med-headline-reg-label-large-14-med-size, 14px)',
            fontWeight: 'var(--font-headline-med-headline-reg-label-large-14-med-weight, 500)',
            fontFamily: 'var(--font-headline-med-headline-reg-label-large-14-med-family, Inter)',
            lineHeight: 'normal',
            color: getLabelColor(),
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </MuiTypography>
        {icon && iconPosition === 'right' && (
          <MuiBox
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: getIconColor(),
            }}
          >
            {icon}
          </MuiBox>
        )}
      </MuiBox>
    </MuiBox>
  );
});

Ppp.displayName = 'Ppp';

export { Ppp };
