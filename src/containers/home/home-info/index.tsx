import ImageOverlay from '@/components/img-overlay'
import React from 'react'

export default function HomeInformation(): React.ReactNode {
  return (
    <section className="flex justify-center my-10 gap-[57px]">
      <ImageOverlay src="/assets/home/batik-cloth.png" alt="Wastra Nusantara">
        Wayang Nusantara
      </ImageOverlay>
      <ImageOverlay src="/assets/home/batik-cloth.png" alt="Wastra Nusantara">
        Altha Moment
      </ImageOverlay>
      <ImageOverlay src="/assets/home/batik-cloth.png" alt="Wastra Nusantara">
        Produk Baru
      </ImageOverlay>
      <ImageOverlay src="/assets/home/batik-cloth.png" alt="Wastra Nusantara">
        Produk terfavorit
      </ImageOverlay>
      <ImageOverlay src="/assets/home/batik-cloth.png" alt="Wastra Nusantara">
        Produk Diskon
      </ImageOverlay>
      <ImageOverlay src="/assets/home/batik-cloth.png" alt="Wastra Nusantara">
        Lifestyle
      </ImageOverlay>
    </section>
  )
}
