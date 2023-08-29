const { Schema, model } = require('mongoose');
const formatDateFunction = require('../utils/formatDate.js');

const horoscopeSchema = new Schema (
  {
    prediction: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: date => formatDateFunction(date)
    },
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