const { Schema, Types } = require('mongoose');
const formatDate = require('../utils/formatDate.js');


const tarotReadSchema = new Schema(
    {
      reading: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: date => formatDate(date)
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );

  module.exports = tarotReadSchema;