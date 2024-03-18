import React, { Fragment } from 'react'
import Header from './header'
import Footer from './footer'
import PromoOverlay from './promo-overlay'

type LayoutProps = {
  children: React.ReactNode | string
}

export default function Layout({ children }: LayoutProps): React.ReactNode {
  return (
    <Fragment>
      <Header />
      <PromoOverlay />
      {children}
      <Footer />
    </Fragment>
  )
}
