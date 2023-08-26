import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
//import { QUERY_USER } from '../utils/queries';

import '../App.css';
import TarotCard from '../components/TarotCard';
import HoroscopeCard from '../components/horoscopeCard'

const Home = () => {
    //TODO Fetch user data
    var body = [{ text: "text", card: "card", tarot: "tarot", horoscope: "horoscope"},
    { text: "text", card: "card", tarot: "tarot", horoscope: "horoscope"}];
    
    return (
    <div>
        <h1>Welcome to AstroLog</h1>
        <h2>Let The Stars Guide Your Story</h2>
        <div>
            <h2>horoscope</h2>
            {body.map((section, index) => {
                return <HoroscopeCard 
                    key={index}
                    text={section.text}
                    horoscope={section.horoscope}
                    />
            })}
        </div>
        <div>
            <h2>tarot</h2>
            {body.map((section, index) => {
                return <TarotCard
                    key={index}
                    card={section.card}
                    tarot={section.tarot}
                />
            })}
        </div>
    </div>
    );
}

export default Home;