import React from 'react'

const Place = ({category, name}) =>{
    return (
        <div className='place round bcGreen selected'>
            <div className='smallLabel'>{category}</div>
            {name}
        </div>
    )
};

export default Place

