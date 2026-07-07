// src/components/TasksContentPage/TasksContentPage.tsx
import React from 'react';

const ICON_FRAME_SVG = `<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2.5 9.16667V2.5H9.16667V9.16667H2.5ZM2.5 17.5V10.8333H9.16667V17.5H2.5ZM10.8333 9.16667V2.5H17.5V9.16667H10.8333ZM10.8333 17.5V10.8333H17.5V17.5H10.8333ZM4.16667 7.5H7.5V4.16667H4.16667V7.5ZM12.5 7.5H15.8333V4.16667H12.5V7.5ZM12.5 15.8333H15.8333V12.5H12.5V15.8333ZM4.16667 15.8333H7.5V12.5H4.16667V15.8333Z' fill='#7C88A6'/></svg>`;

const BG_SVG = `<svg width='1688' height='874' viewBox='0 0 1688 874' fill='none' xmlns='http://www.w3.org/2000/svg'><g filter='url(#filter0_f_55042_7990)'><ellipse cx='851.5' cy='447' rx='806.5' ry='348' fill='url(#paint0_linear_55042_7990)' fill-opacity='0.25'/></g><defs><filter id='filter0_f_55042_7990' x='-230.3' y='-176.3' width='2163.6' height='1246.6' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'><feFlood flood-opacity='0' result='BackgroundImageFix'/><feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/><feGaussianBlur stdDeviation='137.65' result='effect1_foregroundBlur_55042_7990'/></filter><linearGradient id='paint0_linear_55042_7990' x1='45' y1='447' x2='1658' y2='447' gradientUnits='userSpaceOnUse'><stop stop-color='#A268FF' stop-opacity='0.8'/><stop offset='1' stop-color='#3E95D6'/></linearGradient></defs></svg>`;

export interface TasksContentPageProps {
  onClick?: () => void;
  onHover?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  sx?: Record<string, unknown>;
  className?: string;
}

const TasksContentPage = React.forwardRef<HTMLDivElement, TasksContentPageProps>(({ onClick, onHover, isDisabled, isLoading, children, sx, className }, ref) => {
  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseEnter={onHover}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-page, #FFFFFF)',
        color: 'var(--color-header, #7C88A6)',
        border: '1px solid var(--color-dividerstroke, #000000)',
        borderRadius: '12px',
        padding: '20px 30px 0px 45px',
        gap: 'var(--gap-space-30, 30px)',
        fontSize: 'var(--font-typography-open-sans-14-size, 14px)',
        fontFamily: 'var(--font-typography-open-sans-14-family, Open Sans)',
        fontWeight: 'var(--font-typography-open-sans-14-weight, 600)',
        ...sx,
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        dangerouslySetInnerHTML={{ __html: BG_SVG }}
      />
      <span
        aria-hidden
        style={{ display: 'inline-flex', zIndex: 1 }}
        dangerouslySetInnerHTML={{ __html: ICON_FRAME_SVG }}
      />
      {children}
      <span
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          top: '0px',
          left: '0px',
          width: '116px',
          height: '38px',
          background: 'rgba(80,93,111,0.3)',
          borderRadius: '12px',
          opacity: 1,
        }}
      />
      <span
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          top: '0px',
          left: '136px',
          width: '116px',
          height: '38px',
          background: 'rgba(80,93,111,0.3)',
          borderRadius: '12px',
          opacity: 1,
        }}
      />
    </div>
  );
});

export { TasksContentPage };