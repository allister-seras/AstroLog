const dailyHoroData = function(zodiacName, timezone)  {
  const baseUrl = "https://json.astrologyapi.com/v1/";
  const resource = "sun_sign_prediction/daily/" + zodiacName;
  const request = require("request");
  const userID = process.env.REACT_APP_USER_ID || "625302";
  const apiKey = process.env.REACT_APP_API_KEY || "0a84ee8471d0237ad9df75e0ca8406a4";

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

  const dataFunction = function(error, result) {
    if (error) {
      console.log("Error returned!!");
    } else {
      console.log("Response has arrived from API server --");
      const object = JSON.parse(result);
      console.log(object);
    }
  };

  dailyHoroCall(
    resource,
    zodiacName,
    timezone,
    dataFunction
  );

};

module.exports = dailyHoroData;