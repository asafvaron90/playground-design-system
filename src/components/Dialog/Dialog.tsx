import React from 'react';
import { MuiBox, MuiTypography, MuiButton, MuiDialog, MuiDialogContent } from '../adapters/mui/internal';

export interface DialogProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  primaryLabel?: string;
  cancelLabel?: string;
  open?: boolean;
  showIcon?: boolean;
  variant?: 'warning' | 'info' | 'error' | 'default';
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
  onClick?: () => void;
  onHover?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  sx?: Record<string, unknown>;
  className?: string;
}

const WarningIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="url(#paint0_linear_551_6542)"/>
    <path d="M28.6084 24.4999L21.9417 12.8332C21.7964 12.5767 21.5856 12.3634 21.3308 12.2149C21.0761 12.0665 20.7866 11.9883 20.4917 11.9883C20.1969 11.9883 19.9074 12.0665 19.6526 12.2149C19.3979 12.3634 19.1871 12.5767 19.0417 12.8332L12.3751 24.4999C12.2281 24.7543 12.1511 25.0431 12.1517 25.337C12.1524 25.6308 12.2307 25.9192 12.3788 26.173C12.5268 26.4269 12.7394 26.637 12.9948 26.7822C13.2503 26.9274 13.5396 27.0025 13.8334 26.9999H27.1667C27.4591 26.9996 27.7463 26.9223 27.9995 26.7759C28.2526 26.6295 28.4627 26.4191 28.6088 26.1658C28.7549 25.9125 28.8318 25.6252 28.8317 25.3328C28.8316 25.0404 28.7546 24.7531 28.6084 24.4999Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.5 17V20.3333" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.5 23.667H20.5083" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear_551_6542" x1="30.5263" y1="2.17389e-06" x2="1.41551" y2="30.215" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9B5DFF"/>
        <stop offset="1" stopColor="#30335D"/>
      </linearGradient>
    </defs>
  </svg>
);

const getVariantIconBackground = (variant: string): string => {
  switch (variant) {
    case 'error':
      return 'linear-gradient(135deg, var(--color-danger-500, #C84747) 0%, #1a1a3a 100%)';
    case 'info':
      return 'linear-gradient(135deg, var(--color-brand-500, #3074F3) 0%, #1a2050 100%)';
    case 'success':
      return 'linear-gradient(135deg, var(--color-success-500, #25A96B) 0%, #1a3a2a 100%)';
    case 'warning':
    case 'default':
    default:
      return 'linear-gradient(-74deg, rgba(155,93,255,1) 0%, rgba(48,51,93,1) 100%)';
  }
};

