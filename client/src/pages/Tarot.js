import react, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import axios from "axios";

import Cards from '../components/cards';

const Tarot = () => {
    // set initial form state
    const [tarotRead, setTarotRead] = useState({ reading: ''});
    // api info imported from dotenv
    const userID = process.env.REACT_APP_USER_ID;
    const apiKey = process.env.REACT_APP_API_KEY;
    // ENTER TAROT PULLS HERE (will use random number generator for this)
    const love = 18;
    const career = 2;
    const finance = 54;
    // defining tarot data function
    const tarotData = function(love, career, finance)  {
    
      const getResponse = (love, career, finance) => {
        const url = "https://json.astrologyapi.com/v1/tarot_predictions";
        const auth = "Basic" + " " + btoa(userID + ":" + apiKey);
        axios.post(url, {
          love: love,
          career: career,
          finance: finance
          }, {
          headers: {
            Authorization: auth
          }
          }).then((response) => {
          const reading = response.data;
          setTarotRead(reading);
        });
      };
    
      getResponse(love, career, finance);
    
    };
    
    // calling tarot function (empty array so it runs once)
    useEffect(() => {
      tarotData(love, career, finance);
    }, []);

    // console.log after state change from tarot function
    useEffect(() => {
      console.log(tarotRead);
    }, [tarotRead]);

    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default Tarot;