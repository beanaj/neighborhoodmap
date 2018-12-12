import React from 'react'
import Map from './Map'
import {GoogleApiWrapper} from 'google-maps-react';

export class MapBox extends React.Component {

    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }

        if(!this.props.loaded){
            return <div>Loading...</div>
        }
        return(
            <div className="mapBox">
            <div style={style}>
                <Map google={this.props.google}
                />
            </div>
            </div>
        )

    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAqs_Df573M-Hie8uCgehN_bkaHIa1_Z5s'
})(MapBox)