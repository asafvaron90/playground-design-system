// src/components/Checkbox/Checkbox.tsx
import React, { forwardRef } from 'react';
import { Box, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/material';

/**
 * Props for the Checkbox component.
 */
export interface CheckboxProps {
  /**
   * Callback fired when the checkbox is clicked.
   */
  onClick?: () => void;
  /**
   * Callback fired when the checkbox is hovered.
   */
  onHover?: () => void;
  /**
   * If true, the checkbox is disabled.
   */
  isDisabled?: boolean;
  /**
   * If true, the checkbox shows a loading spinner.
   */
  isLoading?: boolean;
  /**
   * Content to be displayed next to the checkbox.
   */
  children?: React.ReactNode;
  /**
   * Custom styles for the checkbox.
   */
  sx?: Record<string, unknown>;
  /**
   * Custom class name for the checkbox.
   */
  className?: string;
  /**
   * If true, the checkbox is selected.
   */
  isSelected?: boolean;
  /**
   * If true, the checkbox is in an error state.
   */
  hasError?: boolean;
  /**
   * If true, the checkbox is indeterminate.
   */
  indeterminate?: boolean;
  /**
   * If true, a label is displayed next to the checkbox.
   */
  labelVisible?: boolean;
  /**
   * Icon to display inside the checkbox.
   */
  icon?: React.ReactNode;
}

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(({
  onClick,
  onHover,
  isDisabled,
  isLoading,
  children,
  sx,
  className,
  isSelected = false,
  hasError = false,
  indeterminate = false,
  labelVisible = true,
  icon,
}, ref) => {
  const baseSx: SxProps = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--gap-8, 8px)',
    backgroundColor: 'var(--color-background-white-base, #FFFFFF)',
    color: 'var(--color-text-neutral-base, #1D1F23)',
    border: '2px solid',
    borderColor: hasError ? 'var(--color-border-danger-bold-100, #BB251A)' : 'var(--color-border-neutral-bold-100, #8B939F)',
    borderRadius: 'var(--radius-small, 6px)',
    padding: labelVisible ? '2px 0 0 0' : '0',
    fontSize: 'var(--font-text-md-l-24-regular-size, 16px)',
    fontFamily: 'var(--font-text-md-l-24-regular-family, Inter)',
    fontWeight: 'var(--font-text-md-l-24-regular-weight, 400)',
    letterSpacing: 'var(--gap-body-md-letter-spacing, 0px)',
    lineHeight: 'var(--font-body-md-line-height-24, 24px)', /* WARN: --font-body-md-line-height-24 not defined by Figma tokens — check approved tokens */
    '&:hover': {
      borderColor: hasError ? 'var(--color-border-danger-bold-100, #BB251A)' : 'var(--color-border-neutral-bold-200, #6E7581)',
    },
    '&:disabled, &[aria-disabled="true"]': {
      opacity: 'var(--opacity-50, 0.5)',
      cursor: 'not-allowed',
    },
    '&:focus-visible': {
      outline: '2px solid var(--color-action-primary, #4B96E7)',
    },
  };

  const selectedSx: SxProps = isSelected || indeterminate ? {
    backgroundColor: hasError ? 'var(--color-background-danger-bold-100, #BB251A)' : 'var(--color-background-primary-bold-200, #0354A6)',
    borderColor: 'var(--color-icon-white-base, #FFFFFF)',
  } : {};

  return (
    <Box
      ref={ref}
      component="div"
      role="checkbox"
      aria-checked={isSelected}
      aria-disabled={isDisabled}
      onClick={onClick}
      onMouseEnter={onHover}
      className={className}
      sx={{ ...baseSx, ...selectedSx, ...sx }}
    >
      {isLoading ? (
        <CircularProgress size={24} />
      ) : (
        <>
          {icon && <span className="comp-icon">{icon}</span>}
          {children}
        </>
      )}
    </Box>
  );
});

export { Checkbox };