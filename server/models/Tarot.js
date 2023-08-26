const { Schema, model } = require('mongoose');
const formatDateFunction = require('../utils/formatDate.js');


const tarotReadSchema = new Schema(
    {
      reading: {
        type: String,
        required: true,
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

  const Tarot = model('Tarot', tarotReadSchema);
  module.exports = Tarot;