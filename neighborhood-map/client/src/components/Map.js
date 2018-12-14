import React from 'react'
import ReactDOM from 'react-dom'
import mapStyle from '../styles/mapStyle'
import utility from '../utilities/utility'

export class Map extends React.Component {
    state = {
        markers:[],
        lastSelected:''
    };
    componentDidUpdate(prevProps) {
        if (prevProps.google !== this.props.google) {
            this.loadMap()
        }

        if(prevProps.places !== this.props.places){
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
        const map = this.map;
        //Get the existing markers IDS
        let markerIDs = {};
        this.state.markers.map(marker => markerIDs[marker.id]=true);
        //Get the existing places ids
        let placeIDs = this.props.places.map(place => place.data.id);
        //Get existing places data
        let placeByID = {};
        this.props.places.map(place => placeByID[place.data.id]=place.data);
        //Get the shown places ids
        let shownPlace = {};
        this.props.places.map(place => {
            if(place.data.shown){
               shownPlace[place.data.id]=place.data;
            }
            return place;
        });
        //Get the ID of the selected place
        let selectedID = '';
        this.props.places.forEach(place => {
            if(place.data.selected===true){
                selectedID = place.data.id;
            }
        });

        //Make sure any existing places that do not have existing markers get them
        const forgottenOnes = [];
        placeIDs.forEach(placeID=>{
            if(!markerIDs[placeID]){
                forgottenOnes.push(placeID);
            }
        });
        //Don't forget to keep track of the new markers
        const rememberedOnes = [];
        forgottenOnes.forEach(id =>{
            var contentString = '';
            if(placeByID[id].hours[0].is_open_now){
                contentString = `<p style="color:black">Come on in, we are open now!</p>}`;
            }else{
                contentString = `<p style="color:black">Try again tomorrow, we are closed right now.</p>`;
            }


            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            let marker = new google.maps.Marker({
                position: {
                    lat: placeByID[id].coordinates.latitude,
                    lng: placeByID[id].coordinates.longitude
                },
                map: map,
                title: placeByID[id].name
            });

            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });

            utility.getColorIcon(placeByID[id].placesStyle, marker, placeByID[id].selected);

            rememberedOnes.push({
                id:id,
                marker:marker
            });
        });

        //Combine the old and the new markers
        const existingMarkers = this.state.markers.concat(rememberedOnes);
        //Make sure any shown places are marked
        //Make sure any not show places are hidden
        //Make sure the selected place bounces
        existingMarkers.forEach(markerObj =>{
                if(!shownPlace[markerObj.id]){
                    markerObj.marker.setMap(null);
                }
                if(shownPlace[markerObj.id]&&markerObj.marker.map===null){
                    markerObj.marker.setMap(map);
                    markerObj.marker.setAnimation({});
                }
                if(markerObj.id===selectedID){
                    markerObj.marker.setAnimation(google.maps.Animation.BOUNCE);
                }
                if(markerObj.id===this.state.lastSelected){

                    markerObj.marker.setAnimation({});
                }
            }
        );

        this.setState({markers: existingMarkers});
        this.setState({lastSelected: selectedID});
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