const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
    _id: ID
    dailyReading: String
  }

  type Journal {
    journalText: String!
    createdAt: Int
    savedHoroscope: [Horoscope]
    savedReading: [Tarot]
  }

  type Auth {
    token: ID!
    user: User
  }

  input TarotInput {
    reading: String!
    createdAt: String
  }
  
  input HoroscopeInput {
    id: Int
    dailyReading: String
  }

  input JournalEntryInput {
    journalText: String!
    createdAt: Int
    savedHoroscope: [HoroscopeInput]
    savedReading: [TarotInput]
  }

  type Mutations {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, username: String, password: String!): Auth
    horoscopeReading(reading: String!): Horoscope
    tarotPredction(tarotId: Int, reading: String, createdAt: Int): Tarot
    journalEnteries(input: JournalEntry): Journal
  }
`;

module.exports = typeDefs;
// refer horoscope to user and tarotRead