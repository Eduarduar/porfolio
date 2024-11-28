import React, { ElementType, ForwardedRef } from 'react'
import { Menu as HeadlessMenu } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

interface ItemProps {
  as?: ElementType
  className?: string
  children?: React.ReactNode
  [key: string]: any
}

const Item = React.forwardRef(
  ({ as: Component = 'a', className, ...props }: ItemProps, ref: ForwardedRef<HTMLElement>) => {
    const computedClass = twMerge(
      'cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400',
      className
    )

    return (
      <HeadlessMenu.Item as="div">
        <Component ref={ref} className={computedClass} {...props}>
          {props.children}
        </Component>
      </HeadlessMenu.Item>
    )
  }
)

export default Item
