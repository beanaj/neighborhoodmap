import React, {Component} from 'react';
import Header from './components/Header';
import './styles/App.css';
import MapBox from "./components/MapBox";

//Constants (In our case, the list of venueIDs used by FourSquare to get the data for our Places.
// const venueIDs = [
//     ''
// ];

class App extends Component {
    state = {};

    render() {
        return (
            <div className="app">
                <Header
                    title={"IN THE LOOP"}
                />
                <MapBox/>
            </div>
        );
    }
}

export default App;
