
import React from 'react';
import styles from './Navbar.module.css'
import { ActiveLink } from '../ActiveLink/ActiveLink';

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {menuItems.map((navitem): any => (
        <ActiveLink key={navitem.href} text={navitem.text} href={navitem.href} /> 
      ))}
    </nav>
  )
}
