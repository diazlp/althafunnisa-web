import React from 'react'
import Layout from '@/components/layout'
import Container from '@/components/container'
import FilterCard from '@/components/filter-card'

export default function CatalogContainer(): React.ReactNode {
  return (
    <Layout>
      <Container>
        <div className="flex gap-10 my-10">
          <FilterCard />

          <div>ok</div>
        </div>
      </Container>
    </Layout>
  )
}
