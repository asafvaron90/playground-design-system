// ColorSwatch.tsx
import React from 'react';
import PropTypes from 'prop-types';

interface ColorSwatchProps {
  /**
   * The name of the color token to display.
   */
  colorName: keyof typeof colorTokens;
  /**
   * The size of the swatch.
   * Can be 'small', 'medium', or 'large'.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Additional class names to apply to the swatch.
   */
  className?: string;
}

const colorTokens = {
  'color-091c2a': 'var(--color-091c2a)',
  'color-0e92cb': 'var(--color-0e92cb)',
  'color-d7e3ec': 'var(--color-d7e3ec)',
  'color-e7f4fd': 'var(--color-e7f4fd)',
  'color-1st-click-ascending': 'var(--color-1st-click-ascending)',
  'color-chip': 'var(--color-chip)',
  'color-menu-item': 'var(--color-menu-item)',
  'color-active': 'var(--color-active)',
  'color-button': 'var(--color-button)',
  'color-buttons': 'var(--color-buttons)',
  'color-color-fill-only-on-hover-click': 'var(--color-color-fill-only-on-hover-click)',
  'color-error': 'var(--color-error)',
  'color-helper-text': 'var(--color-helper-text)',
  'color-input-dropdown': 'var(--color-input-dropdown)',
  'color-input-dropdown-txt': 'var(--color-input-dropdown-txt)',
  'color-new-buttons': 'var(--color-new-buttons)',
  'color-rectangle-2': 'var(--color-rectangle-2)',
  'color-vector': 'var(--color-vector)',
};

const sizeStyles = {
  small: { width: '50px', height: '50px' },
  medium: { width: '100px', height: '100px' },
  large: { width: '150px', height: '150px' },
};

const ColorSwatch = React.forwardRef<HTMLDivElement, ColorSwatchProps>(({ colorName, size = 'medium', className }, ref) => {
  const colorStyle = { backgroundColor: colorTokens[colorName] };
  const sizeStyle = sizeStyles[size];

  return (
    <div
      ref={ref}
      className={`color-swatch ${className}`}
      style={{ ...colorStyle, ...sizeStyle }}
    >
      <div>{colorName}</div>
      <div>{colorTokens[colorName]}</div>
    </div>
  );
});

ColorSwatch.displayName = 'ColorSwatch';

ColorSwatch.propTypes = {
  colorName: PropTypes.oneOf(Object.keys(colorTokens)).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

export default ColorSwatch;
export { ColorSwatch };