import React, { useState } from 'react';
import { Slider } from 'antd';
import Add from '/Add.png';
import Sub from '/Sub.png';
import kover from '/kover.png';
import burger from '/burger.svg'
import NextCard from '../NextCard/NextCard';
import Newcard from '../Newcard/Newcard';

function Menu() {
  const [selected, setSelected] = useState(null);
  const [value, setValue] = useState([2500, 55000]);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const a = {
    img: kover,
    text: "Новинка",
    title: "Aster Q893A LVIZON LVIZON",
    size: "60x100",
    country: "Казахстан",
    price: "160.000",
    nextprice: "13.333"
  }
  const b = {
    img: kover,
    text: "Новинка",
    name: "Aster Q893A LVIZON",
    size: "60x100",
    country: "Казахстан",
    price: "160.000",
    nextprice: "13.333"
  }
  const data = [
    {
      title: "Страна",
      text1: "Казахстан",
      text2: "Турция",
      text3: "Россия"
    },
    {
      title: "Размеры",
      text1: "150x230cm",
      text2: "200x300cm",
      text3: "200x350cm"
    },
    {
      title: "Материал",
      text1: "lorem",
      text2: "lorem",
      text3: "lorem"
    },
    {
      title: "Толщина",
      text1: "lorem",
      text2: "lorem",
      text3: "lorem"
    },
    {
      title: "Тип",
      text1: "lorem",
      text2: "lorem",
      text3: "lorem"
    },
    {
      title: "Форма",
      text1: "lorem",
      text2: "lorem",
      text3: "lorem"
    },
    {
      title: "Стиль",
      text1: "lorem",
      text2: "lorem",
      text3: "lorem"
    },
    {
      title: "Производитель",
      text1: "lorem",
      text2: "lorem",
      text3: "lorem"
    },
    {
      title: "Новинки и скидки",
      text1: "lorem",
      text2: "lorem",
      text3: "lorem"
    },
  ];

  return (
    <div className='menu'>
      <div className='container menu__container'>
        <div className='menu__left'>
          <a className='menu__top-link' href="">Главная / </a>
          <a className='menu__top-link' href="">Дорожки</a>
          <div className='menu__item'>
            <ul className='menu__list'>
              <h3 className='menu__text'>Фильтры</h3>
              <a className='menu__left-link' href="">Сбросить</a>
            </ul>
            <p className='menu__subtext'>Всего 55 товаров</p>
            <p className='menu__next-text'>Цена, тенге</p>
            <Slider
              range
              min={0}
              max={70000}
              value={value}
              onChange={setValue}
            />
            <ul className='menu__list'>
              <span className='menu__sena'>{value[0]}</span>
              <span className='menu__sena'>{value[1]}</span>
            </ul>
          </div>
          <div>
            {
              data.map((item, i) => (
                <div className='menu__item' key={i}>
                  <div className='acc__top' onClick={() => toggle(i)}>
                    <h2 className='menu__text'>{item.title}</h2>
                    <span className='menu__icon'>
                      {selected === i ? <img className='menu__add' src={Sub} alt="Sub" /> : <img className='menu__add' src={Add} alt="Add" />}
                    </span>
                  </div>
                  <div className={selected === i ? 'acc__bottom show' : 'acc__bottom'}>
                    <form action="" >
                      <div style={{display:"flex", marginTop:"10px"}}>
                        <input type="checkbox" />
                        <p className='menu__checkbox-text' style={{paddingLeft:"5px"}}>{item.text1}</p>
                      </div>
                      <div style={{display:"flex", marginTop:"10px"}}>
                        <input type="checkbox" />
                        <p className='menu__checkbox-text' style={{paddingLeft:"5px"}}>{item.text2}</p>
                      </div>
                      <div style={{display:"flex", marginTop:"10px"}}>
                        <input type="checkbox" />
                        <p className='menu__checkbox-text' style={{paddingLeft:"5px"}}>{item.text3}</p>
                      </div>
                    </form>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div  className='hidden'>
          <ul className='hidden__bottom'>
          <div className='hidden__box'>
            <p className='hidden__subtext'>Фильтры</p>
            <ul className='hidden__list'>
              <p className='hidden__text'>Дорожки</p>
              <img style={{cursor:"pointer"}} src={burger} alt="" />
            </ul>
          </div>
          <div className='hidden__box'>
            <p className='hidden__subtext'>Сортировка</p>
            <ul className='hidden__list'>
              <p className='hidden__text'>По рейтингу</p>
              <span className='hidden__icon'><img className='hidden__add' src={Add} alt="Add" /></span>
            </ul>
          </div>
          </ul>
          <ul className='hidden__bottom'>
            <li><Newcard data={b}/></li>
            <li><Newcard data={b}/></li>
            <li><Newcard data={b}/></li>
            <li><Newcard data={b}/></li>
            <li><Newcard data={b}/></li>
            <li><Newcard data={b}/></li>
          </ul>
          <ul className='hidden__bottom'><button className='hidden__btn'>Показать еще</button></ul>
        </div>
        <div className='menu__right'>
          <h2 className='menu__right-title'>Дорожки</h2>
          <ul className='menu__right-list'>
            <li><p className='menu__right-text'>Сортировать по:</p></li>
            <li><a className='menu__link' href="">Популярности</a></li>
            <li><a className='menu__link' href="">Сначала дешевые</a></li>
            <li><a className='menu__link' href="">Сначала дорогие</a></li>
            <li><a className='menu__link' href="">По рейтингу</a></li>
          </ul>
          <ul className='menu__cards'>
            <li><NextCard data={a}/></li>
            <li><NextCard data={a}/></li>
            <li><NextCard data={a}/></li>
            <li><NextCard data={a}/></li>
            <li><NextCard data={a}/></li>
            <li><NextCard data={a}/></li>
            <li><NextCard data={a}/></li>
            <li><NextCard data={a}/></li>
            <li><NextCard data={a}/></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;