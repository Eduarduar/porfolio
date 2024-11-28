import Menu from './Menu'
import Button from './Button'
import Items from './Items'
import Item from './Item'
import Divider from './Divider'
import Header from './Header'
import Footer from './Footer'

const TabComponent = Object.assign({}, Menu, {
  Button: Button,
  Items: Items,
  Item: Item,
  Divider: Divider,
  Header: Header,
  Footer: Footer
})

export default TabComponent
