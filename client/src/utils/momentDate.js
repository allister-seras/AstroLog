import Moment from "moment";

export const formatDate = function(dateString) {
    let date = new Moment(dateString);
    return date.format('D-M-YYYY');
};

