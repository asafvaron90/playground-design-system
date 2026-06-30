import React from 'react';
import { MuiMenu, MuiMenuItem, MuiDivider, MuiTypography, MuiBox } from '../adapters/mui/internal';

export interface MenuItemConfig {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  destructive?: boolean;
  showDividerAfter?: boolean;
}

export interface MenuProps {
  /** Anchor element for positioning */
  anchorEl?: HTMLElement | null;
  /** Whether menu is open */
  open?: boolean;
  /** Array of menu items */
  items?: MenuItemConfig[];
  /** Menu label */
  label?: string;
  /** Icon for the trigger */
  icon?: React.ReactNode;
  /** Disable all items */
  disabled?: boolean;
  /** Show divider between groups */
  showDivider?: boolean;
  /** Mark as destructive */
  destructive?: boolean;
  /** Variant */
  variant?: 'default' | 'destructive' | 'disabled' | 'withIcon' | 'withDivider';
  /** Item click handler */
  onItemClick?: (item: MenuItemConfig) => void;
  /** Close handler */
  onClose?: () => void;
  /** Select handler */
  onSelect?: (item: MenuItemConfig) => void;
  onClick?: () => void;
  onHover?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  sx?: Record<string, unknown>;
  className?: string;
}

const DoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8.5" stroke="#8E8E93" strokeWidth="1.5" />
    <path d="M6.5 10.5L9 13L13.5 8" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlannerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" rx="3" fill="#31752F" />
    <path d="M10 5C10 5 5 7.5 5 11C5 13.2091 7.23858 15 10 15C12.7614 15 15 13.2091 15 11C15 7.5 10 5 10 5Z" fill="white" />
    <path d="M10 5V15" stroke="#31752F" strokeWidth="1" />
  </svg>
);

const MondayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="5" cy="13" rx="3" ry="3" fill="#F62B54" />
    <ellipse cx="10" cy="13" rx="3" ry="3" fill="#FFCC00" />
    <ellipse cx="15" cy="13" rx="3" ry="3" fill="#00CA72" />
  </svg>
);

const ZohoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2L18 6V14L10 18L2 14V6L10 2Z" fill="#E42527" />
    <path d="M10 2L18 6L10 10L2 6L10 2Z" fill="#F5A623" />
    <path d="M2 6L10 10V18L2 14V6Z" fill="#4285F4" />
    <path d="M18 6L10 10V18L18 14V6Z" fill="#34A853" />
  </svg>
);

const EditIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.586 3.586a2 2 0 112.828 2.828l-1.06 1.06-2.829-2.828 1.061-1.06z" fill="#8E8E93" />
    <path d="M12.121 6.414L4 14.536V17h2.464l8.121-8.121-2.464-2.465z" fill="#8E8E93" />
  </svg>
);

const CopyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="7" width="9" height="10" rx="1.5" stroke="#8E8E93" strokeWidth="1.5" />
    <path d="M13 7V5.5A1.5 1.5 0 0011.5 4h-7A1.5 1.5 0 003 5.5v7A1.5 1.5 0 004.5 14H6" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const DeleteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="14" height="2" rx="1" fill="#8E8E93" />
    <rect x="7" y="3" width="6" height="2" rx="1" fill="#8E8E93" />
    <path d="M4.5 7l1 10h9l1-10H4.5z" stroke="#8E8E93" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    <path d="M8 9.5v5M10 9.5v5M12 9.5v5" stroke="#8E8E93" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const DEFAULT_ITEMS: MenuItemConfig[] = [
  { id: 'done', label: 'Done', icon: <DoneIcon /> },
  { id: 'planner', label: 'Send to Planner', icon: <PlannerIcon /> },
  { id: 'monday', label: 'Send to Monday', icon: <MondayIcon /> },
  { id: 'zoho', label: 'Send to Zoho', icon: <ZohoIcon />, showDividerAfter: true },
  { id: 'edit', label: 'Edit', icon: <EditIcon /> },
  { id: 'copy', label: 'Copy', icon: <CopyIcon /> },
  { id: 'delete', label: 'Delete', icon: <DeleteIcon />, destructive: false },
];

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(function Menu(
  {
    anchorEl,
    open = true,
    items,
    label,
    icon,
    disabled = false,
    showDivider = true,
    destructive = false,
    variant = 'default',
    onItemClick,
    onClose,
    onSelect,
    onClick,
    onHover,
    isDisabled = false,
    isLoading = false,
    children,
    sx = {},
    className,
  },
  ref
) {
  const resolvedItems = items && items.length > 0 ? items : DEFAULT_ITEMS;
  const allDisabled = disabled || isDisabled || variant === 'disabled';

  const handleItemClick = (item: MenuItemConfig) => {
    if (allDisabled || item.disabled) return;
    onItemClick?.(item);
    onSelect?.(item);
    onClose?.();
  };

  const isDestructiveVariant = variant === 'destructive' || destructive;

  return (
    <MuiBox
      ref={ref}
      data-figma-component="Menu"
      className={className}
      onClick={onClick}
      onMouseEnter={onHover}
      sx={{
        width: '140px',
        minHeight: '258px',
        backgroundColor: 'var(--color-white, #FFFFFF)',
        borderRadius: '8px',
        boxShadow: '0px 4px 16px rgba(0,0,0,0.12)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        py: '8px',
        opacity: allDisabled ? 0.5 : 1,
        pointerEvents: allDisabled ? 'none' : 'auto',
        ...sx,
      }}
    >
      {resolvedItems.map((item) => {
        const showDividerAfterItem =
          (showDivider || variant === 'withDivider') && item.showDividerAfter;

        const isItemDestructive = item.destructive || isDestructiveVariant;

        return (
          <React.Fragment key={item.id}>
            <MuiBox
              component="div"
              onClick={() => handleItemClick(item)}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px',
                px: '16px',
                py: '10px',
                cursor: item.disabled ? 'not-allowed' : 'pointer',
                opacity: item.disabled ? 0.5 : 1,
                backgroundColor: 'transparent',
                transition: 'background-color 0.15s ease',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.06)',
                },
              }}
            >
              {(icon || item.icon) && (
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
                  {item.icon || icon}
                </MuiBox>
              )}
              <MuiTypography
                sx={{
                  fontFamily: 'var(--font-body-regular-family, Inter)',
                  fontSize: 'var(--font-body-regular-size, 14px)',
                  fontWeight: 'var(--font-body-regular-weight, 400)',
                  lineHeight: 1.25,
                  color: isItemDestructive ? 'var(--color-danger-500, #C84747)' : '#1C1C1E',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </MuiTypography>
            </MuiBox>
            {showDividerAfterItem && (
              <MuiDivider
                sx={{
                  borderColor: '#E5E5EA',
                  mx: '0px',
                  my: '4px',
                }}
              />
            )}
          </React.Fragment>
        );
      })}
      {children}
    </MuiBox>
  );
});

export { Menu };
