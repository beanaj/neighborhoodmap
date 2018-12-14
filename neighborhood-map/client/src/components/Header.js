import React from 'react'
import FilterTag from "./FilterTag";
import icon from '../icons/filter.png'

const Header = ({title, categories, changeFilter, displayFilter, filterShow}) =>{
    return (
        <div className='header'>
            <h1>{title}</h1>
            <img onClick={displayFilter} src={icon} alt='Filter' height='42' width='42'></img>
            <div className='filter'>
                {categories.map((category)=>{
                    return (
                        <FilterTag
                            key={category}
                            category={category}
                            changeFilter={changeFilter}
                            displayFilter={displayFilter}
                            filterShow={filterShow}
                        />
                    )
                })
                }
            </div>
        </div>

    )
};

export default Header

