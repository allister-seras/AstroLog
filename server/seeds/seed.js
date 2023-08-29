const db = require('../config/connection');
const { Card } = require('../models');

const tarotData = require('./tarotCardSeed.json');

db.once('open', async () => {
  const cards = await Card.insertMany(tarotData);

  console.log('Cards seeded!');
  process.exit(0);
});
