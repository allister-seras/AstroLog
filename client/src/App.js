import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import Header from './components/header';
import Footer from './components/footer';
import Particle from './components/particle';

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
            {/*<Route
              path="/login"
              element={<Login/>}
            />*/}
            <Route 
              path="/home" 
              element={<Home />}
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