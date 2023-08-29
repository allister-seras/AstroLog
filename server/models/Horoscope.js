const { Schema, model } = require('mongoose');
const formatDateFunction = require('../utils/formatDate.js');

const horoscopeSchema = new Schema (
  {
  predictionDate: {
    type: Date,
    default: Date.now,
    get: date => formatDateFunction(date)
  },
  prediction: {
    type: String
  }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Horoscope = model('Horoscope', horoscopeSchema)

module.exports = Horoscope

// predictionDate from API DD-M-YYYY = done!