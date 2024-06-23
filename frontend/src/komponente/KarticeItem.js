import React from 'react'
import { Link } from 'react-router-dom'


function KarticeItem(props) {
  return (
    <>
        <li className='kartice__item'>
            <Link className='kartice__item__link' to={props.path}>
                <figure className='kartice__item__pic' data-category={props.label}>
                    <img src={props.src} alt='Slika putovanja' className='kartice__item__img'></img>
                </figure>
                <div className='kartice__item__info'>
                    <h5 className='kartice__item__text'>{props.text}</h5>
                </div>
            </Link>
        </li>

    </>
  )
}

export default KarticeItem

