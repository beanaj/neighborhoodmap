import React from 'react'
import ReactDOM from 'react-dom'
import mapStyle from '../styles/mapStyle'


export class Map extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            console.log('Here');
            this.loadMap()
        }
    }

    componentDidMount(){
        this.loadMap();
    }

    loadMap() {
        if (this.props && this.props.google) {
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            let zoom = 15.5;
            let lat = 41.881036;
            let lng = -87.625984;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom,
                styles: mapStyle
            });
            this.map = new maps.Map(node, mapConfig);
        }
    }

    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }
        return (
            <div style={style} ref='map'>
                Loading map here...
            </div>
        )
    }
}

export default Map