import React from 'react';
import { MuiBox, MuiTypography, MuiButton } from '../adapters/mui/internal';

export interface DialogProps {
  title?: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  icon?: React.ReactNode;
  open?: boolean;
  variant?: 'notice' | 'warning' | 'error' | 'info';
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

const variantIconMap: Record<string, React.ReactNode> = {
  notice: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="url(#paint0_linear_551_6542_notice)"/>
      <path d="M28.6084 24.4999L21.9417 12.8332C21.7964 12.5767 21.5856 12.3634 21.3308 12.2149C21.0761 12.0665 20.7866 11.9883 20.4917 11.9883C20.1969 11.9883 19.9074 12.0665 19.6526 12.2149C19.3979 12.3634 19.1871 12.5767 19.0417 12.8332L12.3751 24.4999C12.2281 24.7543 12.1511 25.0431 12.1517 25.337C12.1524 25.6308 12.2307 25.9192 12.3788 26.173C12.5268 26.4269 12.7394 26.637 12.9948 26.7822C13.2503 26.9274 13.5396 27.0025 13.8334 26.9999H27.1667C27.4591 26.9996 27.7463 26.9223 27.9995 26.7759C28.2526 26.6295 28.4627 26.4191 28.6088 26.1658C28.7549 25.9125 28.8318 25.6252 28.8317 25.3328C28.8316 25.0404 28.7546 24.7531 28.6084 24.4999Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.5 17V20.3333" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.5 23.667H20.5083" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear_551_6542_notice" x1="30.5263" y1="2.17389e-06" x2="1.41551" y2="30.215" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9B5DFF"/>
          <stop offset="1" stopColor="#30335D"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  warning: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="url(#paint0_linear_warning)"/>
      <path d="M28.6084 24.4999L21.9417 12.8332C21.7964 12.5767 21.5856 12.3634 21.3308 12.2149C21.0761 12.0665 20.7866 11.9883 20.4917 11.9883C20.1969 11.9883 19.9074 12.0665 19.6526 12.2149C19.3979 12.3634 19.1871 12.5767 19.0417 12.8332L12.3751 24.4999C12.2281 24.7543 12.1511 25.0431 12.1517 25.337C12.1524 25.6308 12.2307 25.9192 12.3788 26.173C12.5268 26.4269 12.7394 26.637 12.9948 26.7822C13.2503 26.9274 13.5396 27.0025 13.8334 26.9999H27.1667C27.4591 26.9996 27.7463 26.9223 27.9995 26.7759C28.2526 26.6295 28.4627 26.4191 28.6088 26.1658C28.7549 25.9125 28.8318 25.6252 28.8317 25.3328C28.8316 25.0404 28.7546 24.7531 28.6084 24.4999Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.5 17V20.3333" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.5 23.667H20.5083" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear_warning" x1="30.5263" y1="2.17389e-06" x2="1.41551" y2="30.215" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFA000"/>
          <stop offset="1" stopColor="#30335D"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  error: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="url(#paint0_linear_error)"/>
      <path d="M28.6084 24.4999L21.9417 12.8332C21.7964 12.5767 21.5856 12.3634 21.3308 12.2149C21.0761 12.0665 20.7866 11.9883 20.4917 11.9883C20.1969 11.9883 19.9074 12.0665 19.6526 12.2149C19.3979 12.3634 19.1871 12.5767 19.0417 12.8332L12.3751 24.4999C12.2281 24.7543 12.1511 25.0431 12.1517 25.337C12.1524 25.6308 12.2307 25.9192 12.3788 26.173C12.5268 26.4269 12.7394 26.637 12.9948 26.7822C13.2503 26.9274 13.5396 27.0025 13.8334 26.9999H27.1667C27.4591 26.9996 27.7463 26.9223 27.9995 26.7759C28.2526 26.6295 28.4627 26.4191 28.6088 26.1658C28.7549 25.9125 28.8318 25.6252 28.8317 25.3328C28.8316 25.0404 28.7546 24.7531 28.6084 24.4999Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.5 17V20.3333" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.5 23.667H20.5083" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear_error" x1="30.5263" y1="2.17389e-06" x2="1.41551" y2="30.215" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C84747"/>
          <stop offset="1" stopColor="#30335D"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  info: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="url(#paint0_linear_info)"/>
      <path d="M20 13V20M20 27H20.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear_info" x1="30.5263" y1="2.17389e-06" x2="1.41551" y2="30.215" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3074F3"/>
          <stop offset="1" stopColor="#30335D"/>
        </linearGradient>
      </defs>
    </svg>
  ),
};

const variantButtonGradientMap: Record<string, string> = {
  notice: 'linear-gradient(-82deg, rgba(110,62,187,1) 0%, rgba(48,51,93,1) 100%)',
  warning: 'linear-gradient(-82deg, rgba(255,160,0,0.8) 0%, rgba(48,51,93,1) 100%)',
  error: 'linear-gradient(-82deg, rgba(200,71,71,0.9) 0%, rgba(48,51,93,1) 100%)',
  info: 'linear-gradient(-82deg, rgba(48,116,243,0.9) 0%, rgba(48,51,93,1) 100%)',
};

