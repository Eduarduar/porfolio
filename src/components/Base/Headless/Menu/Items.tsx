import React, { ElementType, ReactNode } from 'react'
import { Menu as HeadlessMenu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

interface ItemsProps {
  as?: ElementType
  placement?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
    | 'left-start'
    | 'left'
    | 'left-end'
  className?: string
  children?: ReactNode
  [key: string]: any
}

const Items: React.FC<ItemsProps> = ({
  as: Component = 'div',
  placement = 'bottom-end',
  className,
  ...props
}) => {
  const computedClass = twMerge(
    'p-2 shadow-[0px_3px_10px_#00000017] bg-white border-transparent rounded-md dark:bg-darkmode-600 dark:border-transparent',
    className
  )

  return (
    <Transition
      as={React.Fragment}
      enter="transition-all ease-linear duration-150"
      enterFrom="mt-5 invisible opacity-0 translate-y-1"
      enterTo="mt-1 visible opacity-100 translate-y-0"
      leave="transition-all ease-linear duration-150"
      leaveFrom="mt-1 visible opacity-100 translate-y-0"
      leaveTo="mt-5 invisible opacity-0 translate-y-1"
    >
      <div
        className={classNames('absolute z-30', {
          'left-0 bottom-[100%]': placement === 'top-start',
          'left-[50%] translate-x-[-50%] bottom-[100%]': placement === 'top',
          'right-0 bottom-[100%]': placement === 'top-end',
          'left-[100%] translate-y-[-50%]': placement === 'right-start',
          'left-[100%] top-[50%] translate-y-[-50%]': placement === 'right',
          'left-[100%] bottom-0': placement === 'right-end',
          'top-[100%] right-0': placement === 'bottom-end',
          'top-[100%] left-[50%] translate-x-[-50%]': placement === 'bottom',
          'top-[100%] left-0': placement === 'bottom-start',
          'right-[100%] translate-y-[-50%]': placement === 'left-start',
          'right-[100%] top-[50%] translate-y-[-50%]': placement === 'left',
          'right-[100%] bottom-0': placement === 'left-end'
        })}
      >
        <HeadlessMenu.Items as="div">
          <Component className={computedClass} {...props}>
            {props.children}
          </Component>
        </HeadlessMenu.Items>
      </div>
    </Transition>
  )
}

export default Items
