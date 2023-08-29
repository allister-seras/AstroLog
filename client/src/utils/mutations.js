import { gql } from '@apollo/client';


export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $zodiacName: String!, $timezone: Int!, $password: String!) {
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