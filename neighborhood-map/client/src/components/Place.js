import React from 'react'

class Place extends React.Component {

    handleSelection = () => {
       this.props.changeSelected(this.props.id);
    };

    render(){
        return (
            <div className={`${this.props.style} placeListItem`} onClick={this.handleSelection}>
                <div className='smallLabel'>{this.props.category}</div>
                {this.props.name}
            </div>
        )
    }
};

export default Place

