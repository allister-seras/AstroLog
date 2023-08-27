import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
//import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './pages/Home';
import Login from './pages/login';
import NewUser from './pages/newUser';
import Horoscope from './pages/Horoscope';
import Tarot from './pages/Tarot';
import Header from './components/header';
import Footer from './components/footer';

const link = new HttpLink({
  uri: "http://localhost:3001/graphql"
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
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
              path="/horoscope"
              element={<Horoscope/>}
            />
            <Route
              path="/tarot"
              element={<Tarot/>}
            />
            {/* Add routes for the other pages */}
          </Routes>
        </main>
      </Router>
    <Footer />
    </ApolloProvider>
  );
}

export default App;