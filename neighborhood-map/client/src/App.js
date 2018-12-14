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
        reload: false
    };

    async initializeVenuesFromFourSquare(){
        //batch the requests into 3 requests
        let fq = new YelpAPI(businesses);
        try{
            let data = fq.getVenueData();
            data.forEach(async(request)=>{
                //As the requests roll in, add the variables to the places state
                let individualRequest = await request;
                    individualRequest.data.placesStyle = utility.getStyleByCategory(individualRequest.data.category);
                    individualRequest.data.shown = true;
                    let newPlaces = this.state.places.concat(individualRequest);
                    this.setState({places:newPlaces});
            });
            this.setState({reload:false});
        }catch (e) {
            this.setState({reload:true});
        }
    }

    componentDidMount(){
        //Initialize the data for the venues
        this.initializeVenuesFromFourSquare();
    }

    resetCurrentSelection(){
        let newPlaces = this.state.places.map(place=>{
            if(place.data.selected===true){
                place.data.selected=false;
                place.data.placesStyle=place.data.placesStyle.replace('selected', '');
            }
            return place;
        });
        this.setState({places:newPlaces});
    }

    changeSelected = (key) =>{
        this.resetCurrentSelection()
        let newPlaces = this.state.places.map(place=>{
            if(place.data.id===key){
                place.data.selected=true;
                place.data.placesStyle = `${place.data.placesStyle} selected`;
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
                    reload={this.state.reload}
                    changeSelected={this.changeSelected}
                />
            </div>
        );
    }
}

export default App;
