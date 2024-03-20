import React, { useState } from 'react'
import Layout from '@/components/layout'
import Container from '@/components/container'
import DetailImages from './detail-images'
import SizePicker from './size-picker'
import ColorVariant from './color-variant'
import { FaPlus } from 'react-icons/fa6'
import ProductCard from '@/components/product-card'

export default function DetailContainer(): React.ReactNode {
  const [pickedSizeIndex, setPickedSizeIndex] = useState<number>(0)

  const handleItemClick = (index: number) => {
    setPickedSizeIndex(index === pickedSizeIndex ? 0 : index)
  }

  return (
    <Layout>
      <Container size="lg">
        <div className="flex gap-10 w-full">
          <DetailImages />

          <div className="flex flex-col gap-5">
            <h1 className="text-heading-3 font-bold">Sererraya Bluesh-Pink</h1>
            <p className="text-brand-text text-gray-100">Rp. 900.000,00</p>

            <div className="mt-5">Size:</div>

            <div className="flex gap-3">
              <SizePicker
                isPicked={pickedSizeIndex === 0}
                onClick={() => handleItemClick(0)}
              >
                S
              </SizePicker>
              <SizePicker
                isPicked={pickedSizeIndex === 1}
                onClick={() => handleItemClick(1)}
              >
                M
              </SizePicker>
              <SizePicker
                isPicked={pickedSizeIndex === 2}
                onClick={() => handleItemClick(2)}
              >
                L
              </SizePicker>
              <SizePicker
                isPicked={pickedSizeIndex === 3}
                onClick={() => handleItemClick(3)}
              >
                XL
              </SizePicker>
              <SizePicker
                isPicked={pickedSizeIndex === 4}
                onClick={() => handleItemClick(4)}
              >
                XXL
              </SizePicker>
            </div>

            <p>Varian Warna: sererayya 01 (White)</p>

            <ColorVariant />

            <button
              type="button"
              className="h-[45px] mt-40 rounded-md bg-yellow-100 text-white font-bold text-center w-full hover:bg-yellow-400"
            >
              Beli
            </button>
            <button
              type="button"
              className="h-[45px] rounded-md text-yellow-100 border border-yellow-100 font-bold text-center w-full hover:bg-gray-10"
            >
              Wishlist
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between h-[50px] rounded-md mt-10 p-2 bg-yellow-200">
          <p>Deskripsi</p>
          <FaPlus />
        </div>

        <div className="flex flex-col mt-10 gap-5">
          <p className="text-center text-heading-3 text-yellow-100">
            Rekomendasi Untuk Anda
          </p>

          <div className="grid grid-cols-3 w-full gap-10">
            <ProductCard
              src={'/assets/catalog/catalog-5.png'}
              alt={'Catalog 5'}
            />
            <ProductCard
              src={'/assets/catalog/catalog-6.png'}
              alt={'Catalog 6'}
            />
            <ProductCard
              src={'/assets/catalog/catalog-7.png'}
              alt={'Catalog 7'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  )
}
