import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
//import { QUERY_USER } from '../utils/queries';

import '../App.css';
import Cards from '../components/cards';

const Home = () => {
    //TODO Fetch user data
    var body = [{ text: "text", card: "card", tarot: "tarot", horoscope: "horoscope"},
    { text: "text", card: "card", tarot: "tarot", horoscope: "horoscope"}];
    
    return (
    <div>
        {/* user welcome */}
        <div>
            {body.map((section, index) => {
                return <Cards 
                    key={index}
                    text={section.text}
                    card={section.card}
                    tarot={section.tarot}
                    horoscope={section.horoscope}
                    />
            })}
        </div>
        {/*add new button*/}
    </div>
    );
}

export default Home;