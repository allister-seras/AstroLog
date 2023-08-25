import react, { useEfect, useEffect } from 'react'
import { useQuery } from '@apollo/client';
//import { QUERY_USER } from '../../../server/utils/queries';

import '../App.css';
import Cards from '../components/cards';

const Home = () => {
    //TODO Fetch user data
    const data = [];
    return (
    <div>
        {/* user welcome */}
        <h1>Welcome to AstroLog</h1>
        <h2>Let The Stars Guide Your Story</h2>
        <div>
            {data.map((section) => {
            <Cards 
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