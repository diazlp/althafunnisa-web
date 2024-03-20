import React from 'react'
import Layout from '@/components/layout'
import Container from '@/components/container'
import FilterCard from '@/components/filter-card'
import ProductCard from '@/components/product-card'

export default function CatalogContainer(): React.ReactNode {
  return (
    <Layout>
      <Container>
        <div className="flex gap-10 my-10 w-full">
          <FilterCard />

          <div className="grid grid-cols-2 2xl:grid-cols-3 w-full gap-10">
            <ProductCard
              src={'/assets/catalog/catalog-1.png'}
              alt={'Catalog 1'}
              isNewProduct
            />
            <ProductCard
              src={'/assets/catalog/catalog-2.png'}
              alt={'Catalog 2'}
              isPreOrder
            />
            <ProductCard
              src={'/assets/catalog/catalog-3.png'}
              alt={'Catalog 3'}
            />
            <ProductCard
              src={'/assets/catalog/catalog-4.png'}
              alt={'Catalog 4'}
            />
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
            <ProductCard
              src={'/assets/catalog/catalog-8.png'}
              alt={'Catalog 8'}
            />
            <ProductCard
              src={'/assets/catalog/catalog-9.png'}
              alt={'Catalog 9'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  )
}
