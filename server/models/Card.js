const { Schema, model } = require('mongoose');

const cardSchema = new Schema(
  {
    tarotId: {
      type: Number
    },
    tarotName: {
      type: String
    },
    src: {
      type: String
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Card = model('Cards', cardSchema)

module.exports = Card