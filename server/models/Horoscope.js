const { Schema, model } = require('mongoose');

const horoscopeSchema = new Schema (
  {
  predictionDate: {
    type: String
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

// predictionDate from API DD-M-YYYY