import React from 'react'
import Image from 'next/image'

type ProductCardProps = {
  src: string
  alt: string
  isNewProduct?: boolean
  isPreOrder?: boolean
}

export default function ProductCard({
  src,
  alt,
  isNewProduct = false,
  isPreOrder = false
}: ProductCardProps): React.ReactNode {
  return (
    <section className="flex flex-col w-[336px] h-[452px]">
      <figure className="overflow-hidden h-[317px] w-full rounded-3xl relative">
        <Image
          alt={alt}
          src={src}
          className="h-full object-contain w-full"
          width={336}
          height={317}
          priority
        />
        {isPreOrder ? (
          <button
            type="button"
            className="bg-yellow-600 rounded-full text-center text-white absolute left-3 bottom-5 h-9 leading-9 px-9 hover:bg-yellow-700"
          >
            Pre Order
          </button>
        ) : null}
        {isNewProduct ? (
          <div className="bg-yellow-100 text-center text-white absolute bottom-0 w-full h-9 leading-9">
            New
          </div>
        ) : null}
      </figure>

      <div className="mt-10 w-full">
        <p className="text-heading-3 font-bold">SereRayya Family</p>
        <p className="text-brand-text text-gray-100">Khimar</p>
        <div className="flex gap-5 text-heading-4 font-semibold">
          <p className="text-pink-300 line-through">Rp.400.000,00</p>
          <p>Rp.300.000,00</p>
        </div>
      </div>
    </section>
  )
}
