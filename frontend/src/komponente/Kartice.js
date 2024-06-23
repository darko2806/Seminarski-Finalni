import React from 'react'
import KarticeItem from './KarticeItem'
import './Kartice.css'
import lisabon from '../images/Lisabon.jpg';
import img9 from '../images/img-9.jpg';
import MonteKarlo from '../images/MonteKarlo.jpg';
import One from '../images/One.jpg';


function Kartice() {
  return (
    <div className='kartice'>
      <h1>Destinacije u PONUDI</h1>
        <div className='kartice__container'>
            <div className='kartice__wrapper'>
                <ul className='kartice__items'>
                    <KarticeItem src={img9} text='Istražite SKRIVENI vodopad duboko u Amazonskoj džungli' label='ADVENTURE' path='/sign-up' />
                    <KarticeItem src={lisabon} text='Obilazak Lisabona uz pratnju vodiča i organizovane izlete' label='Best-Seller' path='/sign-up' />
                </ul>
                <ul className='kartice__items'>
                    <KarticeItem src={MonteKarlo} text='Monte Karlo -- Formula 1 WEEKEND paket' label='NEW' path='/sign-up' />
                    <KarticeItem src={One} text='5 DANA One&Only Resort -- Deluxe paket' label='DELUXE' path='/sign-up' />
                </ul>
            </div>
        </div>
    </div>
  )
}
export default Kartice
