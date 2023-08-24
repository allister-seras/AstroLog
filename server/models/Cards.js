const { Schema, model } = require('mongoose');

const cardsSchema = new Schema ({
  tarotId: {
    type: Number
  },
  tarotName: {
    type: String	
  },
  src: {
   type: String
  }
})

const Cards = model('Cards', cardsSchema)

module.exports = Cards