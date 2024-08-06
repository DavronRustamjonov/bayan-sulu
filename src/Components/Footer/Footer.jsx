import React, { useState } from 'react';

import Add from '/Add.png';
import Sub from '/Sub.png';

import './Footer.css'
import Phone  from '/footer_phone.svg'
import Info  from '/footer_info.svg'
import Email from '/footer_email_icon.svg' 
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  
  
  const data = [
    {
      title: "Каталог товаров",
      text1: "lorem",
      text2: "lorem",
      text3: "lorem"
    },
    {
      title: "Личный кабинет",
      text1: "lorem",
      text2: "lorem",
      text3: "lorem"
    },
    {
      title: "Центр поддержки",
      text1: "lorem",
      text2: "lorem",
      text3: "lorem"
    },
    {
      title: "Помощь и контакты",
      text1: "lorem",
      text2: "lorem",
      text3: "lorem"
    }
  ];
  return (
    <div className='footer'>
      <div className='container footer-container'>
          <div className='footer-wrapper footer-mobile'>
            <ul className='footer-list'>
<li className='footer-item'><p className='footer-lead'>Каталог товаров</p></li>
<li className='footer-item'><a className='footer-link' href="#">Ковры</a></li>
<li className='footer-item'><a className='footer-link' href="#">Коврики</a></li>
<li className='footer-item'><a className='footer-link' href="#">Дорожки</a></li>
<li className='footer-item'><a className='footer-link' href="#">Для ванной</a></li>
<li className='footer-item'><a className='footer-link' href="#">Особенные ковры</a></li>
            </ul>
          </div>
          <div className='footer-wrapper footer-mobile'>
           <ul className="footer-list">
            <li className='footer-item'><p className='footer-lead'>Личный кабинет</p></li>
            <li className='footer-item'>
             <a className='footer-link' href="#">Личный кабинет</a>
            </li>
            <li className='footer-item'>
            <a className='footer-link' href="#">Мои заказы</a>
            </li>
            <li className='footer-item'>
            <a className='footer-link' href="#">Избранное</a>
            </li>
           </ul>
          </div>

          <div className='footer-wrapper footer-mobile'>
              <ul className='footer-list'>
                <li className='footer-item'>
                    <p className='footer-lead'>Центр поддержки</p>
                </li>
                <li className='footer-item'>
                <a className='footer-link' href="#">Контакты</a>
                </li>
                <li className='footer-item'>
                <a className='footer-link' href="#">Доставка</a>
                </li>
                <li className='footer-item'>
                    <a className='footer-link' href="#">Возвраты</a>
                </li>
              </ul>
          </div>

          <div className='footer-wrapper footer-mobile'>
            <ul className='footer-list'>
                <li className='footer-item'>
                    <p className='footer-lead'>Помощь и контакты</p>
                </li>
              <li className='footer-item'>
                <ul style={{justifyContent:"left",alignItems:"center"}}>
              <li style={{paddingTop:"8px",paddingRight:"5px"}}><a href=""><img src={Phone} alt=" phone icon " /></a></li>
              <li><a className='footer-link' href="#" style={{color:"#618C78"}}>+7 775 657 66 76</a></li>
              </ul>
        </li>
              <li className='footer-item'>
                <ul style={{alignItems:"center",justifyContent:"left"}}>
                <li style={{paddingTop:"8px",paddingRight:"5px"}}><a href=""><img src={Info} alt="info icon "/></a></li>
                <li><a className='footer-link' href="#" style={{color:"#618C78"}}>info@kilem.kz</a></li>
                </ul>
              </li>
              <li className='footer-item'>
               <ul style={{gap:"10px",justifyContent:"left" }}>
                <li><a target="_blank" rel="noopener noreferrer" href="https://t.me/davron_rustamjonov"><WhatsAppIcon className='footer-bottom-icon' /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://t.me/davron_rustamjonov"><InstagramIcon
                className='footer-bottom-icon'
                /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://t.me/davron_rustamjonov"><FacebookIcon
                className='footer-bottom-icon'
                /></a></li>
               </ul>
              </li>

            </ul>
          </div>
        <div className='footer-wrapper'>
        <div>
            {
              data.map((item, i) => (
                <div  key={i}>
                  <div  onClick={() => toggle(i)} style={{display:"flex",alignItems:"center",justifyContent:"space-between",fontFamily:"Ubuntu",marginTop:"20px"}}>
                    <h2 style={{lineHeight:"14px",fontSize:"14px"}}>{item.title}</h2>
                    <span className='menu__icon'>
                      {selected === i ? <img className='menu__add' src={Sub} alt="Sub" /> : <img className='menu__add' src={Add} alt="Add" />}
                    </span>
                  </div>
                  <div className={selected === i ? 'acc__bottom show' : 'acc__bottom'}>
                    <form action="" style={{paddingLeft:"20px"}} >
                      <div style={{display:"flex", marginTop:"10px"}}>
                        <input type="checkbox" />
                        <p  style={{paddingLeft:"5px"}}>{item.text1}</p>
                      </div>
                      <div style={{display:"flex", marginTop:"10px"}}>
                        <input type="checkbox" />
                        <p  style={{paddingLeft:"5px"}}>{item.text2}</p>
                      </div>
                      <div style={{display:"flex", marginTop:"10px"}}>
                        <input type="checkbox" />
                        <p style={{paddingLeft:"5px"}}>{item.text3}</p>
                      </div>
                    </form>
                  </div>
                </div>
              ))
            }
          </div>
        </div>


          <div className='footer-wrapper'>
          <ul className="footer-list">
            <li className="footer-item">
                <p className='footer-lead'>Новостная рассылка</p>
            </li>
            <li className="footer-item">
                <p className='footer-text'>
                Подпишитесь, чтобы всегда 
                быть в курсе наших новый акций
                </p>
            </li>
            <li className="footer-item">
                <form action="#">
                    <div style={{display:"flex"}}><input  type="email" placeholder='Ваш email' style={{borderRadius:"10px 0px 0px 10px" , paddingLeft:"22px",border:"none",background:"#FFFFFF"}}/><img style={{background:"#618C78",padding:"15px",borderRadius:"0px 10px 10px 0px"}} src={Email} alt="footer email icon " /></div>
                </form>
            </li>
          </ul>
          </div>
      </div>
    </div>
  )
}
export default Footer
