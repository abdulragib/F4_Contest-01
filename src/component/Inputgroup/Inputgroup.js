import React from 'react';
import './Inputgroup.css';
import App from '../../App';

const Inputgroup = ({onChangeOne,onChangeTwo}) => {
    return(
        <div className='Input-group'>
            <input type="text" placeholder='Num 1' onChange={onChangeOne}/>
            <input type="text" placeholder='Num 2' onChange={onChangeTwo}/>
        </div>
    )
}

export default Inputgroup;