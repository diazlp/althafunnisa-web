import React from 'react'

type SizePickerProps = {
  children: React.ReactNode | string
  isPicked: boolean
  onClick: () => void
}

export default function SizePicker({
  children,
  isPicked,
  onClick
}: SizePickerProps): React.ReactNode {
  return (
    <div
      className={`w-[66px] h-[57px] border border-gray-100 cursor-pointer flex justify-center items-center ${isPicked ? 'bg-gray-100' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
