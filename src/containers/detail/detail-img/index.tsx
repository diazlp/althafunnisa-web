import React from 'react'
import Image from 'next/image'

export default function DetailImage(): React.ReactNode {
  return (
    <section className="flex gap-5 2xl:gap-10">
      <div className="flex flex-col gap-3">
        <figure className="overflow-hidden h-[82px] w-full">
          <Image
            alt="Detail 1"
            src="/assets/detail/detail-1.png"
            className="h-full object-contain w-full"
            width={82}
            height={82}
            priority
          />
        </figure>
        <figure className="overflow-hidden h-[82px] w-full">
          <Image
            alt="Detail 2"
            src="/assets/detail/detail-2.png"
            className="h-full object-contain w-full"
            width={82}
            height={82}
            priority
          />
        </figure>
        <figure className="overflow-hidden h-[82px] w-full">
          <Image
            alt="Detail 3"
            src="/assets/detail/detail-3.png"
            className="h-full object-contain w-full"
            width={82}
            height={82}
            priority
          />
        </figure>
      </div>

      <figure className="rounded-xl overflow-hidden h-[820px] w-[680px] 2xl:h-[881px] 2xl:w-[726px] border border-gray-100 flex justify-center items-center">
        <Image
          alt="Detail Hero"
          src="/assets/detail/detail-hero.png"
          className="object-center"
          width={650}
          height={800}
          priority
        />
      </figure>
    </section>
  )
}
