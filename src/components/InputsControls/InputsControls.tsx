// InputsControls.tsx
import React from 'react';

export interface InputsControlsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  /**
   * Size of the input control
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Variant of the input control
   * @default 'default'
   */
  variant?: 'default' | 'outlined' | 'filled';
  /**
   * If true, the input control will be disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Additional class name for styling
   */
  className?: string;
}

const InputsControls = React.forwardRef<HTMLDivElement, InputsControlsProps>(({
  size = 'medium',
  variant = 'default',
  disabled = false,
  className,
  ...props
}, ref) => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px 16px',
      borderRadius: '8px',
      backgroundColor: disabled ? 'var(--color-disabled)' : 'var(--color-grey-page-1)',
      color: disabled ? 'var(--color-disabled-text)' : 'var(--color-white-white)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      border: variant === 'outlined' ? '1px solid var(--color-grey-stroke)' : 'none',
      ...props.style,
    },
    text: {
      fontSize: 'var(--font-label-sml-*)',
      fontWeight: 400,
    }
  };

  return (
    <div ref={ref} className={className} style={styles.container} {...props}>
      <span style={styles.text}>View all</span>
    </div>
  );
});

export default InputsControls;
export { InputsControls };