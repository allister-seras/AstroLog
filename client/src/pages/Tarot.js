import react, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import axios from "axios";

import Cards from '../components/cards';

const Tarot = () => {
    // set initial state of tarot cards
    const [tarotCards, setTarotCards] = useState({ loveCard: '', careerCard: '', financeCard: ''});
    // set initial state of card reads
    const [tarotRead, setTarotRead] = useState({ love: '', career: '', finance: ''});
    // api info imported from dotenv
    const userID = process.env.REACT_APP_USER_ID;
    const apiKey = process.env.REACT_APP_API_KEY;

    // to be called on button click
    const handleCardPull = (event) => {
      const { id } = event.target;
      const pullCard = function() {
        // define random number function
        const randomNumber = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // call function with numbers between 1 and 78
        return randomNumber(1,78);
      };
      // generates random number
      const number = pullCard();
      // checks which category of card to update with random number
      if (id === "love") {
        setTarotCards({...tarotCards, loveCard: number});
        event.target.style.display = "none";
      };
      if (id === "career") {
        setTarotCards({...tarotCards, careerCard: number});
        event.target.style.display = "none";
      };
      if (id === "finance") {
        setTarotCards({...tarotCards, financeCard: number});
        event.target.style.display = "none";
      };
    };
    
    // Cards randomly generated by buttons to be passed through the API
    const love = tarotCards.loveCard;
    const career = tarotCards.careerCard;
    const finance = tarotCards.financeCard;

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

    // conditional to check if all cards have been pulled
    const checkAllCards = (love && career && finance !== "");

    // calling tarot function (empty array so it runs once)
    useEffect(() => {
      console.log(tarotCards);
      if (checkAllCards) {
      tarotData(love, career, finance);
      };
    }, [tarotCards]);

    // logging information to console only after state change
    useEffect(() => {
      console.log(tarotRead);
    }, [tarotRead]);

  return (
      <div>
      {checkAllCards ? (
        // if all cards have been pulled render this
        <div>
          <h1>Love</h1>
          <p>{tarotRead.love}</p>
          <h1>Career</h1>
          <p>{tarotRead.career}</p>
          <h1>Finance</h1>
          <p>{tarotRead.finance}</p>
        </div>
          ) : (
        // if not all cards have been pulled render this
        <div>
            <h1>Card Selection</h1>
            <p>Click the buttons below to select tarot cards for each category. Once all three have been selected we will display your reading!</p>
            <button id="love" onClick={handleCardPull}>
              Love
            </button>
            <button id="career" onClick={handleCardPull}>
              Career
            </button>
            <button id="finance" onClick={handleCardPull}>
              Finance
            </button>
        </div>
    )};
    </div>
  )
};

export default Tarot;