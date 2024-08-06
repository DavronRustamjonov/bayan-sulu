import React from 'react'
import { HeartFilled, StarFilled } from '@ant-design/icons'
import tenge from '/tenge.svg'
import tengewhite from '/tengewhite.svg'

export default function Card({data}) {
  return (
    <div className='card'>
        <div className='container card__container'>
            <ul className='card__list'>
                <span className='card__wrap'>
                    {data.text}
                </span>
                <HeartFilled className='heart' />
            </ul>
            <ul className='card__img'><li><img className='card__img' src={data.img} alt="" /></li></ul>
            <h3 className='card__title'>{data.title}</h3>
            <p className='card__subtext'>Размер:{data.size}</p>
            <p className='card__subtext'>Производитель:{data.country}</p>
            <ul>
                <li style={{marginLeft:"20px", marginTop:"8px", listStyle:"none"}}>
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                </li>
            </ul>
            <ul className='card__a' style={{display:"flex", alignItems:"center"}}>
                <li className='card__b' style={{marginLeft:"20px"}}>
                    <p className='card__text'>Цена</p>
                    <span className='card__wrapper'>
                        <li><p className='card__price'>{data.price}</p></li>
                        <li><img style={{width:"9px",height:"12px"}} src={tenge} alt="tenge" /></li>
                    </span>
                </li>
                <li className='card__b' style={{marginLeft:"15px"}}>
                    <p className='card__text'>В рассрочку</p>
                    <div className='card__wrapper'>
                        <span style={{background:"#618C78",display:"flex", padding:"0px 7px", alignItems:"center",marginLeft:"4px"}}>
                            <li><p className='card__color-text'>{data.nextprice}</p></li>
                            <li><img style={{width:"8px",height:"10px"}} src={tengewhite} alt="tenge" /></li>
                        </span>
                        <p className='card__btext' style={{marginTop:"0",}}>х 12 мес</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}