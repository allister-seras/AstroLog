const { Schema, model } = require('mongoose');
const formatDate = require('../utils/formatDate.js');

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
        createdAt: {
            type: Date,
            default: Date.now,
            get: date => formatDate(date)
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
        id: false,
      }
);

const Journal = model('Journal', journalSchema);

module.exports = Journal;



