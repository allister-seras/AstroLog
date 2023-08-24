import react, { useEfect, useEffect } from 'react'
import { useQuery } from '@apollo/client';
//import { QUERY_USER } from '../../../server/utils/queries';

import Cards from '../components/cards';

const Home = () => {
    //TODO Fetch user data
    const data = [];
    return (
    <div>
        {/* user welcome */}
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