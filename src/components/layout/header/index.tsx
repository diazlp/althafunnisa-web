import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './navigation'
import { CiSearch, CiHeart, CiUser } from 'react-icons/ci'

export default function Header(): React.ReactNode {
  return (
    <header className="h-[87px] bg-white pt-2 pl-3 pr-16">
      <div className="flex justify-between items-center text-black">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={'/assets/althafunnisa-header-logo.png'}
              className="cursor-pointer select-none"
              alt="Althafunnisa Header Logo"
              placeholder="empty"
              height={72}
              width={135}
              priority
            />
          </Link>
        </div>

        <div className="flex items-center">
          <Navigation />
        </div>

        <div className="flex items-center gap-[38px]">
          <CiSearch size={24} className="cursor-pointer" />
          <CiHeart size={24} className="cursor-pointer" />
          <CiUser size={24} className="cursor-pointer" />
        </div>
      </div>
    </header>
  )
}
