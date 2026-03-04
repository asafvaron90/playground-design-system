// ColorSwatch.tsx
import React, { forwardRef } from 'react';
import clsx from 'clsx';

interface ColorSwatchProps {
  /**
   * The name of the color token to display
   */
  colorName: string;
  /**
   * The hex value of the color token
   */
  colorValue: string;
  /**
   * The size of the swatch
   * - 'small': 40px
   * - 'medium': 60px
   * - 'large': 80px
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Additional class names to apply to the swatch
   */
  className?: string;
}

const sizeClasses = {
  small: 'w-10 h-10',
  medium: 'w-15 h-15',
  large: 'w-20 h-20',
};

const ColorSwatch = forwardRef<HTMLDivElement, ColorSwatchProps>(({
  colorName,
  colorValue,
  size = 'medium',
  className,
}, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(
        'flex flex-col items-center justify-center border border-gray-300 rounded',
        sizeClasses[size],
        className
      )}
      style={{ backgroundColor: `var(--color-${colorName})` }}
    >
      <div className="text-sm font-bold" style={{ color: 'var(--font-text-*)' }}>{colorName}</div>
      <div className="text-xs" style={{ color: 'var(--font-helper-text-*)' }}>{colorValue}</div>
    </div>
  );
});

export { ColorSwatch };
export default ColorSwatch;
