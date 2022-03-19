import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,population,flags,languages, area } = props.country;
    return (
        <div className='country'>
            <h3>Country Name: {name.common} </h3>
            <p>Area: {area} </p>
            <p>Population: {population} </p>
            <p>Language: {languages ? Object.values(languages)[0] : 'Not found'} </p>
            <img src={flags.png} alt="" />
        </div>
    )
};

export default Country;