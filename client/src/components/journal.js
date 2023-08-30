import React, { useState, useEffect } from 'react';

const Journal = (props) => {
    return (<div>
        <div>
            <h2>{`Jounal date ${props.date}`}</h2>
            <p>
                {props.entry}
            </p>
        </div>
        <div>
            <h2>Tarot</h2>
            <h3>{props.tarot}</h3>
        </div>
        <div>
            <h2>Horoscope</h2>
            <p>{props.prediction}</p>
        </div>
    </div>);
}

export default Journal;