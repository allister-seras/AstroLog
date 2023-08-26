const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    zodiacName: String
    timezone: Int
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
    reading: String!
    createdAt: Int
  }

  type Horoscope {
    predictionDate: String
    prediction: String
  }

  type Journal {
    _id: ID
    createdAt: Int
    journalAuthor: String!
    journalText: String!
  }

  input TarotReadInput {
    reading: String!
    createdAt: Int
  }
  
  input HoroscopeInput {
    predictionDate: String
    prediction: String
  }

  input JournalEntryInput {
    _id: ID
    createdAt: Int
    journalAuthor: String!
    journalText: String!
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    tarotCard(tarotId: Int!): Card
    journals(username: String): [Journal]
  }
  
  type Mutation {
    addUser(username: String!, email: String!, zodiacName: String!, timezone: Int!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveHoroscope(input: HoroscopeInput): Horoscope
    saveTarotRead(input: TarotReadInput): Tarot
    createJournalEntry(input: JournalEntryInput): Journal
    removeJournalEntry(createdAt: Int): User
  }
`;

module.exports = typeDefs;



