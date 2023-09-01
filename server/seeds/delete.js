const db = require('../config/connection');
const { Card, Horoscope, Tarot, Journal, User } = require('../models');

db.once('open', async () => {
  await Card.deleteMany({});
  await Horoscope.deleteMany({});
  await Tarot.deleteMany({});
  await User.deleteMany({});
  await Journal.deleteMany({});

  console.log('Data deleted!');
  process.exit(0);
});
