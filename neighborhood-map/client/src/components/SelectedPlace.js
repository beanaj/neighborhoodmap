import React from 'react'
import utility from '../utilities/utility'

class SelectedPlace extends React.Component {

    render() {
        return (
            <div className='details'>
                <h3>Details</h3>
                <div aria-label={`Name: ${this.props.name}`} className={`${this.props.place.placesStyle.replace('selected', '')}`}>
                    <div className='smallLabel'>Name</div>
                    {this.props.place.name}
                </div>

                <div aria-label={`Address ${this.props.place.location.display_address}`} className={`${this.props.place.placesStyle.replace('selected', '')} gs20`}>
                    <div className='smallLabel'>Address</div>
                    {`${this.props.place.location.display_address[0]}\n${this.props.place.location.display_address[1]}`}
                </div>

                <div aria-label={`Phone ${this.props.place.phone}`} className={`${this.props.place.placesStyle.replace('selected', '')} gs40`}>
                    <div className='smallLabel'>Phone</div>
                    {utility.formatPhone(this.props.place.phone)}
                </div>

                <div aria-label={`Rating ${this.props.place.rating}`} className={`${this.props.place.placesStyle.replace('selected', '')} gs60`}>
                    <div className='smallLabel'>Rating (Reviews)</div>
                    {`${this.props.place.rating}  (${this.props.place.review_count})`}
                </div>

                <div aria-label={`Website ${this.props.place.url}`} className={`${this.props.place.placesStyle.replace('selected', '')} gs80`}>
                    <div className='smallLabel'>Website</div>
                    <a href={this.props.place.url} target='_blank' rel='noopener noreferrer' alt='Link to website'>Link</a>
                </div>
                <div className='smallLabel'>Data Provided by Yelp</div>
            </div>

        )
    }
}

export default SelectedPlace

