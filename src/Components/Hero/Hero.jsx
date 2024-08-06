import React from 'react'
import { NavLInk } from 'react-router-dom'

function Hero() {
  return (
    <div>
      <ul className='hero-list'>
        <li className='hero-item'>
            <a href="#" className='hero-link'>
            Ковры
            </a>
            
        </li>
        <li className='hero-item'>
            <a href="#" className='hero-link'>
            Коврики
            </a>
        </li>
        <li className='hero-item'>
            <a href="#" className='hero-link'>
            Для ванной
            </a>
        </li>
        <li className='hero-item'>
            <a href="#" className='hero-link'>
            Дорожки
            </a>
        </li>
        <li className='hero-item'>
            <a href="#" className='hero-link'>
            Особенные ковры
            </a>
        </li>
        <li className='hero-item'>
            <a href="#" className='hero-link'>
            Центр поддержки
            </a>
        </li>
        <li className='hero-item'>
            <a href="#" className='hero-link'>
             Контакты
            </a>
        </li>
      </ul>
    </div>
  )
}

export default Hero
