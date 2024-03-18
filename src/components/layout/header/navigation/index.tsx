import React from 'react'
import NavigationItem from './navigation-item'

export default function Navigation(): React.ReactNode {
  return (
    <nav className="flex items-center gap-[32px]">
      <NavigationItem label="Home" href="/" />
      <NavigationItem label="Brand" href="/" />
      <NavigationItem label="Kategori" href="/" />
      <NavigationItem label="kolaborasi" href="/" />
      <NavigationItem label="althafunnisa merch" href="/" />
    </nav>
  )
}
