import React from 'react';
import { MuiBox, MuiInputBase } from '../adapters/mui/internal';

export interface SearchProps {
  variant?: 'searchBar' | 'searchAI';
  placeholder?: string;
  value?: string;
  showDropdown?: boolean;
  showDivider?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onSearch?: () => void;
  onDropdownToggle?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  showAisearch5420?: boolean;
  showSearchIcon5423?: boolean;
  showArrowIcon5426?: boolean;
  arrowBackIcon5790?: boolean;
  property1?: 'Search Bar - Back' | 'Search AI';
  onCancel?: () => void;
  'search...Icon'?: React.ReactNode;
  onClick?: () => void;
  onHover?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  sx?: Record<string, unknown>;
  className?: string;
}

const SearchMagnifierIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.5 17.5L13.8833 13.8834"
      stroke="var(--color-grey-text-icons, #D7E3EC)"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
      stroke="var(--color-grey-text-icons, #D7E3EC)"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 4L6 8L10 4"
      stroke="var(--color-grey-text-icons, #D7E3EC)"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AISpinnerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="10"
      cy="10"
      r="7.5"
      stroke="var(--color-grey-secondary-body-text, #90A3B1)"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeDasharray="3 3"
    />
    <path
      d="M10 2.5C10 2.5 14.5 4 15.5 8"
      stroke="var(--color-grey-secondary-body-text, #90A3B1)"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
  </svg>
);

const Search = React.forwardRef<HTMLDivElement, SearchProps>((
  {
    variant = 'searchBar',
    placeholder,
    value,
    showDropdown = true,
    showDivider = true,
    icon,
    disabled = false,
    onChange,
    onSearch,
    onDropdownToggle,
    onFocus,
    onBlur,
    showAisearch5420 = true,
    showSearchIcon5423 = true,
    showArrowIcon5426 = true,
    arrowBackIcon5790 = false,
    property1 = 'Search Bar - Back',
    onCancel,
    'search...Icon': searchIcon,
    onClick,
    onHover,
    isDisabled = false,
    isLoading = false,
    children,
    sx = {},
    className,
  },
  ref
) => {
  const isSearchAI = variant === 'searchAI' || property1 === 'Search AI';
  const effectiveDisabled = disabled || isDisabled;
  const resolvedPlaceholder = placeholder ?? (isSearchAI ? 'Search Meetings...' : 'Search...');

  const placeholderColor = isSearchAI
    ? 'var(--color-grey-secondary-body-text, #90A3B1)'
    : 'var(--color-green-green, #25A96B)';

  return (
    <MuiBox
      ref={ref}
      data-figma-component="Search"
      className={className}
      onClick={onClick}
      onMouseEnter={onHover}
      sx={{
        width: '343px',
        minHeight: '44px',
        height: '44px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'var(--color-grey-text-icons, #D7E3EC)',
        opacity: effectiveDisabled ? 0.5 : 1,
        pointerEvents: effectiveDisabled ? 'none' : 'auto',
        boxSizing: 'border-box',
        ...sx,
      }}
    >
      {/* Frame 1410103816 — full-width pill container */}
      <MuiBox
        sx={{
          width: '343px',
          minHeight: '44px',
          height: '44px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: 'var(--gap-space-m, 16px)',
          paddingRight: 'var(--gap-space-m, 16px)',
          borderRadius: 'var(--radius-radius-full, 99px)',
          backgroundColor: isSearchAI
            ? 'var(--color-grey-page-light, #091C2A)'
            : 'var(--color-grey-buttons-bg, #1B293A)',
          border: isSearchAI
            ? '1px solid var(--color-action-secondary, #9B5DFF)'
            : 'none',
          boxSizing: 'border-box',
          overflow: 'hidden',
          gap: 0,
        }}
      >
        {/* Frame 2147225554 — "Search..." text area: 59×17px */}
        <MuiBox
          sx={{
            width: '59px',
            minHeight: '17px',
            height: '17px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexShrink: 0,
          }}
        >
          <MuiInputBase
            value={value}
            placeholder={resolvedPlaceholder}
            disabled={effectiveDisabled}
            onChange={(e) => onChange?.(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={(e) => { if (e.key === 'Enter') onSearch?.(); }}
            sx={{
              width: '59px',
              color: placeholderColor,
              fontSize: 'var(--font-headline-med-headline-reg-label-large-14-med-size, 14px)',
              fontFamily: 'var(--font-headline-med-headline-reg-label-large-14-med-family, Inter)',
              fontWeight: 'var(--font-headline-med-headline-reg-label-large-14-med-weight, 500)',
              lineHeight: 'normal',
              '& input': {
                padding: 0,
                color: placeholderColor,
                fontSize: 'var(--font-headline-med-headline-reg-label-large-14-med-size, 14px)',
                fontFamily: 'var(--font-headline-med-headline-reg-label-large-14-med-family, Inter)',
                fontWeight: 'var(--font-headline-med-headline-reg-label-large-14-med-weight, 500)',
                lineHeight: 'normal',
                width: '59px',
                '&::placeholder': {
                  color: placeholderColor,
                  opacity: 1,
                },
              },
            }}
          />
        </MuiBox>

        {/* Spacer between text and icons */}
        <MuiBox sx={{ flex: 1 }} />

        {/* Frame 2147225553 — icons area: 64×20px */}
        <MuiBox
          sx={{
            width: '64px',
            minHeight: '20px',
            height: '20px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 'var(--gap-space-s, 12px)',
            flexShrink: 0,
          }}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          {/* Search / AI icon */}
          {isSearchAI ? (
            <AISpinnerIcon />
          ) : (
            icon ?? <SearchMagnifierIcon />
          )}

          {/* Vertical divider */}
          {showDivider && !isSearchAI && (
            <MuiBox
              sx={{
                width: '1px',
                height: '16px',
                backgroundColor: 'var(--color-grey-secondary-body-text, #90A3B1)',
                flexShrink: 0,
              }}
            />
          )}

          {/* Chevron / dropdown toggle */}
          {showArrowIcon5426 && !isSearchAI && (
            <MuiBox
              component="button"
              onClick={(e: React.MouseEvent) => { e.stopPropagation(); onDropdownToggle?.(); }}
              sx={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-grey-text-icons, #D7E3EC)',
              }}
            >
              <ChevronDownIcon />
            </MuiBox>
          )}
        </MuiBox>
      </MuiBox>

      {children}
    </MuiBox>
  );
});

Search.displayName = 'Search';

export { Search };
