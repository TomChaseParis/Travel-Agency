import React from 'react';
import './DestinationsStyles.css';

import BoraBora from '../../assets/borabora.jpeg';
import BoraBora2 from '../../assets/borabora2.jpeg';
import Maldives from '../../assets/maldives.jpeg';
import Maldives2 from '../../assets/borabora.jpeg';
import KeyWest from '../../assets/keywest.jpeg';


function Destinations() {
  return (
    <div className='destinations'>
        <div className="container">
            <h1>All-Inclusive Resorts</h1>
            <p>On the Caribbean's Paradise Beach</p>
            <div className="img-container">
                <img className='span-3 image-grid-row-2' src={BoraBora} alt="/" />
                <img src={BoraBora2} alt="/" />
                <img src={Maldives} alt="/" />
                <img src={Maldives2} alt="/" />
                <img src={KeyWest} alt="/" />

            </div>
        </div>
    </div>
  )
}

export default Destinations;
