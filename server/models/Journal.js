const { Schema, model } = require('mongoose');
const formatDate = require('../utils/formatDate.js');
const tarotReadSchema = require('./tarotRead.js');

const journalSchema = new Schema(
    {
        journalText: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: date => formatDate(date)
          },
        horoscope:[
            {
                type: Schema.Types.ObjectId,
                ref: 'horoscope'
            },
        ],
        reading: [tarotReadSchema]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false,
      }
);

const Journal = model('journal', journalSchema);

module.exports = Journal;



