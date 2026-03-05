// Avatar.tsx
import React, { forwardRef } from 'react';
import clsx from 'clsx';

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
      className={clsx(
        'flex items-center justify-center overflow-hidden',
        sizeClasses[size],
        shapeClasses[shape],
        className
      )}
      style={{ backgroundColor: 'var(--color-bg-surface)' }}
    >
      {src ? (
        <img src={src} alt="Avatar" className="w-full h-full object-cover" />
      ) : (
        <span className="text-gray-700" style={{ fontSize: 'var(--font-text-size)' }}>
          {initials}
        </span>
      )}
    </div>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
export { Avatar };