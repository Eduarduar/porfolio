import React, { ElementType, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import _ from 'lodash'

interface DividerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  className?: string
}

const Divider: React.FC<DividerProps> = ({ as: Component = 'div', className, ...props }) => {
  const computedClass = twMerge('h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400', className)

  return (
    <Component className={computedClass} {..._.omit(props, 'class')}>
      {props.children}
    </Component>
  )
}

export default Divider
