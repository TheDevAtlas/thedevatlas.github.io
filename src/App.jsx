import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderBar from './components/HeaderBar'; // Import the HeaderBar
import Home from './pages/Home';
import BlogList from './pages/Blog/BlogList';
//import BlogPost from './pages/Blog/BlogPost'; //<Route path="/blog/:id" element={<BlogPost />} />
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
