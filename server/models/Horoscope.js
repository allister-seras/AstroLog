const { Schema, model } = require('mongoose');

const horoscopeSchema = new Schema ({
  reading: {
    type: String
  }
})

const Horoscope = model('Horoscope', horoscopeSchema)

module.exports = Horoscope