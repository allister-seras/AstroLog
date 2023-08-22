const env = require('../environment');
const request = require("request");
var userID = env.USER_ID;
var apiKey = env.API_KEY;
const baseUrl = "https://json.astrologyapi.com/v1/";
const resource = "tarot_predictions";


const tarotArray = [
    {
        tarotId: 1,	
        tarotName: "KING OF WANDS"
    },
    {
        tarotId: 2,	
        tarotName: "QUEEN OF WANDS"
    },
    {
        tarotId: 3,	
        tarotName: "KNIGHT OF WANDS"
    },
    {
        tarotId: 4,	
        tarotName: "PAGE OF WANDS"
    },
    {
        tarotId: 5,	
        tarotName: "TEN OF WANDS"
    },
    {
        tarotId: 6,	
        tarotName: "NINE OF WANDS"
    },
    {
        tarotId: 7,	
        tarotName: "EIGHT OF WANDS"
    },
    {
        tarotId: 8,	
        tarotName: "SEVEN OF WANDS"
    },
    {
        tarotId: 9,	
        tarotName: "SIX OF WANDS"
    },
    {
        tarotId: 10,	
        tarotName: "FIVE OF WANDS"
    },
    {
        tarotId: 11,	
        tarotName: "FOUR OF WANDS"
    },
    {
        tarotId: 12,	
        tarotName: "THREE OF WANDS"
    },
    {
        tarotId: 13,	
        tarotName: "TWO OF WANDS"
    },
    {
        tarotId: 14,	
        tarotName: "ACE OF WANDS"
    },
    {
        tarotId: 15,	
        tarotName: "KING OF SWORDS"
    },
    {
        tarotId: 15,	
        tarotName: "KING OF SWORDS"
    },
    {
        tarotId: 16,	
        tarotName: "QUEEN OF SWORDS"
    },
    {
        tarotId: 17,	
        tarotName: "KNIGHT OF SWORDS"
    },
    {
        tarotId: 18,	
        tarotName: "PAGE OF SWORDS"
    },
    {
        tarotId: 19,	
        tarotName: "TEN OF SWORDS"
    },
    {
        tarotId: 20,	
        tarotName: "NINE OF SWORDS"
    },
    {
        tarotId: 21,	
        tarotName: "EIGHT OF SWORDS"
    },
    {
        tarotId: 22,	
        tarotName: "SEVEN OF SWORDS"
    },
    {
        tarotId: 23,	
        tarotName: "SIX OF SWORDS"
    },
    {
        tarotId: 24,	
        tarotName: "FIVE OF SWORDS"
    },
    {
        tarotId: 25,	
        tarotName: "FOUR OF SWORDS"
    },
    {
        tarotId: 26,	
        tarotName: "THREE OF SWORDS"
    },
    {
        tarotId: 27,	
        tarotName: "TWO OF SWORDS"
    },
    {
        tarotId: 28,	
        tarotName: "ACE OF SWORDS"
    },
    {
        tarotId: 29,	
        tarotName: "KING OF CUPS"
    },
    {
        tarotId: 30,	
        tarotName: "QUEEN OF CUPS"
    },
    {
        tarotId: 31,	
        tarotName: "KNIGHT OF CUPS"
    },
    {
        tarotId: 32,	
        tarotName: "PAGE OF CUPS"
    },
    {
        tarotId: 33,	
        tarotName: "TEN OF CUPS"
    },
    {
        tarotId: 34,	
        tarotName: "NINE OF CUPS"
    },
    {
        tarotId: 35,	
        tarotName: "EIGHT OF CUPS"
    },
    {
        tarotId: 36,	
        tarotName: "SEVEN OF CUPS"
    },
    {
        tarotId: 37,	
        tarotName: "SIX OF CUPS"
    },
    {
        tarotId: 38,	
        tarotName: "FIVE OF CUPS"
    },
    {
        tarotId: 39,	
        tarotName: "FOUR OF CUPS"
    },
    {
        tarotId: 40,	
        tarotName: "THREE OF CUPS"
    },
    {
        tarotId: 41,	
        tarotName: "TWO OF CUPS"
    },
    {
        tarotId: 42,	
        tarotName: "ACE OF CUPS"
    },
    {
        tarotId: 43,	
        tarotName: "KING OF PENTACLES"
    },
    {
        tarotId: 44,	
        tarotName: "QUEEN OF PENTACLES"
    },
    {
        tarotId: 45,	
        tarotName: "KNIGHT OF PENTACLES"
    },
    {
        tarotId: 46,	
        tarotName: "PAGE OF PENTACLES"
    },
    {
        tarotId: 47,	
        tarotName: "TEN OF PENTACLES"
    },
    {
        tarotId: 48,	
        tarotName: "NINE OF PENTACLES"
    },
    {
        tarotId: 49,	
        tarotName: "EIGHT OF PENTACLES"
    },
    {
        tarotId: 50,	
        tarotName: "SEVEN OF PENTACLES"
    },
    {
        tarotId: 51,	
        tarotName: "SIX OF PENTACLES"
    },
    {
        tarotId: 52,	
        tarotName: "FIVE OF PENTACLES"
    },
    {
        tarotId: 53,	
        tarotName: "FOUR OF PENTACLES"
    },
    {
        tarotId: 54,	
        tarotName: "THREE OF PENTACLES"
    },
    {
        tarotId: 55,	
        tarotName: "TWO OF PENTACLES"
    },
    {
        tarotId: 56,	
        tarotName: "ACE OF PENTACLES"
    },
    {
        tarotId: 57,	
        tarotName: "THE FOOL"
    },
    {
        tarotId: 58,	
        tarotName: "THE MAGICIAN"
    },
    {
        tarotId: 59,	
        tarotName: "THE HIGH PRIESTESS"
    },
    {
        tarotId: 60,	
        tarotName: "THE EMPERESS"
    },
    {
        tarotId: 61,	
        tarotName: "THE EMPEROR"
    },
    {
        tarotId: 62,	
        tarotName: "THE HIEROPHPANT"
    },
    {
        tarotId: 63,	
        tarotName: "THE LOVERS"
    },
    {
        tarotId: 64,	
        tarotName: "THE CHARIOT"
    },
    {
        tarotId: 65,	
        tarotName: "STRENGTH"
    },
    {
        tarotId: 66,	
        tarotName: "THE HERMIT"
    },
    {
        tarotId: 67,	
        tarotName: "WHEEL OF FORTUNE"
    },
    {
        tarotId: 68,	
        tarotName: "JUSTICE"
    },
    {
        tarotId: 69,	
        tarotName: "THE HANGED MAN"
    },
    {
        tarotId: 70,	
        tarotName: "DEATH"
    },
    {
        tarotId: 71,	
        tarotName: "TEMPERANCE"
    },
    {
        tarotId: 72,	
        tarotName: "THE DEVIL"
    },
    {
        tarotId: 73,	
        tarotName: "THE TOWER"
    },
    {
        tarotId: 74,	
        tarotName: "THE STAR"
    },
    {
        tarotId: 75,	
        tarotName: "THE MOON"
    },
    {
        tarotId: 76,	
        tarotName: "THE SUN"
    },
    {
        tarotId: 77,	
        tarotName: "JUDGEMENT"
    },
    {
        tarotId: 78,	
        tarotName: "THE WORLD"
    }
];

// ENTER TAROT PULLS HERE
const data = {
    love: 18,
    career:2,
    finance:54
 };

const packageTarotData = (love, career, finance) => {
    return {
      love: love,
      career: career,
      finance: finance
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

const tarotCall = function(resource, love, career, finance, callback) {
    const data = packageTarotData(love, career, finance);
    return getResponse(resource, data, callback);
};

const tarotReading = {
    love: "",
    career: "",
    finance: ""
};

const tarotData = tarotCall(
    resource,
    data.love,
    data.career,
    data.finance,
    function (error, result) {
      if (error) {
        console.log("Error returned!!");
      } else {
        console.log("Response has arrived from API server --");
        const object = JSON.parse(result);
        tarotReading.love = object.love;
        tarotReading.career = object.career;
        tarotReading.finance = object.finance;
        console.log(tarotReading);
      }
    }
);