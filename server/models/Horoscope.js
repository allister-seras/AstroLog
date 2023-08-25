const { Schema, model } = require('mongoose');

const horoscopeSchema = new Schema ({
  dailyReading: {
    type: String
  }
})

const Horoscope = model('Horoscope', horoscopeSchema)

module.exports = Horoscope