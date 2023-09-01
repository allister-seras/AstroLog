const { Schema, model } = require('mongoose');
const formatDateFunction = require('../utils/formatDate.js');

const journalSchema = new Schema(
  {
    journalText: {
      type: String,
      required: true,
      trim: true
    },
    horoscope: {
      type: String,
    },
    tarot: {
      type: String,
    },
    entryDate: {
      type: String
    },
  },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false,
      }
);

const Journal = model('Journal', journalSchema);

module.exports = Journal;


