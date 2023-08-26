import { gql } from '@apollo/client';

export const QUERY_CARD = gql`
    query Card($tarotId: Int!) {
        tarotCard(tarotId: $tarotId) {
        tarotId
        tarotName
        src
    }
  }
`;

export const SINGLE_USER = gql`
  query querySingleUser($username: String!) {
    user(username: $username) {
      _id
      username
      email
      zodiacName
      timezone
      journal {
        _id
        createdAt
        journalAuthor
        journalText
        }
      savedHoroscope {
        predictionDate
        prediction
        }
      savedTarot {
        reading
        createdAt
        }
      }
  }
`;

export const QUERY_ME = gql`
  query queryMe($username: String!) {
    user(username: $username) {
      _id
      username
      email
      zodiacName
      timezone
      journal {
        _id
        createdAt
        journalAuthor
        journalText
        }
      savedHoroscope {
        predictionDate
        prediction
        }
      savedTarot {
        reading
        createdAt
        }
      }
  }
`;