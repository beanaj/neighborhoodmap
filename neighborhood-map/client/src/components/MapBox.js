import React from 'react'
import Map from './Map'
import {GoogleApiWrapper} from 'google-maps-react';

export class MapBox extends React.Component {
    render() {
        if(!this.props.loaded){
            return (
                <div className="mapBox">
                Map Loading...
            </div>
            )
        }
        return(
            <div className="mapBox">
                <Map google={this.props.google}
                     places={this.props.places}
                />
            </div>
        )

    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBrI5baRTyxIJ08WltT2tACFvx4fpGIOIk'
})(MapBox)