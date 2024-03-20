import React from 'react'
import Layout from '@/components/layout'
import Container from '@/components/container'
import DetailImage from './detail-img'

export default function DetailContainer(): React.ReactNode {
  return (
    <Layout>
      <div className="p-9">
        <div className="flex gap-10 w-full justify-between">
          <DetailImage />
        </div>

        <div className="deskripsi"></div>
      </div>
    </Layout>
  )
}