const getVariantPrimaryGradient = (variant: string): string => {
  switch (variant) {
    case 'error':
      return 'linear-gradient(-82deg, var(--color-danger-500, #C84747) 0%, #30335D 100%)';
    case 'info':
      return 'linear-gradient(-82deg, var(--color-brand-500, #3074F3) 0%, #30335D 100%)';
    case 'success':
      return 'linear-gradient(-82deg, var(--color-success-500, #25A96B) 0%, #30335D 100%)';
    case 'warning':
    case 'default':
    default:
      return 'linear-gradient(-82deg, rgba(110,62,187,1) 0%, rgba(48,51,93,1) 100%)';
  }
};

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>((
  {
    title = 'Notice',
    message = 'Rerunning the System Bullets AI will overwrite the previous System Bullets AI insights.',
    icon,
    primaryLabel = 'Continue',
    cancelLabel = 'Cancel',
    open = true,
    showIcon = true,
    variant = 'default',
    onConfirm,
    onCancel,
    onClose,
    onClick,
    onHover,
    isDisabled = false,
    isLoading = false,
    children,
    sx,
    className,
  },
  ref
) => {
  const primaryGradient = getVariantPrimaryGradient(variant);
  const iconBackground = getVariantIconBackground(variant);

  const cardContent = (
    <MuiBox
      ref={ref}
      data-figma-component="Dialog"
      className={className}
      sx={{
        width: '277px',
        minHeight: '322px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--gap-space-xl, 24px)',
        padding: '24px',
        borderRadius: '24px',
        backgroundColor: 'var(--color-grey-page-light, #091C2A)',
        border: '1px solid var(--color-grey-stroke, #2A4051)',
        color: 'var(--color-grey-text-icons, #D7E3EC)',
        boxSizing: 'border-box',
        ...sx,
      }}
    >
      {/* Frame 1973342171 — icon + text group */}
      <MuiBox
        sx={{
          width: '229px',
          minHeight: '151px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 'var(--gap-space-m, 16px)',
        }}
      >
        {/* Frame 1973342108 — icon badge */}
        {showIcon && (
          <MuiBox
            sx={{
              width: '40px',
              height: '40px',
              minHeight: '40px',
              borderRadius: '38px',
              background: iconBackground,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              overflow: 'hidden',
            }}
          >
            {icon ?? <WarningIcon />}
          </MuiBox>
        )}

        {/* Frame 1973342172 — title + message */}
        <MuiBox
          sx={{
            width: '100%',
            minHeight: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 'var(--gap-space-m, 16px)',
          }}
        >
          <MuiTypography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              fontFamily: 'Inter',
              lineHeight: 'normal',
              color: 'rgba(215, 227, 236, 1)',
              textAlign: 'center',
              width: '57px',
              minHeight: '22px',
            }}
          >
            {title}
          </MuiTypography>

          <MuiTypography
            sx={{
              fontSize: '16px',
              fontWeight: 400,
              fontFamily: 'Inter',
              lineHeight: 'normal',
              color: 'rgba(215, 227, 236, 1)',
              textAlign: 'center',
              width: '229px',
              minHeight: '57px',
            }}
          >
            {message}
          </MuiTypography>
        </MuiBox>
      </MuiBox>

      {/* Frame 1973342158 — action buttons */}
      <MuiBox
        sx={{
          width: '229px',
          minHeight: '99px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: 'var(--gap-space-xs, 8px)',
        }}
      >
        {/* Primary button */}
        <MuiButton
          disabled={isDisabled || isLoading}
          onClick={onConfirm ?? onClick}
          sx={{
            width: '100%',
            height: '47px',
            minHeight: '47px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--gap-space-10, 10px)',
            padding: '14px 10px',
            borderRadius: '12px',
            background: primaryGradient,
            color: 'var(--color-white, #FFFFFF)',
            fontSize: '16px',
            fontWeight: 600,
            fontFamily: 'Inter',
            lineHeight: 'normal',
            textTransform: 'none',
            border: 'none',
            boxShadow: 'none',
            '&:hover': {
              background: primaryGradient,
              opacity: 0.9,
              boxShadow: 'none',
            },
            '&:disabled': {
              background: primaryGradient,
              opacity: 0.5,
              color: 'var(--color-white, #FFFFFF)',
            },
          }}
          variant="contained"
          disableElevation
        >
          {isLoading ? 'Loading...' : primaryLabel}
        </MuiButton>

        {/* Tertiary / cancel button */}
        <MuiButton
          disabled={isDisabled}
          onClick={onCancel ?? onClose}
          sx={{
            width: '100%',
            height: '44px',
            minHeight: '44px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--gap-space-10, 10px)',
            padding: '12px',
            borderRadius: '58px',
            background: 'transparent',
            color: 'var(--color-purple-purple, #9B5DFF)',
            fontSize: '16px',
            fontWeight: 500,
            fontFamily: 'Inter',
            lineHeight: 'normal',
            textTransform: 'none',
            border: 'none',
            boxShadow: 'none',
            '&:hover': {
              background: 'rgba(155, 93, 255, 0.08)',
              boxShadow: 'none',
            },
            '&:disabled': {
              color: 'var(--color-purple-purple, #9B5DFF)',
              opacity: 0.5,
            },
          }}
          variant="text"
          disableElevation
        >
          {cancelLabel}
        </MuiButton>
      </MuiBox>

      {children}
    </MuiBox>
  );

  if (open === false) {
    return null;
  }

  return cardContent;
});

Dialog.displayName = 'Dialog';

export { Dialog };
