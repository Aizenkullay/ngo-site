import React from 'react';
import { FaInstagram, FaFacebook, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Social Media Icons */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "2rem", 
          marginBottom: "2rem",
          flexWrap: "wrap"
        }}>
          <a 
            href="https://www.instagram.com/student_union_for_nation/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "24px", transition: "opacity 0.3s" }}
            onMouseEnter={(e) => e.target.style.opacity = "0.8"}
            onMouseLeave={(e) => e.target.style.opacity = "1"}
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.facebook.com/p/Student-Union-for-Nation-SUN-100067494638158/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "24px", transition: "opacity 0.3s" }}
            onMouseEnter={(e) => e.target.style.opacity = "0.8"}
            onMouseLeave={(e) => e.target.style.opacity = "1"}
          >
            <FaFacebook />
          </a>
          <a 
            href="https://studentunionfornation.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "white", fontSize: "24px", transition: "opacity 0.3s" }}
            onMouseEnter={(e) => e.target.style.opacity = "0.8"}
            onMouseLeave={(e) => e.target.style.opacity = "1"}
          >
            <FaGlobe />
          </a>
        </div>
        
        <p>&copy; 2024 Helping Hand NGO. All rights reserved.</p>
        <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", opacity: 0.8 }}>
          Making a difference in communities worldwide
        </p>
        
        {/* Quick Links */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "1.5rem", 
          marginTop: "1.5rem",
          flexWrap: "wrap",
          fontSize: "0.9rem"
        }}>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="/volunteer" style={{ color: "white", textDecoration: "none" }}>Volunteer</a>
          <a href="/gallery" style={{ color: "white", textDecoration: "none" }}>Gallery</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;