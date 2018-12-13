import React from 'react'


export class Footer extends React.Component {
    render() {
        return (
            <div className='round footer'>
                <div className='places'>
                    <h3>Places</h3>
                    <div className='place round bcGreen'>
                        <div className='smallLabel'>Retail</div>
                        Central Camera Company
                    </div>
                    <div className='place round bcPink gs40'>
                        <div className='smallLabel'>Accomodation</div>
                        Hostelling International Chicago
                    </div>
                    <div className='place round bcRed gs40'>
                        <div className='smallLabel'>Art</div>
                        The Art Institute of Chicago
                    </div>
                    <div className='place round bcOrange gs40'>
                        <div className='smallLabel'>Activites</div>
                        Urban Kayaks
                    </div>
                    <div className='place round bcBlue gs40'>
                        <div className='smallLabel'>Bar</div>
                        London House Rooftop Bar
                    </div>
                    <div className='place round bcPurple gs40'>
                        <div className='smallLabel'>Food</div>
                        America's Dog
                    </div>
                    <div className='place round bcRed gs40'>
                        <div className='smallLabel'>Art</div>
                        Cloud Gate by Anish Kapoor
                    </div>
                    <div className='place round bcPink gs40'>
                        <div className='smallLabel'>Accomodation</div>
                        Radisson Blu Aqua Hotel, Chicago, IL
                    </div>
                    <div className='place round bcBrown gs40'>
                        <div className='smallLabel'>City Services</div>
                        Chicago Public Library
                    </div>
                    <div className='place round bcPurple gs40'>
                        <div className='smallLabel'>Food</div>
                        Giordano's
                    </div>
                    <div className='place round bcBlue gs40'>
                        <div className='smallLabel'>Bar</div>
                        Cindy's
                    </div>
                    <div className='place round bcBrown gs40'>
                        <div className='smallLabel'>City Services</div>
                        Chicago Union Station
                    </div>
                    <div className='place round bcGreen gs40'>
                        <div className='smallLabel'>Retail</div>
                        After-Words New & Used Books
                    </div>
                    <div className='place round bcGreen gs40'>
                        <div className='smallLabel'>Retail</div>
                        Barnes & Noble
                    </div>

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