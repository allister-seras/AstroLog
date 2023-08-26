const db = require('../config/connection');
const { Card } = require('../models');

const tarotData = require('./tarotData.json');

db.once('open', async () => {
  await Card.deleteMany({});

  const cards = await Card.insertMany(tarotData);

  console.log('Cards seeded!');
  process.exit(0);
});
