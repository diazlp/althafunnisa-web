import React from 'react'

type FilterItemProps = {
  children: React.ReactNode | string
  highlighted: boolean
  onClick: () => void
}

export default function FilterItem({
  children,
  highlighted,
  onClick
}: FilterItemProps): React.ReactNode {
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
      <button
        type="button"
        className="border border-gray-100 min-w-4 h-4  rounded-full"
      >
        {highlighted && (
          <div className="w-full h-full border-[3px] border-yellow-100 rounded-full" />
        )}
      </button>
      {children}
    </div>
  )
}
