import Link from 'next/link'
import React from 'react'

export default function NavigationItem({
  label,
  href
}: {
  label: string
  href: string
}): React.ReactNode {
  return (
    <Link
      href={href}
      className="text-brand-text text-black-font font-semibold hidden md:block"
    >
      {label}
    </Link>
  )
}
