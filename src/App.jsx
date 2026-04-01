import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import OurWorks from './pages/OurWorks';
import Volunteer from './pages/Volunteer';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import CheckVolunteer from './pages/CheckVolunteer'; // Add this import

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<OurWorks />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/check" element={<CheckVolunteer />} /> {/* Add this route */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;