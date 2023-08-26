import React, { useEffect } from 'react';

const TarotCard = (props) => {
    return (
    <div>
        <div>
            <h3>{ props.tarot }</h3>
            <img src={ props.card } />
        </div>
        {/* remove button*/}
    </div>
    );
}

export default TarotCard;