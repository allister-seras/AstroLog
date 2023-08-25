const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  zodiacname: String
  journal: [Journal]!
}

type Aut {
  token: ID!
  user: User
}

  type Cards {
    tarotId: Int
    tarotName: String
    src: String
  }

  type Tarot {
    reading: String!
    createdAt: String
  }

  type Horoscope {
    reading: String
  }
`;

module.exports = typeDefs;
// refer horoscope to user and tarotRead