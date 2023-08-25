const db = require('../config/connection');
const { Cards } = require('../models');

const tarotData = require('./tarotData.json');

db.once('open', async () => {
  await Cards.deleteMany({});

  const cards = await Cards.insertMany(tarotData);

  console.log('Cards seeded!');
  process.exit(0);
});
