import React from 'react';

interface ColorSwatchProps {
  /**
   * The name of the color token to display
   */
  colorName: string;
  /**
   * The hex value of the color
   */
  colorValue: string;
  /**
   * The size of the swatch
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional className for consumer overrides
   */
  className?: string;
}

const ColorSwatch = React.forwardRef<HTMLDivElement, ColorSwatchProps>(({ colorName, colorValue, size = 'medium', className }, ref) => {
  const sizeStyles = {
    small: { width: '40px', height: '40px' },
    medium: { width: '60px', height: '60px' },
    large: { width: '80px', height: '80px' },
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorValue,
        ...sizeStyles[size],
        borderRadius: '4px',
        padding: '8px',
        boxSizing: 'border-box',
      }}
    >
      <div style={{
        fontFamily: 'var(--font-label-sm-family)',
        fontSize: 'var(--font-label-sm-size)',
        fontWeight: 'var(--font-label-sm-weight)',
        lineHeight: 'var(--font-label-sm-line-height)',
        color: 'var(--color-input-dropdown-text)',
        marginBottom: '4px',
      }}>
        {colorName}
      </div>
      <div style={{
        fontFamily: 'var(--font-body-sm-family)',
        fontSize: 'var(--font-body-sm-size)',
        fontWeight: 'var(--font-body-sm-weight)',
        lineHeight: 'var(--font-body-sm-line-height)',
        color: 'var(--color-input-dropdown-text)',
      }}>
        {colorValue}
      </div>
    </div>
  );
});

export { ColorSwatch };
export default ColorSwatch;
