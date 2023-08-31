import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useUserContext } from '../utils/UserContext';
import { useMutation } from '@apollo/client';
import { SAVE_HOROSCOPE } from '../utils/mutations';
import HoroscopeCard from '../components/horoscopeCard'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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

    const data = useUserContext();
    
    const [userInfo, setUserInfo] = useState({zodiacName: '', timezone: ''});
    // api info imported from dotenv
    const userID = process.env.REACT_APP_USER_ID;
    const apiKey = process.env.REACT_APP_API_KEY;
    let zodiacName = userInfo.zodiacName;
    let timezone = userInfo.timezone;

    // change button value
    const [buttonValue, setButtonValue] = useState("false");

    const [ saveHoroscope, {error} ] = useMutation(SAVE_HOROSCOPE);


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

    const generateHoroscope = async(event) => {
      if (buttonValue === "false") {
        setButtonValue("true");
      }
      event.target.style.display = "none";
      dailyHoroData(zodiacName, timezone);;
      
    };

    const saveFunction = async function() {
      console.log(horoscopeData.prediction);
      try {
        const prediction = JSON.stringify(horoscopeData.prediction);
        const { data } = await saveHoroscope({
          variables: {prediction: prediction}
        });
        console.log(data);
        if (buttonValue === "true") {
          setButtonValue("false");
        }
        // clear form values
        setHoroscopeData({prediction_date: '', prediction: {
          emotions: '',
          health: '',
          luck: '',
          personal_life: '',
          profession: '',
          travel: ''
        }
        });
        // clear form values
        setUserInfo({
          zodiacName: '',
          timezone: ''
        });
        window.location.reload();
      } catch (e) {
        console.error(e);
      }
    };

    // calling horoscope function (empty array so it runs once)
    useEffect(() => {
      if (data !== undefined) {
        const {me} = data;
        console.log(me.savedHoroscope);
        setUserInfo({zodiacName: me.zodiacName, timezone: me.timezone});
      }
    }, [data]);

    useEffect(() => {
      if (userInfo.zodiacName !== '') {
        console.log(userInfo);
        dailyHoroData(zodiacName, timezone);
      }
    }, [userInfo]);

    // logging information to console only after state change
    useEffect(() => {
      console.log(horoscopeData);
    }, [horoscopeData]);
    

    return (
      <div>
        { buttonValue === "true" ? (
        <main>
          <h1>{capitalizeFirstLetter(userInfo.zodiacName)}'s Fortune</h1>
            <h3>For {horoscopeData.prediction_date}</h3>
              <section className='horoCard'>
            <HoroscopeCard title="Emotions" content={horoscopeData.prediction.emotions} />
            <HoroscopeCard title="Health" content={horoscopeData.prediction.health} />
            <HoroscopeCard title="Luck" content={horoscopeData.prediction.luck} />
            <HoroscopeCard title="Personal Life" content={horoscopeData.prediction.personal_life} />
            <HoroscopeCard title="Profession" content={horoscopeData.prediction.profession} />
            <HoroscopeCard title="Travel" content={horoscopeData.prediction.travel} />
            </section>
            <button className="m-4 p-4 btn btn-primary" onClick={saveFunction}>Save</button>
        </main>
        ) : (
          <p></p>
        )}
        { buttonValue === "false" ? (
        <div className="p-5">
          <h1>Daily Horoscope</h1>
            <p>Sun sign horoscopes are like personalized letters from the universe, offering a glimpse into the cosmic energies that shape our lives. When you generate your horoscope, you'll receive a treasure trove of insights. The stars will whisper secrets about your emotions, revealing the ebbs and flows of your heart. Your health will be illuminated, guiding you on your well-being journey. Luck will dance through the constellations, hinting at fortunate moments. Personal life will unfold like a celestial love story, and your profession will sparkle with career wisdom. As you traverse the astral pathways, even your travel plans will find their guiding stars. So, embark on this celestial adventure and let the cosmos reveal its mysteries!</p>
            <p>Our capybara cosmonauts have fetched your time and star data from your user information. Press the button below to receive your daily horoscope!</p>
          <button className="btn btn-primary" value={buttonValue} onClick={generateHoroscope}>
            Generate Reading
          </button>
        </div>
        ) : (
          <p></p>
        )}
      </div>
    );
};

export default Horoscope;