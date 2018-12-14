import React from 'react'
import utility from '../utilities/utility'

class FilterTag extends React.Component {

    changeFilter = () => {
        this.props.changeFilter(this.props.category);
    };

    render(){
        return (
            <div aria-label={`Filter Category ${this.props.category}`} className={`${utility.getStyleByCategory(this.props.category)} filterTag`} onClick={this.changeFilter}>
                {this.props.category}
            </div>
        )
    }
};

export default FilterTag

