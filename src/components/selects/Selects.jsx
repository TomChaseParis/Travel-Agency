import React from 'react'
import './SelectsStyles.css';

import BoraBora from '../../assets/borabora.jpeg'
import BoraBora2 from '../../assets/borabora2.jpeg'
import Maldives from '../../assets/maldives.jpeg'
import Maldives2 from '../../assets/maldives2.jpeg'
import Maldives3 from '../../assets/maldives3.jpeg'
import KeyWest from '../../assets/keywest.jpeg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={BoraBora} text='Bora Bora' />
                <SelectsImg bgImg={BoraBora2} text='Emerald Bay' />
                <SelectsImg bgImg={Maldives} text='Maldives' />
                <SelectsImg bgImg={Maldives2} text='Grenada' />
                <SelectsImg bgImg={Maldives3} text='Barbados' />
                <SelectsImg bgImg={KeyWest} text='Key West' />
            </div>

        </div>
    )
}

export default Selects