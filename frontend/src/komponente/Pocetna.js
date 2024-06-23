import React from 'react';
import '../App.css';
import { Button } from './button';
import './Pocetna.css';


function Pocetna() {
  return (
    <div className='pocetna-container'>
      <h1>VREME JE ZA PUTOVANJA</h1>
      <p>Dosta je cekanja!</p>
      <div className="pocetna-btns">
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>ZAPOCNI AVANTURU </Button> 
      </div>
    </div>
  )
}

export default Pocetna;
