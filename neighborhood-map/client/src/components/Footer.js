import React from 'react'
import Place from './Place'
import SelectedPlace from './SelectedPlace'

export class Footer extends React.Component {
    state = {
        notLoaded: ''
    };

    ensureLoaded() {
        if (this.props.reload === true) {
            this.setState({notLoaded: 'Oh no! There was a problem loading the places, please refresh the page.'})
        } else if (this.state.notLoaded.length > 1) {
            this.setState({notLoaded: ''})
        }
    }

    componentDidMount() {
        this.ensureLoaded();
    }


    render() {

        return (
            <div className='round footer'>
                <div className='places'>
                    <h3>Places</h3>
                    {this.props.places.map((place) => {
                        return (
                            <Place
                                key={place.data.id}
                                id={place.data.id}
                                style={place.data.placesStyle}
                                category={place.data.category}
                                name={place.data.name}
                                changeSelected={this.props.changeSelected}
                            />
                        )
                    })
                    }
                    {this.props.reload ? (<div className='tag loadMore round'><a href=".">LOAD MORE</a></div>): ''}
                </div>

                {!this.props.selectedPlace.initial ? (
                    <SelectedPlace
                        key={this.props.selectedPlace.data.id}
                        place={this.props.selectedPlace.data}
                    />
                ) : (<div className='details'>
                        <h3>Details</h3><p>Select a Place to get started!</p></div>
                )}

            </div>
        )
    }

}

export default Footer