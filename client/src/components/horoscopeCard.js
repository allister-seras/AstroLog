import React from 'react';

const HoroscopeCard = (props) => {
    return (
    <div>
        <div>
            <h3>{ props.horoscope }</h3>
            <p>{ props.text }</p>
        </div>
        {/* remove button*/}
    </div>
    );
}

export default HoroscopeCard;