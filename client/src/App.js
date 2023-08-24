import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import Login from './pages/login';
import NewUser from './pages/newUser';
import Horoscope from './pages/Horoscope';
import Tarot from './pages/Tarot';
import Header from './components/header';
import Footer from './components/footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
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
              path="/home" 
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
        </div>
      </Router>
    <Footer />
    </ApolloProvider>
  );
}

export default App;