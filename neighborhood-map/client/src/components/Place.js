import React from 'react'

const Place = ({category, name, style}) =>{
    return (
        <div className={style}>
                <div className='smallLabel'>{category}</div>
                {name}
        </div>
    )
};

export default Place

