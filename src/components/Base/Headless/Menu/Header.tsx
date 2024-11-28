import React, { ElementType, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import _ from 'lodash'

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  className?: string
}

const Header: React.FC<HeaderProps> = ({ as: Component = 'div', className, ...props }) => {
  const computedClass = twMerge('p-2 font-medium', className)
  const filteredProps = _.omit(props, 'class')

  return (
    <Component className={computedClass} {...filteredProps}>
      {props.children}
    </Component>
  )
}

export default Header
