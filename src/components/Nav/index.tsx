import './style.css'
import React, { useState } from 'react';
import companyLogoDesktop from '../../img/logo-desktop.svg'
import companyLogoMobile from '../../img/logo-mobile.svg'
import Button from '../../components/Button'
import MenuOpen from '../../img/menu-buguer-open.svg'
import MenuClose from '../../img/menu-buguer-close.svg'




export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleDropdown() {
    setIsOpen(!isOpen)
  }
  return (

    <nav>
      <img className="logoDesktop" src={companyLogoDesktop} alt="logo" />
      <img className="logoMobile" src={companyLogoMobile} alt="logo" />

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Recompensas</a></li>
        <li><a href="#">GiftsCard</a></li>
        <li><a href="#">Lojas</a></li>
      </ul>
      <Button className="getCoffeeButton">Pegar meu café</Button>
      <button className="buttonMobileMenu" onClick={toggleDropdown}>
        <img src={isOpen ? MenuClose : MenuOpen} />
      </button>
      {isOpen && (
        <ul className="ulMobile">
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Recompensas</a></li>
          <li><a href="#">GiftsCard</a></li>
          <li><a href="#">Lojas</a></li>
        </ul>
      )
      }
    </nav>
  )
}