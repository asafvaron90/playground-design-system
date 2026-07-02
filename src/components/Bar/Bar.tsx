// src/components/Bar/Bar.tsx
import React from 'react';
import { MuiBox } from '../adapters/mui/internal';

const ICON_HOME = `<svg width='20' height='19' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9.49586 1.63663C9.62966 1.50299 9.81105 1.42792 10.0002 1.42792C10.1893 1.42792 10.3707 1.50299 10.5045 1.63663L18.7731 9.9053C18.839 9.97343 18.9178 10.0278 19.0049 10.0651C19.0919 10.1025 19.1856 10.1221 19.2804 10.1229C19.3751 10.1237 19.4691 10.1056 19.5568 10.0697C19.6444 10.0337 19.7241 9.9807 19.7911 9.91367C19.858 9.84663 19.911 9.76693 19.9468 9.67921C19.9827 9.59149 20.0007 9.49751 19.9998 9.40275C19.999 9.308 19.9792 9.21436 19.9418 9.12731C19.9043 9.04027 19.8499 8.96154 19.7817 8.89575L11.514 0.627068C11.3152 0.428263 11.0792 0.270562 10.8195 0.16297C10.5597 0.0553772 10.2813 0 10.0002 0C9.71901 0 9.44061 0.0553772 9.18086 0.16297C8.92111 0.270562 8.6851 0.428263 8.4863 0.627068L0.21762 8.89575C0.149492 8.96161 0.0951633 9.04038 0.0578039 9.12747C0.0204445 9.21455 0.000802506 9.3082 2.40813e-05 9.40296C-0.000754343 9.49771 0.0173463 9.59168 0.05327 9.67936C0.0891936 9.76705 0.142221 9.8467 0.209258 9.91368C0.276294 9.98065 0.355998 10.0336 0.443718 10.0694C0.531438 10.1053 0.625417 10.1233 0.720172 10.1224C0.814928 10.1216 0.908562 10.1018 0.995611 10.0644C1.08266 ...</svg>`;

const BG_SVG = `<svg width='375' height='74' viewBox='0 0 375 74' fill='none' xmlns='http://www.w3.org/2000/svg'><mask id='path-1-outside-1_542_7589' maskUnits='userSpaceOnUse' x='-3' y='-1' width='379' height='77' fill='black'><rect fill='white' x='-3' y='-1' width='379' height='77'/><path d='M375 75H-2V0H375V75Z'/></mask><path d='M375 75H-2V0H375V75Z' fill='#091C2A'/><path d='M375 75V76H376V75H375ZM-2 75H-3V76H-2V75ZM-2 0V-1H-3V0H-2ZM375 0H376V-1H375V0ZM375 75V74H-2V75V76H375V75ZM-2 75H-1V0H-2H-3V75H-2ZM-2 0V1H375V0V-1H-2V0ZM375 0H374V75H375H376V0H375Z' fill='#2A4051' mask='url(#path-1-outside-1_542_7589)'/></svg>`;

export interface BarProps {
  onClick?: () => void;
  onHover?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  sx?: Record<string, unknown>;
  className?: string;
  variant?: 'Home' | 'Meetings' | 'Actions' | 'Notifications';
}

const Bar = React.forwardRef<HTMLDivElement, BarProps>(({
  onClick,
  onHover,
  isDisabled,
  isLoading,
  children,
  sx,
  className,
  variant = 'Home',
}, ref) => {
  const variantStyles: Record<string, object> = {
    Home: {
      paddingLeft: 'var(--gap-16, 16px)',
      paddingRight: 'var(--gap-16, 16px)',
      borderTopLeftRadius: 'var(--radius-medium, 12px)',
      borderTopRightRadius: 'var(--radius-medium, 12px)',
      borderBottomLeftRadius: 'var(--radius-medium, 12px)',
      borderBottomRightRadius: 'var(--radius-medium, 12px)',
      paddingTop: 'var(--radius-medium, 12px)',
      paddingBottom: 'var(--radius-medium, 12px)',
    },
    Meetings: {},
    Actions: {},
    Notifications: {},
  };

  return (
    <MuiBox
      ref={ref}
      onClick={onClick}
      onMouseEnter={onHover}
      className={className}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--gap-12, 12px)',
        backgroundColor: 'var(--color-grey-page-light, #091C2A)',
        borderColor: 'var(--color-grey-stroke, #2A4051)',
        borderStyle: 'solid',
        borderWidth: 'var(--color-border-width-xxs, 1px)', /* WARN: --color-border-width-xxs not defined by Figma tokens — check approved tokens */
        color: 'var(--color-white-white, #FFFFFF)',
        fontSize: 'var(--font-lable-sami-12-size, 12px)',
        fontFamily: 'var(--font-lable-sami-12-family, Inter)',
        fontWeight: 'var(--font-lable-sami-12-weight, 600)',
        background: 'var(--gradient-gradients-custom)',
        ...variantStyles[variant],
        ...sx,
      }}
    >
      <span style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} dangerouslySetInnerHTML={{ __html: BG_SVG }} />
      <span style={{ position: 'absolute', pointerEvents: 'none', top: '0.349609375px', left: '-12.75px', width: '115px', height: '67px', background: 'rgba(153,89,255,0.35)', opacity: 0.7, borderRadius: '12px' }} />
      <span style={{ position: 'absolute', pointerEvents: 'none', top: '2.349609375px', left: '163.25px', width: '113px', height: '71px', background: 'rgba(0,255,255,0.3)', opacity: 0.7, borderRadius: '12px' }} />
      <span style={{ position: 'absolute', pointerEvents: 'none', top: '2.349609375px', left: '72.25px', width: '128px', height: '70px', background: 'rgba(48,116,243,0.4)', opacity: 0.7, borderRadius: '12px' }} />
      <span style={{ position: 'absolute', pointerEvents: 'none', top: '4.349609375px', left: '67.25px', width: '117px', height: '71px', background: 'rgba(255,152,0,0.3)', opacity: 0.7, borderRadius: '12px' }} />
      <span aria-hidden style={{ display: 'inline-flex', zIndex: 1 }} dangerouslySetInnerHTML={{ __html: ICON_HOME }} />
      {children}
    </MuiBox>
  );
});

export { Bar };