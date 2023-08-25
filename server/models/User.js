const { Schema, model } = require('mongoose');
const horoscopeSchema = require('./Horoscope')
const tarotReadSchema = require('./tarotRead')

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/\w+@\w+(\.\w{2,3})+/, 'Invalid email address']
        },
        zodiacName: {
            type: String,
            required: true,

        },
        timezone: {
            type: String,
            required: true,
        },
        dailyHoroscope: horoscopeSchema,
        tarotPrediction: tarotReadSchema
    },
    {
        //virtual is not a property of the model but it will still be created as a field
        toJSON: {
            virtual: true,
        },
    }
);

const User = model('user', userSchema);

module.exports = User;
