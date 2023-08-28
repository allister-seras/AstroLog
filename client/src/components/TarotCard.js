import React, { useState, useEffect } from 'react';
import { QUERY_CARD } from '../utils/queries';
import { useQuery } from '@apollo/client';

const TarotCard = (props) => {
    const [cardInfo, setCardInfo] = useState({name: '', src: '', id: ''})
    const tarotId = props.id;
    
    // get card artwork (having issues making this work currently)
    const { data } = useQuery(QUERY_CARD, {
        variables: { tarotId },
    });

    const dataReturned = (data !== undefined);
    
    useEffect(() => {
        if (dataReturned) {
          const {tarotCard} = data;
          console.log(tarotCard);
          setCardInfo({name: tarotCard.tarotName, src: tarotCard.src, id: tarotCard.tarotId});
        }
    }, [data]);

    useEffect(() => {
        console.log(cardInfo);
    }, [cardInfo]);
    

    return (
    <div>
        {dataReturned ? (
        <div>
            <h3>{ cardInfo.name }</h3>
            <img src={cardInfo.src} />
        </div>
        ) : (
            <p>Loading data...</p>
        )}
    </div>
    );
}

export default TarotCard;