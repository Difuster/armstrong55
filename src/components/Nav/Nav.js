import React, { useState } from 'react';
import NavItem from '../NavItem/NavItem';
import './Nav.scss';
import burgerIcon from '../../assets/icons/burger.png';
import closeIcon from '../../assets/icons/close.png';

const Nav = () => {
  const navItems = [
    {
      id: 1,
      header: "Категории",
      list: [
        {title: "Потолок Армстронг", link:"/plates"},
        {title: "Металлические панели", link:"/metal"},
        {title: "Реечный потолок", link:"/slat"},
        {title: "Потолок Грильято", link:"/grid"}
      ]
    },
    {
      id: 2,
      header: "Функциональные",
      list: [
        {title: "Негорючие потолки", link:"/"},
        {title: "Медицинские потоки", link:"/"},
        {title: "Влагостойкие потолки", link:"/"}
      ]
    },
    {
      id: 3,
      header: "Подвесная система",
      list: [
        {title: "T-Line", link:"/"},
        {title: "Албес Norma", link:"/"},
        {title: "Албес Евро", link:"/"},
        {title: "Retail", link:"/"}
      ]
    }
  ]

  const [burgerIsActive, setBurgerIsActive] = useState("burger-hidden");

  return (
    <>
      <nav className="nav">
        {
          navItems.map(navItem => {
            return (
              <NavItem
                key={navItem.id}
                header={navItem.header}
                list={navItem.list}
              />
            )
          })
        }
      </nav>
      <nav className="burger">
        <div className="burger__icon-open" onClick={() => setBurgerIsActive("burger-visible")}>
          <img src={burgerIcon} alt="Открыть меню" />
        </div>
        <div className={`burger__menu ${burgerIsActive}`}>
          <div className="burger__icon-close" onClick={() => setBurgerIsActive("burger-hidden")}>
            <img src={closeIcon} alt="Скрыть меню" />
          </div>
          {
            navItems.map(navItem => {
              return (
                <NavItem
                  key={navItem.id}
                  header={navItem.header}
                  list={navItem.list}
                  closenav={() => setBurgerIsActive("burger-hidden")}
                />
              )
            })
          }
        </div>
      </nav>
    </>
  )
}

export default Nav;
