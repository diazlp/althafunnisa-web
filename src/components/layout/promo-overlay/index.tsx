import React from 'react'

export default function PromoOverlay(): React.ReactNode {
  return (
    <section className="flex h-[38px] bg-yellow-100 border-b-2 border-b-black justify-center items-center font-semibold text-brand-text gap-5">
      <p>
        Dapatkan diskon 25% dalam rangka menyambut bulan ramadhan. jangan
        lewatkan kesempatan !!!
      </p>
      <p className="font-bold underline cursor-pointer">Produk sale</p>
    </section>
  )
}
