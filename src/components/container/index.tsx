import React from 'react'

type ContainerProps = {
  children: React.ReactNode | string
}

export default function Container({
  children
}: ContainerProps): React.ReactNode {
  return <div className="mx-[69px]">{children}</div>
}
