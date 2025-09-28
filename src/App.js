import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePrompt from './components/WelcomePrompt';
import WelcomePage from './components/WelcomePage';
import AboutUs from './components/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './components/MCategory';
import Categories from './components/CCategory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePrompt />} />
        <Route path="/signup" element={<WelcomePage />} />
        <Route path="/signin" element={<WelcomePage />} />
        <Route path="/Movies" element={<Category />} />
        <Route path="/Comics" element={<Categories />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;

