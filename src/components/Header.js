import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

const Header = () => {
  return (
    <div>
        <section className={s.menu}>
            <li>
                <NavLink to="/">Главная</NavLink>
            </li>
            <li>
                <NavLink to="/contacts">О Нас</NavLink>
            </li>
            <li>
                <NavLink to="/about">Программы обучение</NavLink>
            </li>
            <li>
              <NavLink to="/onlain">Онлайн обучение</NavLink>
            </li>
            <li>
              <NavLink to="/terms">Условие и цены</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">Отзывы </NavLink>
            </li>
            <li>
              <NavLink to="/jobs">Вокансии</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Контакты</NavLink>
            </li>

        </section>
    </div>
  )
}

export default Header