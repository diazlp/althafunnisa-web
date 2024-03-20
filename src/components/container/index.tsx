import React from 'react'

type ContainerProps = {
  children: React.ReactNode | string
  size?: string
}

export default function Container({
  children,
  size
}: ContainerProps): React.ReactNode {
  return <div className={`${size ? 'p-9' : 'mx-[69px]'}`}>{children}</div>
}
