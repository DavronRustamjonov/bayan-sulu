import './Glavnaya.css';
import Carpet1 from '/carpet1.svg';
import Carpet2 from '/carpet2.svg';
import TangeIcon from '/tange_icon.svg';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Card from '../Card/Card';
import kover from '/kover.png';
import Nextkover from '/kover2.svg';
import Threekover from '/kover3.svg';

function Glavnaya() {
  const cardData = {
    img: kover,
    text: 'Новинка',
    title: 'Aster Q893A LVIZON LVIZON',
    size: '60x100',
    country: 'Казахстан',
    price: '160.000 ',
    nextprice: '13.333',
  };

  const discountCardData = {
    img: kover,
    text: ' %20 ',
    title: 'Aster Q893A LVIZON LVIZON',
    size: '60x100',
    country: 'Казахстан',
    price: '160.000 ',
    nextprice: '13.333',
  };

  const swiperSlides = [
    { src: kover, alt: 'Carpet 1' },
    { src: Nextkover, alt: 'Carpet 2' },
    { src: Threekover, alt: 'Carpet 3' },
  ];

  const renderSwiperSlides = () =>
    swiperSlides.map((slide, index) => (
      <SwiperSlide key={index} className="swiper-slide">
        <img src={slide.src} alt={slide.alt} />
      </SwiperSlide>
    ));

  return (
    <div>
      <div className="glavnaya">
        <div className="container glavnaya-container">
          <div className="glavnaya-left">
            <p className="glavnaya-lead">Новая коллекция ковров Venetta</p>
            <button className="glavnaya-btn">Смотреть все</button>
          </div>
          <div className="glavnaya-right">
            <ul className="glavnaya-list">
              <li className="glavnaya-item">
                <img src={Carpet1} alt="Carpet 1" />
              </li>
              <li className="glavnaya-item">
                <img src={Carpet2} alt="Carpet 2" />
              </li>
            </ul>
            <span className="glavnaya-span">
              160.000 <img src={TangeIcon} alt="Tange Icon" />
            </span>
          </div>
        </div>
        <div className="container glavnaya-swipper">
          <p className="glavnaya-swipper-lead">Новая коллекция ковров Venetta</p>
          <Swiper
            style={{ padding: '50px' }}
            slidesPerView={1}
            spaceBetween={80}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {renderSwiperSlides()}
          </Swiper>
          <ul  style={{display:"grid",justifyContent:"center" ,width:"100%"}}>
              <li style={{width:"100%"}}>  <button style={{width:"100%",padding:"0 70px"}} className="glavnaya-btn">Смотреть все</button></li>
            </ul>
       
        </div>
      </div>

      <div className="middle">
        <div className="middle-top">
          <div className="container middle-top-container">
            <ul style={{ justifyContent: 'left' }}>
              <p className="middle-lead">Новинки</p>
              <a href="#" className="middle-link">Bce новинки</a>
            </ul>
            <Swiper
              slidesPerView={1.2}
              spaceBetween={10}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1.6, spaceBetween: 19 },
                768: { slidesPerView: 4, spaceBetween:19 },
                1440: { slidesPerView: 4, spaceBetween: 19 },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >

              {[...Array(8)].map((_, index) => (
                <SwiperSlide key={index}>
                  <Card data={cardData} />
                </SwiperSlide>
              ))}
            </Swiper>
            
            <ul style={{ justifyContent: 'left' }} className="middle-bottom-list">
              <p className="middle-lead">Скидки</p>
              <a href="#" className="middle-link">Все скидки</a>
            </ul>
          </div>
        </div>

        <div className="middle-bottom">
          <div className="container middle-bottom-container">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={10}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 19 },
                768: { slidesPerView: 4, spaceBetween: 19 },
                1440: { slidesPerView: 4, spaceBetween: 19 },
              }}
              modules={[Pagination]}
              className="nextMySwiper"
            >
              {[...Array(9)].map((_, index) => (
                <SwiperSlide key={index}>
                  <Card data={discountCardData} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Glavnaya;
