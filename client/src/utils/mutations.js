import { gql } from '@apollo/client';


export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $zodiacName: String!, $timezone: Float!, $password: String!) {
        addUser(username: $username, email: $email, zodiacName: $zodiacName, timezone: $timezone, password: $password) {
            token
            user {
                _id
                username
                email
                zodiacName
                timezone
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            username
            email
            zodiacName
            timezone
            }
        }
    }
`;

export const SAVE_TAROT = gql`
    mutation saveTarot($reading: String!) {
        saveTarotRead(reading: $reading) {
        reading
        createdAt
        }
    }
`;

export const SAVE_HOROSCOPE = gql`
    mutation SaveHoroscope($prediction: String!) {
        saveHoroscope(prediction: $prediction) {
        createdAt
        prediction
        }
    }
`;

export const CREATE_JOURNAL = gql`
    mutation createJournalEntry($entryDate: String, $journalText: String, $tarot: String, $horoscope: String) {
        createJournalEntry(entryDate: $entryDate, journalText: $journalText, horoscope: $horoscope, tarot: $tarot) {
        entryDate
        journalText
        }
  }
`;