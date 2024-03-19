import React from 'react'
import Layout from '@/components/layout'
import HomeInformation from './home-info'
import Container from '@/components/container'
import Image from 'next/image'
import HomeProductSection from './home-product'
import HomeCategorySection from './home-category'

export default function HomeContainer(): React.ReactNode {
  return (
    <Layout>
      <Container>
        <HomeInformation />

        <Image
          alt={'Home Hero Img'}
          src={'/assets/home/hero-nude.png'}
          className="h-full object-cover w-full"
          width={1300}
          height={493}
          priority
        />

        <HomeProductSection />

        <figure className="rounded-3xl overflow-hidden h-[426px] relative">
          <Image
            alt={'Home Family Img'}
            src={'/assets/home/hero-family.png'}
            className="h-full object-cover w-full"
            width={1300}
            height={426}
            priority
          />
          <div className="flex flex-col absolute bottom-[40px] left-[63px] max-w-md text-white">
            <p className="font-bold text-heading-1">Althafunnisa</p>
            <p className="text-heading-4">
              Temukan beberapa produk unggulan dari kami, hingga seri
              kolaborasi. cari tahu lebih lanjut!
            </p>
            <button
              type="button"
              className="rounded-full text-black bg-white w-[107px] h-[44px] font-semibold mt-5 hover:bg-gray-10"
            >
              Telusuri
            </button>
          </div>
        </figure>

        <HomeCategorySection />
      </Container>
    </Layout>
  )
}
