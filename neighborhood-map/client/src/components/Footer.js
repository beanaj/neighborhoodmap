import React from 'react'
import Place from './Place'

export class Footer extends React.Component {
    state ={
        notLoaded: ''
    };

    ensureLoaded(){
        if(this.props.reload===true){
            this.setState({notLoaded:'Oh no! There was a problem loading the places, please refresh the page.'})
        }else if(this.state.notLoaded.length>1){
            this.setState({notLoaded:''})
        }
    }

    componentDidMount(){
        this.ensureLoaded();
    }



    render() {

        return (
            <div className='round footer'>
                <div className='places'>
                    <h3>Places</h3>
                    {this.props.places.map((place) =>{
                        return(
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
                    <div className='smallLabel'>{this.state.notLoaded}</div>
                </div>
                <div className='details'>
                    <h3>Details</h3>
                    <div className='tag round bcGreen'>
                        <div className='smallLabel'>Name</div>
                        Central Camera Company
                    </div>
                    <div className='tag round bcGreen gs20'>
                        <div className='smallLabel'>Address</div>
                        230 S Wabash Ave, Chicago, IL 60604

                    </div>
                    <div className='tag round bcGreen gs40'>
                        <div className='smallLabel'>Phone</div>
                        (312) 427-5580
                    </div>
                    <div className='tag round bcGreen'>
                        <div className='smallLabel'>Rating</div>
                        7.5/10
                    </div>
                    <div className='tag round bcGreen gs80'>
                        <div className='smallLabel'>Checkins</div>
                        459
                    </div>
                    <div className='smallLabel'>Data Provided by FourSquare</div>
                </div>
            </div>
        )
    }

}

export default Footer