const variantCancelColorMap: Record<string, string> = {
  notice: 'var(--color-action-secondary, #9B5DFF)',
  warning: 'var(--color-warning-500, #FFA000)',
  error: 'var(--color-danger-500, #C84747)',
  info: 'var(--color-action-primary, #3074F3)',
};

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(function Dialog(
  {
    title = 'Notice',
    message = 'Rerunning the System Bullets AI will overwrite the previous System Bullets AI insights.',
    confirmLabel = 'Continue',
    cancelLabel = 'Cancel',
    icon,
    open = true,
    variant = 'notice',
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
) {
  if (!open) return null;

  const resolvedIcon = icon !== undefined ? icon : variantIconMap[variant] ?? variantIconMap['notice'];
  const buttonGradient = variantButtonGradientMap[variant] ?? variantButtonGradientMap['notice'];
  const cancelColor = variantCancelColorMap[variant] ?? variantCancelColorMap['notice'];

  return (
    <MuiBox
      ref={ref}
      data-figma-component="Dialog"
      className={className}
      onClick={onClick}
      onMouseEnter={onHover}
      sx={{
        width: '277px',
        height: '322px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-grey-text-icons, #D7E3EC)',
        ...sx,
      }}
    >
      {/* Frame 2147225182 */}
      <MuiBox
        sx={{
          width: '277px',
          height: '322px',
          minHeight: '322px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--gap-space-xl, 24px)',
          padding: '24px 24px 24px 24px',
          borderRadius: '24px',
          backgroundColor: 'var(--color-grey-page-light, #091C2A)',
          border: '1px solid var(--color-grey-stroke, #2A4051)',
          boxSizing: 'border-box',
        }}
      >
        {/* Frame 1973342171 */}
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
          <MuiBox
            sx={{
              width: '40px',
              height: '40px',
              minHeight: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '38px',
              flexShrink: 0,
              overflow: 'hidden',
            }}
          >
            {resolvedIcon}
          </MuiBox>

          {/* Frame 1973342172 */}
          <MuiBox
            sx={{
              width: '229px',
              minHeight: '95px',
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
                fontFamily: 'var(--font-headline-med-18-med-family, Inter)',
                lineHeight: 'normal',
                color: 'var(--color-grey-text-icons, #D7E3EC)',
                textAlign: 'center',
                width: '57px',
              }}
            >
              {title}
            </MuiTypography>
            <MuiTypography
              sx={{
                fontSize: '16px',
                fontWeight: 400,
                fontFamily: 'var(--font-headline-med-headline-reg-16-reg-family, Inter)',
                lineHeight: 'normal',
                color: 'var(--color-grey-text-icons, #D7E3EC)',
                textAlign: 'center',
                width: '229px',
              }}
            >
              {message}
            </MuiTypography>
          </MuiBox>
        </MuiBox>

        {/* Frame 1973342158 — buttons */}
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
            onClick={onConfirm}
            disableRipple={false}
            sx={{
              width: '229px',
              height: '47px',
              minHeight: '47px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--gap-space-10, 10px)',
              padding: '14px 10px 14px 10px',
              borderRadius: '12px',
              background: buttonGradient,
              color: 'var(--color-white-white, #FFFFFF)',
              fontSize: '16px',
              fontWeight: 500,
              fontFamily: 'var(--font-headline-med-headline-reg-16-med-family, Inter)',
              lineHeight: 'normal',
              textTransform: 'none',
              border: 'none',
              boxShadow: 'none',
              '&:hover': {
                background: buttonGradient,
                opacity: 0.9,
                boxShadow: 'none',
              },
              '&:disabled': {
                opacity: 0.5,
                color: 'var(--color-white-white, #FFFFFF)',
              },
            }}
          >
            {isLoading ? 'Loading...' : confirmLabel}
          </MuiButton>

          {/* Tertiary / Cancel button */}
          <MuiButton
            disabled={isDisabled}
            onClick={onCancel ?? onClose}
            sx={{
              width: '229px',
              height: '44px',
              minHeight: '44px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--gap-space-10, 10px)',
              padding: '12px 12px 12px 12px',
              borderRadius: '58px',
              background: 'transparent',
              color: cancelColor,
              fontSize: '16px',
              fontWeight: 500,
              fontFamily: 'var(--font-headline-med-headline-reg-16-med-family, Inter)',
              lineHeight: 'normal',
              textTransform: 'none',
              border: 'none',
              boxShadow: 'none',
              '&:hover': {
                background: 'transparent',
                opacity: 0.8,
                boxShadow: 'none',
              },
              '&:disabled': {
                opacity: 0.5,
                color: cancelColor,
              },
            }}
          >
            {cancelLabel}
          </MuiButton>
        </MuiBox>

        {children}
      </MuiBox>
    </MuiBox>
  );
});

export { Dialog };
