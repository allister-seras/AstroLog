import React, { useEffect } from 'react';

const Cards = (props) => {
    return (
    <div>
        <div>
            <h3>{ props.tarot }</h3>
            <img src={ props.card } />
        </div>
        <div>
            <h3>{ props.horoscope }</h3>
            <p>{ props.text }</p>
        </div>
        <div></div>
        {/* remove button*/}
    </div>
    );
}

export default Cards;