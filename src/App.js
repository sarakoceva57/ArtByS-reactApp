import React from 'react';

import { AboutUs, Footer, Gallery, Header, AllArts, Reviews } from './container';
import { Navbar } from './components';
import './App.css';
import Author from './container/Author/Author';
import Team from './container/Team/Team';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <AllArts />
    <Gallery />
    <Author />
    <Team />
    <Reviews />

    <Footer />
  </div>
);

export default App;
