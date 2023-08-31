const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    zodiacName: String
    timezone: Float
    journal: [Journal]
    savedHoroscope: [Horoscope]
    savedTarot: [Tarot]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Card {
    tarotId: Int
    tarotName: String
    src: String
  }

  type Tarot {
    reading: String
    createdAt: String
  }

  type Horoscope {
    prediction: String
    createdAt: String
  }

  type Journal {
    entryDate: String
    journalText: String
  }

  type Query {
    me: User
    tarotCard(tarotId: Int!): Card
    journals(username: String): [Journal]
  }
  
  type Mutation {
    addUser(username: String!, email: String!, zodiacName: String!, timezone: Float!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveHoroscope(prediction: String): Horoscope
    saveTarotRead(reading: String): Tarot
    createJournalEntry(entryDate: String, journalText: String): Journal
  }
`;

module.exports = typeDefs;



