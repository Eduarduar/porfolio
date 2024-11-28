import React, { forwardRef, HTMLAttributes, ElementType } from 'react'
import { Menu as HeadlessMenu } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import _ from 'lodash'
import Button from './Button'
import Divider from './Divider'
import Footer from './Footer'
import Header from './Header'
import Item from './Item'
import Items from './Items'

interface MenuProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  className?: string
}

interface MenuComponent
  extends React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLElement>> {
  Button: typeof Button
  Divider: typeof Divider
  Footer: typeof Footer
  Header: typeof Header
  Item: typeof Item
  Items: typeof Items
}

const Menu = forwardRef<HTMLElement, MenuProps>(
  ({ as: Component = 'div', className, ...props }, ref) => {
    const mergedClassName = twMerge('relative', className)
    const filteredProps = _.omit(props, 'className')

    return (
      <HeadlessMenu>
        <Component ref={ref} className={mergedClassName} {...filteredProps} />
      </HeadlessMenu>
    )
  }
) as MenuComponent

Menu.Button = Button
Menu.Divider = Divider
Menu.Footer = Footer
Menu.Header = Header
Menu.Item = Item
Menu.Items = Items

export default Menu
