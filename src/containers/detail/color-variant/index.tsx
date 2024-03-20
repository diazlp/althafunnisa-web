import React from 'react'
import Image from 'next/image'

export default function ColorVariant(): React.ReactNode {
  return (
    <div className="grid grid-cols-4 gap-6">
      <figure className="overflow-hidden h-[82px] w-full">
        <Image
          alt="Variant 1"
          src="/assets/detail/variant-1.png"
          className="h-full object-contain w-full"
          width={82}
          height={82}
          priority
        />
      </figure>
      <figure className="overflow-hidden h-[82px] w-full">
        <Image
          alt="Variant 2"
          src="/assets/detail/variant-2.png"
          className="h-full object-contain w-full"
          width={82}
          height={82}
          priority
        />
      </figure>
      <figure className="overflow-hidden h-[82px] w-full">
        <Image
          alt="Variant 3"
          src="/assets/detail/variant-3.png"
          className="h-full object-contain w-full"
          width={82}
          height={82}
          priority
        />
      </figure>
      <figure className="overflow-hidden h-[82px] w-full">
        <Image
          alt="Variant 4"
          src="/assets/detail/variant-4.png"
          className="h-full object-contain w-full"
          width={82}
          height={82}
          priority
        />
      </figure>
      <figure className="overflow-hidden h-[82px] w-full">
        <Image
          alt="Variant 5"
          src="/assets/detail/variant-5.png"
          className="h-full object-contain w-full"
          width={82}
          height={82}
          priority
        />
      </figure>
      <figure className="overflow-hidden h-[82px] w-full">
        <Image
          alt="Variant 6"
          src="/assets/detail/variant-6.png"
          className="h-full object-contain w-full"
          width={82}
          height={82}
          priority
        />
      </figure>
      <figure className="overflow-hidden h-[82px] w-full">
        <Image
          alt="Variant 7"
          src="/assets/detail/variant-7.png"
          className="h-full object-contain w-full"
          width={82}
          height={82}
          priority
        />
      </figure>
      <figure className="overflow-hidden h-[82px] w-full">
        <Image
          alt="Variant 8"
          src="/assets/detail/variant-8.png"
          className="h-full object-contain w-full"
          width={82}
          height={82}
          priority
        />
      </figure>
    </div>
  )
}
