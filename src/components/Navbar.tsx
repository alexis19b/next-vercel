import React from 'react'
import styles from './navbar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
  {
      id: 1,
      text: 'Home',
      href: '/'
  },
  {
      id: 2,
      text: 'About',
      href: '/about'
  },
  {
      id: 3,
      text: 'Contact',
      href: '/contac'
  },
  {
      id: 4,
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.menu}>
      {
        menuItems.map((items) => 
          <ActiveLink key={items.id} text={items.text} href={items.href} />
        )
      }
    </nav>
  )
}
