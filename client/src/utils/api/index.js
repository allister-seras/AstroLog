const dailyHoroData = require('./dailyhoroscope.js');
const tarotData = require('./tarot.js');

// USER DATA HERE
const zodiacName = "aries";
const timezone = -8.0;

// ENTER TAROT PULLS HERE
const love = 18;
const career = 2;
const finance = 54;

dailyHoroData(zodiacName, timezone);
tarotData(love, career, finance); 

module.exports = { dailyHoroData, tarotData };