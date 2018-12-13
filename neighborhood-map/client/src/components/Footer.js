import React from 'react'
import Place from './Place'

export class Footer extends React.Component {
    state ={}
    render() {
        return (
            <div className='round footer'>
                <div className='places'>
                    <h3>Places</h3>
                    {this.props.places.map((place) =>{
                        return(
                            <Place
                                title={place.category}
                                name={place.name}
                                />
                        )
                    })
                    }
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
                    <div className='tag round bcGreen gs60'>
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