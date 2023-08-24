import react, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import axios from "axios";

import Cards from '../components/cards';

const Horoscope = () => {
    // set initial form state
    const [horoscopeData, setHoroscopeData] = useState({ prediction_date: '', prediction: ''});
    // api info imported from dotenv
    const userID = process.env.REACT_APP_USER_ID;
    const apiKey = process.env.REACT_APP_API_KEY;
    // USER DATA HERE (will pull from User model)
    const zodiacName = "aries";
    const timezone = -8.0;
    // defining horoscope data function
    const dailyHoroData = function(zodiacName, timezone)  {
    
        const getResponse = (zodiacName, timezone) => {
          const url = "https://json.astrologyapi.com/v1/sun_sign_prediction/daily/" + zodiacName;
          const auth = "Basic" + " " + btoa(userID + ":" + apiKey);
          axios.post(url, {
            zodiacName: zodiacName,
            timezone: timezone
            }, {
            headers: {
              Authorization: auth
            }
            }).then((response) => {
            const date = response.data.prediction_date;
            const prediction = response.data.prediction;
            setHoroscopeData({ prediction_date: date, prediction: prediction });
            console.log(horoscopeData);
          });
        };
        
        getResponse(zodiacName, timezone);
    };
    // calling horoscope function (empty array so it runs once)
    useEffect(() => {
        dailyHoroData(zodiacName, timezone);
    }, []);
    

    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default Horoscope;