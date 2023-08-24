const dayjs = require('dayjs');

module.exports = (date) => {
    const formattedDate = dayjs(date).format('MMM D, YYY')
    return formattedDate
}