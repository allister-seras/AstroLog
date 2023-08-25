const { Schema, model } = require('mongoose');

const horoscopeSchema = new Schema ({
  predictionDate: {
    type: String
  },
  prediction: {
    type: String
  }
})

const Horoscope = model('Horoscope', horoscopeSchema)

module.exports = Horoscope