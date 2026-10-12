import React, { useState } from 'react';
import { Flower2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  caption?: string;
  priority?: boolean;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  aspectClassName = '',
  caption,
  priority = false,
}) => {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`relative overflow-hidden bg-[#F5EBD6] ${aspectClassName}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setFailed(true)}
          className={className}
        />
      ) : (
        <div
          className="flex flex-col items-center justify-center w-full h-full min-h-[240px] p-8 text-center bg-gradient-to-br from-[#F5EBD6] via-[#FFF8E9] to-[#E8B83F]/20 text-[#203A2B]"
          role="img"
          aria-label={alt}
        >
          <Flower2 className="w-10 h-10 text-[#A65E43] mb-3 stroke-[1.5]" />
          <p className="font-serif-editorial text-lg font-medium max-w-md">{alt}</p>
          <span className="text-xs text-[#203A2B]/60 mt-1">
            Boddemma.com Cultural Visual Archive
          </span>
        </div>
      )}
      {caption && (
        <figcaption className="mt-2.5 text-xs font-serif-editorial italic text-[#203A2B]/75 px-1">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
