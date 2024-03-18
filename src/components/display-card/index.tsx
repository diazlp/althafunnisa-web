import React from 'react'
import Image from 'next/image'

type DisplayImageCardProps = {
  src: string
  alt: string
  isNewProduct?: boolean
  isCategorySection?: boolean
  categoryTitle?: string
}

export default function DisplayImageCard({
  src,
  alt,
  isNewProduct = false,
  isCategorySection = false,
  categoryTitle
}: DisplayImageCardProps): React.ReactNode {
  return (
    <figure className="rounded-xl overflow-hidden h-[587px] select-none relative">
      {isNewProduct ? (
        <div className="bg-yellow-100 text-center font-bold text-black absolute top-[25px] left-[31px] w-[118px] h-[38px] items-center leading-[38px]">
          New
        </div>
      ) : null}
      <Image
        alt={alt}
        src={src}
        className="h-full object-contain w-full"
        width={413}
        height={587}
        priority
      />
      {isCategorySection ? (
        <div className="flex flex-col gap-5 absolute bottom-[71px] left-[36px] max-w-sm">
          <p className="text-white font-bold text-menu-title">
            {categoryTitle}
          </p>
          <button
            type="button"
            className="rounded-full text-white bg-yellow-100 w-[95px] h-[47px]"
          >
            Lihat
          </button>
        </div>
      ) : null}
    </figure>
  )
}
