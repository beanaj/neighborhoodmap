import React, {Component} from 'react';
import Header from './components/Header';
import './styles/App.css';
import MapBox from './components/MapBox';
import Footer from './components/Footer';
import FourSquareAPI from './api/FourSquareAPI'
//Import the venue ids and categories I selected for the project
import venues from './data/venues'

class App extends Component {
    state = {
        places:[]
    };

    async initializeVenuesFromFourSquare(){
        //batch the requests into 3 requests
        let fq = new FourSquareAPI(venues);
        try{
            let data = await fq.getVenueData();
            console.log('pass');
            console.log(data)
        }catch (e) {
            console.log(`Fail ${e}`);
        }
    }

    componentDidMount(){
        //Initialize the data for the venues
        this.initializeVenuesFromFourSquare();
    }

    render() {
        return (
            <div className="app">
                <Header
                    title={"IN THE LOOP"}
                />
                <MapBox/>
                <Footer
                    places={this.state.places}
                />
            </div>
        );
    }
}

export default App;
