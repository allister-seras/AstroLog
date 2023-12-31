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

export const QUERY_ME = gql`
    query Me {
      me {
        _id
        username
        email
        zodiacName
        timezone
        journal {
          entryDate
          journalText
        }
        savedHoroscope {
          createdAt
          prediction
        }
        savedTarot {
          reading
          createdAt
        }
      }
    }
`;

export const QUERY_JOURNALS = gql`
  query queryJournals {
    journals {
      entryDate
      journalText
      horoscope
      tarot
    }
  }
`;
