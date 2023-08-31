const { Schema, model } = require('mongoose');
const formatDateFunction = require('../utils/formatDate.js');

const journalSchema = new Schema(
  {
    journalText: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    journalAuthor: {
      type: String,
      required: true,
      trim: true,
    },
    entryDate: {
      type: String
    },
    savedHoroscope: [{
      type: Schema.Types.ObjectId,
      ref: 'Horoscope'
    }],
    savedTarot: [{
      type: Schema.Types.ObjectId,
      ref: 'Tarot'
    }]
  },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: true,
      }
);

const Journal = model('Journal', journalSchema);

module.exports = Journal;


