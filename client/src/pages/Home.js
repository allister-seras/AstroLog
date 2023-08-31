import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import '../App.css';
import Journal from '../components/journalForm';
import Entry from '../components/entry'

const Home = () => {
    //const {loading, error, data} = useQuery(QUERY_ME);
    const [entryVisible, setEntryVisible] = useState(false);

    const toggleEntry = () => {
      setEntryVisible(!entryVisible);
    };

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
    <main>
        <h1>Welcome to AstroLog</h1>
        <h2>Let The Stars Guide Your Story</h2>
        <div>
            <p>AstroLog is your celestial companion, where the magic of the cosmos comes to life. Dive into the world of astrology and tarot with ease. Discover your daily sun sign horoscope, receive personalized three-card tarot readings, and save these precious fortunes along with your heartfelt journal entries. AstroLog is your cosmic haven, guiding you through life's mysteries with insight and charm.</p>
        </div>
        <div>
            <h2>Zodiac Sun Signs</h2>
            <p>Zodiac sun signs are like the universe's way of giving each of us a unique personality blueprint. Picture them as cosmic archetypes, each with its own special traits and qualities. When you were born, the position of the sun in the zodiac determined your sun sign, and that, in turn, influences your individuality. These signs, from adventurous Aries to compassionate Pisces, offer a window into your inner world, helping you understand your strengths, weaknesses, and the energies that guide your life's journey. Think of them as celestial companions, providing a touch of magic to our earthly existence.</p>
        </div>

        <div>
            <h2>The Art of Tarot</h2>
            <p>Tarot, steeped in symbolism and mysticism, offers a fascinating journey. It began as a card game in Europe and transformed into a divination tool. Tarot readers use their intuition and knowledge of card meanings to help seekers navigate life's challenges. AstroLog provides a 3 Card Spread Tarot reading on Love, Finance, and Career!</p>
        </div>
    </main>

    );
}

export default Home;