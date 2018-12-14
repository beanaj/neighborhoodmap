import React, {Component} from 'react';
import Header from './components/Header';
import './styles/App.css';
import MapBox from './components/MapBox';
import Footer from './components/Footer';
import YelpAPI from './api/YelpAPI'
import utility from './utilities/utility'

//Import the venue ids and categories I selected for the project
import businesses from './data/businesses'

class App extends Component {
    state = {
        places:[],
        reload: false,
        selectedPlace: {
            initial:true
        }
    };

    async initializeVenuesFromFourSquare(){
        //batch the requests into 3 requests
        let fq = new YelpAPI(businesses);
        try{
            let data = fq.getVenueData();
            data.forEach(async(request)=>{
                //As the requests roll in, add the variables to the places state
                let individualRequest = await request;
                //If the request was successful, add the place
                if(individualRequest.code===200){
                    individualRequest.data.placesStyle = utility.getStyleByCategory(individualRequest.data.category);
                    individualRequest.data.shown = true;
                    let newPlaces = this.state.places.concat(individualRequest);
                    this.setState({places:newPlaces});
                }else{
                    //If some of the requests fail, add a load more button
                    this.setState({reload:true});
                }
            });
        }catch (e) {
            //If some of the requests fail, add a load more button
            this.setState({reload:true});
        }
    }

    componentDidMount(){
        //Initialize the data for the venues
        this.initializeVenuesFromFourSquare();
    }

    resetCurrentSelection(){
        let newPlaces = this.state.places.map(place=>{
            //change current selection to false
            if(place.data.selected===true){
                place.data.selected=false;
                place.data.placesStyle=place.data.placesStyle.replace('selected', '');
            }
            return place;
        });
        this.setState({places:newPlaces});
    }

    changeSelected = (key) =>{
        //Change the selected, first rest current
        this.resetCurrentSelection();
        let newPlaces = this.state.places.map(place=>{
            //if key matches, change new selected
            if(place.data.id===key){
                place.data.selected=true;
                place.data.placesStyle = `${place.data.placesStyle} selected`;
                this.setState({selectedPlace:place});
            }
            return place;
        });
        this.setState({places:newPlaces});
    }


    render() {
        return (
            <div className="app">
                <Header
                    title={"IN THE LOOP"}
                />
                <MapBox
                    places={this.state.places}
                />
                <Footer
                    places={this.state.places}
                    selectedPlace={this.state.selectedPlace}
                    reload={this.state.reload}
                    changeSelected={this.changeSelected}
                />
            </div>
        );
    }
}

export default App;
