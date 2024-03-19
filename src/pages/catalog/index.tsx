import Head from 'next/head'
import CatalogContainer from '@/containers/catalog'

export default function CatalogPage() {
  return (
    <>
      <Head>
        <title>Althafunnisa Web | Catalog</title>
      </Head>
      <CatalogContainer />
    </>
  )
}
