import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import '../App.css';
import TarotCard from '../components/TarotCard';
import HoroscopeCard from '../components/horoscopeCard'
import Journal from '../components/journal';

const Home = () => {
    //const {loading, error, data} = useQuery(QUERY_ME);

    // TODO finish
    const newEntry = (event) => {
        event.preventDefault();
        // tab to create new entry
    }

    const loading = false;
    const error = false;
    const data = [{
        date: "1/1/1900",
        entry: "Lorum ipsum ladmordious inmegous",
        tarot: "tarot",
        prediction: "stuff"
    },
    {
        date: "1/1/1900",
        entry: "Lorum ipsum ladmordious inmegous",
        tarot: "tarot",
        prediction: "stuff"
    }];

    if (loading) {
        <h1>Loading...</h1>
    }

    if (error) {
        return (<h1>Please login!</h1>)
    }

    return (
    <div>
        <h1>Welcome to AstroLog</h1>
        <h2>Let The Stars Guide Your Story</h2>
        <div>
            {data.map((section, index) => {
                return( <Journal
                    key={index}
                    date={section?.date}
                    entry={section?.entry}
                    tarot={section?.tarot}
                    prediction={section?.prediction}
                />)
            })}
        </div>

        <button onClick={newEntry}></button>
    </div>
    );
}

export default Home;