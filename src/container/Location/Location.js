import React from 'react'
//import Bang from '../../assets/images/bang.jpeg'
import LocationNames from './LocationNames/LocationNames'
import './Location.css'

const cityData = [
    {name: 'Bengaluru', image: require('../../assets/images/bang.jpeg')},
    {name: 'Delhi/NCR', image: require('../../assets/images/del.jpg')},
    {name: 'Mumbai', image: require('../../assets/images/mum.jpg')},
    {name: 'Hyderabad', image: require('../../assets/images/hyd.jpg')},
];

const Location = (props) => {

    const boxData = cityData.map(city => (
        <LocationNames
                city={city.name}
                image={city.image}  />
    ));

    return (
        <div className="location">
            <h2>Locations of our Co-working spaces</h2>
            {boxData}
        </div>
    )
}

export default Location
