import React, { ElementType, ForwardedRef } from 'react'
import { Menu as HeadlessMenu } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import _ from 'lodash'

interface ButtonProps {
  as?: ElementType
  className?: string
  children?: React.ReactNode
  [key: string]: any
}

const Button = React.forwardRef(
  ({ as: Component = 'div', className, ...props }: ButtonProps, ref: ForwardedRef<HTMLElement>) => {
    const computedClassName = twMerge('cursor-pointer', className)

    return (
      <HeadlessMenu.Button as="div">
        <Component ref={ref} className={computedClassName} {..._.omit(props, 'class')}>
          {props.children}
        </Component>
      </HeadlessMenu.Button>
    )
  }
)

export default Button
