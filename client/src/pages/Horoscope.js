import react, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import axios from "axios";

import Cards from '../components/cards';

const Horoscope = () => {
    // set initial form state
    const [horoscopeData, setHoroscopeData] = useState({ prediction_date: '', prediction: {
      emotions: '',
      health: '',
      luck: '',
      personal_life: '',
      profession: '',
      travel: ''
    } });
    // api info imported from dotenv
    const userID = process.env.REACT_APP_USER_ID;
    const apiKey = process.env.REACT_APP_API_KEY;
    // USER DATA HERE (will pull from User model)
    const zodiacName = "aries";
    const timezone = -8.0;
    // defining horoscope data function
    const dailyHoroData = function(zodiacName, timezone)  {
        // defining function
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
            const prediction = {
              emotions: response.data.prediction.emotions,
              health: response.data.prediction.health,
              luck: response.data.prediction.luck,
              personal_life: response.data.prediction.personal_life,
              profession: response.data.prediction.profession,
              travel: response.data.prediction.travel
            };
            setHoroscopeData({ prediction_date: date, prediction: prediction });
          });
        };
        // calling function
        getResponse(zodiacName, timezone);
    };
    // calling horoscope function (empty array so it runs once)
    useEffect(() => {
        dailyHoroData(zodiacName, timezone);
    }, []);
    // logging information to console only after state change
    useEffect(() => {
      console.log(horoscopeData);
    }, [horoscopeData]);
    

    return (
      <section>
        <div>
          <h1>Prediction</h1>
            <h3>Date: {horoscopeData.prediction_date}</h3>
              <h2>Emotions</h2>
                <p>{horoscopeData.prediction.emotions}</p>
              <h2>Health</h2>
                <p>{horoscopeData.prediction.health}</p>
              <h2>Luck</h2>
                <p>{horoscopeData.prediction.luck}</p>
              <h2>Personal Life</h2>
                <p>{horoscopeData.prediction.personal_life}</p>
              <h2>Profession</h2>
                <p>{horoscopeData.prediction.profession}</p>
              <h2>Travel</h2>
                <p>{horoscopeData.prediction.travel}</p>
        </div>
        {/* save button */}
      </section>
    );
};

export default Horoscope;