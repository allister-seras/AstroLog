const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
        password: {
            type: String,
            required: true,
            minlength: 5,
          },
        zodiacName: {
            type: String,
            required: true,
        },
        timezone: {
            type: Number,
            required: true,
        },
        journal: [{
            type: Schema.Types.ObjectId, 
            ref: 'Journal'
        }],
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
        //virtual is not a property of the model but it will still be created as a field
        toJSON: {
            virtual: true,
        },
    }
);

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});
  
  // custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
