import React from 'react'
import Image from 'next/image'

type ImageOverlayProps = {
  children: React.ReactNode | string
  src: string
  alt: string
}

export default function ImageOverlay({
  children,
  src,
  alt
}: ImageOverlayProps): React.ReactNode {
  return (
    <div className="flex flex-col max-w-[80px] text-center gap-[13px]">
      <figure className="rounded-full overflow-hidden h-[80px] w-[80px] cursor-pointer select-none group inline-block">
        <Image
          alt={alt}
          src={src}
          className="h-full object-cover w-full"
          width={80}
          height={80}
          priority
        />
      </figure>
      <p className="font-semibold">{children}</p>
    </div>
  )
}
