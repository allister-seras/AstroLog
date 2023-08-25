const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Cards {
    tarotId: Int
    tarotName: String
    src: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Horoscope {
    reading: String
  }

  input JournalEnteryInput {
    
  }

  type Mutations {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, username: String, password: String!): Auth
    horoscopeReading(reading: String!): Horoscope
    tarotPredction(tarotId: Int, reading: String, createdAt: Int): Tarot
    journalEnteries()
  }
`;

module.exports = typeDefs;
// refer horoscope to user and tarotRead