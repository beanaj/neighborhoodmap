import React from 'react'
import Map from './Map'
import {GoogleApiWrapper} from 'google-maps-react';

export class MapBox extends React.Component {
    render() {
        if(!this.props.loaded){
            return <div>Loading...</div>
        }
        return(
            <div className="mapBox">
                <Map google={this.props.google}
                />
            </div>
        )

    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAqs_Df573M-Hie8uCgehN_bkaHIa1_Z5s'
})(MapBox)