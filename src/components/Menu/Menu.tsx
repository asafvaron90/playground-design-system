import React from 'react';
import { MuiMenu, MuiMenuItem, MuiDivider, MuiTypography, MuiBox, MuiStack } from '../adapters/mui/internal';

export interface MenuItemConfig {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  destructive?: boolean;
  showDividerAfter?: boolean;
}

export interface MenuProps {
  // Designer-confirmed API
  items?: MenuItemConfig[];
  label?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  showDivider?: boolean;
  destructive?: boolean;
  variant?: 'default' | 'destructive' | 'disabled' | 'withIcon' | 'withDivider';

  // Anchor / open control
  anchorEl?: HTMLElement | null;
  open?: boolean;

  // Events
  onItemClick?: (item: MenuItemConfig) => void;
  onClose?: () => void;
  onSelect?: (item: MenuItemConfig) => void;

  // Standard props
  onClick?: () => void;
  onHover?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  sx?: Record<string, unknown>;
  className?: string;
}

// ─── Inline SVG icons ────────────────────────────────────────────────────────

const DoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" stroke="#90A3B1" strokeWidth="1.5" />
    <path d="M6 10l3 3 5-5" stroke="#90A3B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlannerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="16" height="16" rx="2" fill="#1BA366" />
    <rect x="5" y="5" width="4" height="4" rx="0.5" fill="white" />
    <rect x="11" y="5" width="4" height="4" rx="0.5" fill="white" opacity="0.6" />
    <rect x="5" y="11" width="4" height="4" rx="0.5" fill="white" opacity="0.4" />
    <rect x="11" y="11" width="4" height="4" rx="0.5" fill="white" opacity="0.3" />
  </svg>
);

const MondayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5.5" cy="13" r="3" fill="#FF3D57" />
    <circle cx="10" cy="13" r="3" fill="#FFCB00" />
    <circle cx="14.5" cy="13" r="3" fill="#00CA72" />
  </svg>
);

const ZohoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" stroke="#E8222E" strokeWidth="1.5" fill="none" />
    <circle cx="10" cy="10" r="5" stroke="#F5A623" strokeWidth="1.5" fill="none" />
    <circle cx="10" cy="10" r="2.5" fill="#1C9" />
  </svg>
);

const EditIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 3.5a1.414 1.414 0 012 2L7 15H5v-2L14.5 3.5z" stroke="#90A3B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const CopyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="7" width="9" height="9" rx="1.5" stroke="#90A3B1" strokeWidth="1.5" fill="none" />
    <path d="M13 7V5a1 1 0 00-1-1H5a1 1 0 00-1 1v7a1 1 0 001 1h2" stroke="#90A3B1" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

const DeleteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6h12M8 6V4h4v2M15 6l-1 11H6L5 6" stroke="#90A3B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M9 10v4M11 10v4" stroke="#90A3B1" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ─── Default items ────────────────────────────────────────────────────────────

const DEFAULT_ITEMS: MenuItemConfig[] = [
  { id: 'done',            label: 'Done',            icon: <DoneIcon />,    showDividerAfter: false },
  { id: 'send-planner',   label: 'Send to Planner', icon: <PlannerIcon />, showDividerAfter: false },
  { id: 'send-monday',    label: 'Send to Monday',  icon: <MondayIcon />,  showDividerAfter: false },
  { id: 'send-zoho',      label: 'Send to Zoho',    icon: <ZohoIcon />,    showDividerAfter: true  },
  { id: 'edit',           label: 'Edit',            icon: <EditIcon />                              },
  { id: 'copy',           label: 'Copy',            icon: <CopyIcon />                              },
  { id: 'delete',         label: 'Delete',          icon: <DeleteIcon />,  destructive: true        },
];

