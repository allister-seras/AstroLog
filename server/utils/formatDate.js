const dayjs = require('dayjs');

module.exports = (date) => {
    const formattedDate = dayjs(date).format('DD-M-YYYY')
    return formattedDate
};