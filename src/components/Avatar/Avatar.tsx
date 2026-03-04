// Avatar.tsx
import React from 'react';
import classNames from 'classnames';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The URL of the image to display in the avatar.
   */
  src?: string;
  /**
   * The initials to display when the image is not available.
   */
  initials?: string;
  /**
   * The size of the avatar.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The shape of the avatar.
   */
  shape?: 'circle' | 'square';
  /**
   * Additional class names to apply to the avatar.
   */
  className?: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, initials, size = 'medium', shape = 'circle', className, ...props }, ref) => {
    const sizeClass = {
      small: 'w-8 h-8',
      medium: 'w-12 h-12',
      large: 'w-16 h-16',
    }[size];

    const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-none';

    return (
      <div
        ref={ref}
        className={classNames(
          'flex items-center justify-center bg-gray-200',
          sizeClass,
          shapeClass,
          className
        )}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={initials}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-white font-bold" style={{ fontSize: 'var(--font-value-*)' }}>
            {initials}
          </span>
        )}
      </div>
    );
  }
);

export { Avatar };
export default Avatar;
