import React from 'react'
import { HeartFilled} from '@ant-design/icons'
import tenge from '/tenge.svg'
import tengegreen from '/tengegreen.svg'

export default function Newcard({data}) {
  return (
    <div className='newcard'>
        <div className='container newcard__container'>
            <ul className='newcard__toplist'>
                <span className='newcard__wrap'>
                    {data.text}
                </span>
                <HeartFilled className='heart'/>
            </ul>
            <ul className='newcard__img'><li><img className='newcard__img' src={data.img} alt=""/></li></ul>
            <ul style={{marginTop:"18px"}}>
                <h5 className='newcard__title'>{data.name}</h5>
                <h5 className='newcard__title'>Размер:{data.size}</h5>
                <h5 className='newcard__title'>{data.country}</h5>
            </ul>
            <ul className='newcard__list'>
                <p className='newcard__text'>Цена</p>
                <li style={{display:"flex",alignItems:"center"}}>
                    <p className='newcard__text' style={{color:"#1d1d1d"}}>{data.price}</p>
                    <img style={{width:"7px", height:"9px"}} src={tenge} alt="" />
                </li>
            </ul>
            <ul className='newcard__list'>
                <p className='newcard__text'>В рассрочку</p>
                <span style={{display:"flex", alignItems:"center"}}>
                    <p style={{color:"#618C78"}} className='newcard__text'>{data.nextprice}</p>
                    <img style={{width:"7px", height:"9px"}} src={tengegreen} alt="" />
                </span>
            </ul>
        </div>
    </div>
  )
}