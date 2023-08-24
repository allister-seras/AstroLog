const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Cards {
    tarotId: Int
    tarotName: String
    src: String
  }

  type Horoscope {
    reading: String
  }
`;

module.exports = typeDefs;