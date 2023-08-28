import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
//import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Login from './pages/login';
import NewUser from './pages/newUser';
import Horoscope from './pages/Horoscope';
import Tarot from './pages/Tarot';
import Header from './components/header';
import Footer from './components/footer';
import { UserProvider } from './utils/UserContext';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <UserProvider>
      <Router>
        <main className="flex-column justify-center align-center min-100-vh">
          <Routes>
            <Route
              path="/login"
              element={<Login/>}
            />
            <Route 
              path="/newUser"
              element={<NewUser/>}
            />
            <Route 
              path="/" 
              element={<Home />}
            />    
            <Route
              path="/tarot"
              element={<Tarot/>}
            />
            <Route
                    path="/horoscope"
                    element={<Horoscope />}
            />
            {/* Add routes for the other pages */}
          </Routes>
        </main>
      </Router>
      </UserProvider>
    <Footer />
    </ApolloProvider>
  );
}

export default App;