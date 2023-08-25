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