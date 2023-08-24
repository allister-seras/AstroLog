import react, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import axios from "axios";

import Cards from '../components/cards';

const Tarot = () => {
    // set initial form state
    const [tarotRead, setTarotRead] = useState({ love: '', career: '', finance: ''});
    // api info imported from dotenv
    const userID = process.env.REACT_APP_USER_ID;
    const apiKey = process.env.REACT_APP_API_KEY;
    // ENTER TAROT PULLS HERE (will use random number generator for this)
    const love = 18;
    const career = 2;
    const finance = 54;
    // defining tarot data function
    const tarotData = function(love, career, finance)  {
      // defining function
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
          const loveReading = response.data.love;
          const careerReading = response.data.career;
          const financeReading = response.data.finance;
          setTarotRead({love: loveReading, career: careerReading, finance: financeReading});
        });
      };
      // calling function
      getResponse(love, career, finance);
    
  };
  // calling tarot function (empty array so it runs once)
  useEffect(() => {
    tarotData(love, career, finance);
  }, []);
  // logging information to console only after state change
  useEffect(() => {
    console.log(tarotRead);
  }, [tarotRead]);

    return (
        <div>
            <h1>Love</h1>
            <p>{tarotRead.love}</p>
            <h1>Career</h1>
            <p>{tarotRead.career}</p>
            <h1>Finance</h1>
            <p>{tarotRead.finance}</p>
        </div>
    );
};

export default Tarot;