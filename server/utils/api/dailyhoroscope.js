const env = require('../environment');
const request = require("request");
const userID = env.USER_ID;
const apiKey = env.API_KEY;
const baseUrl = "https://json.astrologyapi.com/v1/";

// ENTER SUN SIGN AND TIME ZONE HERE
const zodiacName = "aries";
const timezone = -8.0;

const resource = "sun_sign_prediction/daily/" + zodiacName;

const packageDailyHoroData = (zodiacName, timezone) => {
  return {
    zodiacName: zodiacName,
    timezone: timezone,
  };
};

const getResponse = (resource, data, callback) => {
  const url = baseUrl + resource;
  const auth = "Basic " + new Buffer(userID + ":" + apiKey).toString("base64");
  request(
    {
      url: url,
      headers: {
        Authorization: auth,
      },
      method: "POST",
      form: data,
    },
    function (err, res, body) {
      if (!err) {
        if (typeof callback === "function") {
          return callback(null, body);
        }
      }
      if (typeof callback === "function") {
        return callback(err);
      }
      console.log("callback not provided properly");
    }
  );
};

const dailyHoroCall = function(resource, zodiacName, timezone, callback) {
  const data = packageDailyHoroData(zodiacName, timezone);
  return getResponse(resource, data, callback);
};

const horoscopeReading = {
  prediction_date: "",
  prediction: {
    personal_life: "",
    profession: "",
    health: "",
    travel: "",
    luck: "",
    emotions: "",
  }
};

const dailyHoroData = dailyHoroCall(
  resource,
  zodiacName,
  timezone,
  function (error, result) {
    if (error) {
      console.log("Error returned!!");
    } else {
      console.log("Response has arrived from API server --");
      const object = JSON.parse(result);
      horoscopeReading.prediction_date = object.prediction_date;
      horoscopeReading.prediction.personal_life = object.prediction.personal_life;
      horoscopeReading.prediction.profession = object.prediction.profession;
      horoscopeReading.prediction.health = object.prediction.health;
      horoscopeReading.prediction.travel = object.prediction.travel;
      horoscopeReading.prediction.luck = object.prediction.luck;
      horoscopeReading.prediction.emotions = object.prediction.emotions;
      console.log(horoscopeReading);
    }
  }
);