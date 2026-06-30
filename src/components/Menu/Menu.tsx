import React from 'react';
import { MuiMenu, MuiMenuItem, MuiDivider, MuiTypography, MuiStack, MuiBox } from '../adapters/mui/internal';

export interface MenuItemConfig {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  destructive?: boolean;
  showDividerAfter?: boolean;
}

export interface MenuProps {
  /** Anchor element for MuiMenu positioning */
  anchorEl?: HTMLElement | null;
  /** Whether menu is open */
  open?: boolean;
  /** Menu items */
  items?: MenuItemConfig[];
  /** Menu label / title */
  label?: string;
  /** Leading icon for the menu trigger */
  icon?: React.ReactNode;
  /** Disable all items */
  disabled?: boolean;
  /** Show divider between groups */
  showDivider?: boolean;
  /** Mark menu as destructive */
  destructive?: boolean;
  /** Variant */
  variant?: 'default' | 'destructive' | 'disabled' | 'withIcon' | 'withDivider';
  /** Callbacks */
  onItemClick?: (item: MenuItemConfig) => void;
  onClose?: () => void;
  onSelect?: (item: MenuItemConfig) => void;
  onClick?: () => void;
  onHover?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  sx?: Record<string, unknown>;
  className?: string;
}

// --- Icon SVGs (inline, no external imports) ---

const DoneIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" stroke="#90A3B1" strokeWidth="1.5" />
    <path d="M6.5 10.5L8.5 12.5L13.5 7.5" stroke="#90A3B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlannerIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="16" height="16" rx="2" fill="#1B7F3B" />
    <rect x="5" y="5" width="4" height="4" rx="0.5" fill="white" />
    <rect x="11" y="5" width="4" height="4" rx="0.5" fill="white" />
    <rect x="5" y="11" width="4" height="4" rx="0.5" fill="white" />
    <rect x="11" y="11" width="4" height="4" rx="0.5" fill="white" />
  </svg>
);

const MondayIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="5" cy="12" rx="3" ry="3" fill="#FF3D57" />
    <ellipse cx="10" cy="12" rx="3" ry="3" fill="#FFCB00" />
    <ellipse cx="15" cy="12" rx="3" ry="3" fill="#00CA72" />
  </svg>
);

const ZohoIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" fill="white" />
    <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" fill="#E42527" />
    <path d="M10 4C6.69 4 4 6.69 4 10s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="white" />
    <path d="M7 7l6 0L7 13h6" stroke="#E42527" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14.5" cy="6.5" r="2" fill="#F7C325" />
    <circle cx="5.5" cy="13.5" r="2" fill="#00A1E0" />
  </svg>
);

const EditIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 3.5L16.5 6.5L7 16H4V13L13.5 3.5Z" stroke="#90A3B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CopyIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="7" width="9" height="10" rx="1.5" stroke="#90A3B1" strokeWidth="1.5" />
    <path d="M13 7V5C13 4.448 12.552 4 12 4H5C4.448 4 4 4.448 4 5V13C4 13.552 4.448 14 5 14H7" stroke="#90A3B1" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const DeleteIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H16" stroke="#90A3B1" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 6V4.5C7 4.224 7.224 4 7.5 4H12.5C12.776 4 13 4.224 13 4.5V6" stroke="#90A3B1" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="6" y="7" width="8" height="9" rx="1" stroke="#90A3B1" strokeWidth="1.5" />
    <path d="M9 10V13" stroke="#90A3B1" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11 10V13" stroke="#90A3B1" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const DEFAULT_ITEMS: MenuItemConfig[] = [
  { id: 'done', label: 'Done', icon: <DoneIcon /> },
  { id: 'planner', label: 'Send to Planner', icon: <PlannerIcon /> },
  { id: 'monday', label: 'Send to Monday', icon: <MondayIcon /> },
  { id: 'zoho', label: 'Send to Zoho', icon: <ZohoIcon />, showDividerAfter: true },
  { id: 'edit', label: 'Edit', icon: <EditIcon /> },
  { id: 'copy', label: 'Copy', icon: <CopyIcon /> },
  { id: 'delete', label: 'Delete', icon: <DeleteIcon />, destructive: true },
];

const Menu = React.forwardRef<HTMLDivElement, MenuProps>((
  {
    anchorEl,
    open = true,
    items = DEFAULT_ITEMS,
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
    sx,
    className,
  },
  ref
) => {
  const isAllDisabled = disabled || isDisabled || variant === 'disabled';
  const hasDestructive = destructive || variant === 'destructive';

  const handleItemClick = (item: MenuItemConfig) => {
    if (isAllDisabled || item.disabled) return;
    onItemClick?.(item);
    onSelect?.(item);
    onClose?.();
  };

  const renderItems = () => {
    const elements: React.ReactNode[] = [];

    items.forEach((item, index) => {
      const isDestructive = item.destructive || (hasDestructive && item.id === 'delete');
      const isItemDisabled = isAllDisabled || item.disabled;

      elements.push(
        <MuiMenuItem
          key={item.id}
          onClick={() => handleItemClick(item)}
          disabled={isItemDisabled}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 16px',
            minHeight: '36px',
            backgroundColor: 'transparent',
            color: isDestructive
              ? 'var(--color-danger-500, #C84747)'
              : 'var(--color-text-main, #D7E3EC)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.06)',
            },
            '&.Mui-disabled': {
              opacity: 0.5,
              color: 'var(--color-text-muted, #90A3B1)',
            },
          }}
        >
          {item.icon && (
            <MuiBox
              sx={{
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {item.icon}
            </MuiBox>
          )}
          <MuiTypography
            sx={{
              fontFamily: 'var(--font-body-regular-family, Inter)',
              fontSize: 'var(--font-body-regular-size, 14px)',
              fontWeight: 'var(--font-body-regular-weight, 400)',
              lineHeight: '1.25',
              color: 'inherit',
              whiteSpace: 'nowrap',
            }}
          >
            {item.label}
          </MuiTypography>
        </MuiMenuItem>
      );

      const shouldShowDivider =
        item.showDividerAfter &&
        (showDivider || variant === 'withDivider') &&
        index < items.length - 1;

      if (shouldShowDivider) {
        elements.push(
          <MuiDivider
            key={`divider-${item.id}`}
            sx={{
              borderColor: 'var(--color-border-divider, #2A4051)',
              margin: '4px 0',
            }}
          />
        );
      }
    });

    return elements;
  };

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
        backgroundColor: 'var(--color-grey-buttons-bg, #1B293A)',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0px 4px 24px rgba(0,0,0,0.4)',
        display: 'flex',
        flexDirection: 'column',
        padding: '6px 0',
        color: 'var(--color-text-main, #D7E3EC)',
        ...sx,
      }}
    >
      {renderItems()}
      {children}
    </MuiBox>
  );
});

Menu.displayName = 'Menu';

export { Menu };
