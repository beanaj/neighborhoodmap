import React from 'react'
import ReactDOM from 'react-dom'
import mapStyle from '../styles/mapStyle'


export class Map extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.google !== this.props.google) {
            this.loadMap()
        } else if(prevProps.places !== this.props.places){
            this.fixMarkers();
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

            let zoom = 15.3;
            let lat = 41.881036;
            let lng = -87.625984;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom,
                styles: mapStyle
            });

            //Add everything that needs to be added to the map
            let almostMap = new maps.Map(node, mapConfig);
            let transitLayer = new google.maps.TransitLayer();
            transitLayer.setMap(almostMap);
            this.map = almostMap;
        }
    }

    fixMarkers(){
        const {google} = this.props;
        this.props.places.map(place =>{
            if(place.data.shown){
                let ani = {}
                if(place.data.selected){
                    ani = {};
                }
                new google.maps.Marker({
                    position: {
                        lat: place.data.coordinates.latitude,
                        lng: place.data.coordinates.longitude
                    },
                    animation: ani,
                    map: this.map,
                    title: place.data.name
                });
            }
            return place;
        })
    }

    render() {
        return (
            <div className='map' ref='map'>
                Loading map here...
            </div>
        )
    }
}

export default Map