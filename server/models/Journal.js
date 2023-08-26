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
        createdAt: {
            type: Date,
            default: Date.now,
            get: date => formatDateFunction(date)
          }
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



