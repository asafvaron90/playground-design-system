// Avatar.tsx
import React, { forwardRef } from 'react';

interface AvatarProps {
  /**
   * The URL of the image to display as the avatar.
   */
  src?: string;
  /**
   * The initials to display if the image is not available.
   */
  initials?: string;
  /**
   * The size of the avatar.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The shape of the avatar.
   */
  shape?: 'circle' | 'rounded' | 'square';
  /**
   * Additional class names to apply to the avatar.
   */
  className?: string;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(({ 
  src, 
  initials, 
  size = 'medium', 
  shape = 'circle', 
  className, 
}, ref) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  const shapeClasses = {
    circle: 'rounded-full',
    rounded: 'rounded-lg',
    square: 'rounded-none',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ 
        backgroundColor: 'var(--color-bg-surface)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        width: size === 'small' ? '32px' : size === 'medium' ? '48px' : '64px',
        height: size === 'small' ? '32px' : size === 'medium' ? '48px' : '64px',
        borderRadius: shape === 'circle' ? '50%' : shape === 'rounded' ? '8px' : '0',
      }}
    >
      {src ? (
        <img src={src} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <span style={{ 
          color: 'var(--color-input-dropdown-text)',
          fontFamily: 'var(--font-text-md-family)',
          fontSize: 'var(--font-text-md-size)',
          fontWeight: 'var(--font-text-md-weight)',
          lineHeight: 'var(--font-text-md-line-height)'
        }}>
          {initials}
        </span>
      )}
    </div>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
export { Avatar };