// ─── Component ────────────────────────────────────────────────────────────────

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(function Menu(
  {
    items = DEFAULT_ITEMS,
    label,
    icon,
    disabled,
    showDivider = true,
    destructive,
    variant = 'default',
    anchorEl,
    open = true,
    onItemClick,
    onClose,
    onSelect,
    onClick,
    onHover,
    isDisabled,
    isLoading,
    children,
    sx,
    className,
  },
  ref
) {
  const effectiveDisabled = disabled || isDisabled;

  const handleItemClick = (item: MenuItemConfig) => {
    if (effectiveDisabled || item.disabled) return;
    onItemClick?.(item);
    onSelect?.(item);
    onClose?.();
  };

  // ── Standalone (no anchor) rendering ──────────────────────────────────────
  // When no anchorEl is provided we render the menu panel directly (for Storybook / pixel-diff).
  const isStandalone = !anchorEl;

  const itemStyles = (item: MenuItemConfig) => {
    const isDestructive =
      item.destructive ||
      destructive ||
      variant === 'destructive';
    return {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '12px',
      px: '16px',
      py: '8px',
      minHeight: '36px',
      backgroundColor: 'transparent',
      color: isDestructive
        ? 'var(--color-danger-500, #C84747)'
        : 'var(--color-text-main, #D7E3EC)',
      opacity: (effectiveDisabled || item.disabled || variant === 'disabled') ? 0.4 : 1,
      cursor: (effectiveDisabled || item.disabled || variant === 'disabled') ? 'not-allowed' : 'pointer',
      '&:hover': {
        backgroundColor: 'var(--color-grey-buttons-bg, #1B293A)',
      },
    };
  };

  const panelSx = {
    width: '140px',
    minHeight: '258px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: '0px 4px 16px rgba(0,0,0,0.12)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    py: '8px',
    ...sx,
  };

  if (isStandalone) {
    return (
      <MuiBox
        ref={ref}
        data-figma-component="Menu"
        className={className}
        onClick={onClick}
        sx={panelSx as object}
      >
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <MuiBox
              component="div"
              role="menuitem"
              onClick={() => handleItemClick(item)}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '12px',
                px: '16px',
                py: '8px',
                minHeight: '36px',
                backgroundColor: 'transparent',
                color: (item.destructive || destructive || variant === 'destructive')
                  ? 'var(--color-danger-500, #C84747)'
                  : '#111827',
                opacity: (effectiveDisabled || item.disabled || variant === 'disabled') ? 0.4 : 1,
                cursor: (effectiveDisabled || item.disabled || variant === 'disabled') ? 'not-allowed' : 'pointer',
                userSelect: 'none',
                fontFamily: 'var(--font-body-regular-family, Inter)',
                fontSize: 'var(--font-body-regular-size, 14px)',
                fontWeight: 'var(--font-body-regular-weight, 400)',
                '&:hover': {
                  backgroundColor: '#F3F4F6',
                },
              } as object}
            >
              <MuiBox
                sx={{
                  width: '20px',
                  height: '20px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.icon ?? icon ?? null}
              </MuiBox>
              <MuiTypography
                sx={{
                  fontFamily: 'var(--font-body-regular-family, Inter)',
                  fontSize: 'var(--font-body-regular-size, 14px)',
                  fontWeight: 'var(--font-body-regular-weight, 400)',
                  color: 'inherit',
                  lineHeight: 1.4,
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </MuiTypography>
            </MuiBox>
            {(item.showDividerAfter || showDivider && item.id === 'send-zoho') && (
              <MuiDivider sx={{ my: '4px', borderColor: '#E5E7EB' }} />
            )}
          </React.Fragment>
        ))}
        {children}
      </MuiBox>
    );
  }

  // ── Anchored MuiMenu rendering ─────────────────────────────────────────────
  return (
    <MuiMenu
      ref={ref as React.Ref<HTMLDivElement>}
      data-figma-component="Menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      className={className}
      onClick={onClick}
      slotProps={{
        paper: {
          sx: {
            width: '140px',
            minHeight: '258px',
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            boxShadow: '0px 4px 16px rgba(0,0,0,0.12)',
            py: '8px',
          },
        },
      }}
      sx={{ '& .MuiList-root': { py: 0 }, ...sx }}
    >
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <MuiMenuItem
            onClick={() => handleItemClick(item)}
            disabled={effectiveDisabled || item.disabled || variant === 'disabled'}
            sx={{
              ...itemStyles(item),
              color: (item.destructive || destructive || variant === 'destructive')
                ? 'var(--color-danger-500, #C84747)'
                : '#111827',
              '&:hover': { backgroundColor: '#F3F4F6' },
            }}
          >
            <MuiBox
              sx={{
                width: '20px',
                height: '20px',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {item.icon ?? icon ?? null}
            </MuiBox>
            <MuiTypography
              sx={{
                fontFamily: 'var(--font-body-regular-family, Inter)',
                fontSize: 'var(--font-body-regular-size, 14px)',
                fontWeight: 'var(--font-body-regular-weight, 400)',
                color: 'inherit',
                lineHeight: 1.4,
                whiteSpace: 'nowrap',
              }}
            >
              {item.label}
            </MuiTypography>
          </MuiMenuItem>
          {item.showDividerAfter && (
            <MuiDivider sx={{ my: '4px', borderColor: '#E5E7EB' }} />
          )}
        </React.Fragment>
      ))}
      {children}
    </MuiMenu>
  );
});

export { Menu };
