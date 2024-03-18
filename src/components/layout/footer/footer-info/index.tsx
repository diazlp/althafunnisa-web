import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  content: Content[] | string[]
}

type Content = {
  label: string
  href: string
}

export default function FooterInfo({ title, content }: Props): React.ReactNode {
  return (
    <div className="flex flex-col max-w-sm">
      <h2 className="text-black font-bold text-heading-3 mb-4">{title}</h2>
      {content.map((item: Content | string, index: number) => {
        if (typeof item !== 'string') {
          return (
            <Link
              href={item.href}
              key={index}
              className="text-heading-4 text-gray-500 mb-3"
            >
              {item.label}
            </Link>
          )
        }

        return (
          <p className="text-heading-4 text-gray-500 mb-3" key={index}>
            {item}
          </p>
        )
      })}
    </div>
  )
}
