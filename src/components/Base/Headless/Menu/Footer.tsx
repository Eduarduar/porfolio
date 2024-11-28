import React, { ElementType, HTMLAttributes } from 'react'
import _ from 'lodash'
import { twMerge } from 'tailwind-merge'

interface FooterProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  className?: string
}

const Footer: React.FC<FooterProps> = ({ as: Component = 'div', className, ...props }) => {
  const computedClass = twMerge('flex p-1', className)

  return (
    <Component className={computedClass} {..._.omit(props, 'class')}>
      {props.children}
    </Component>
  )
}

export default Footer
