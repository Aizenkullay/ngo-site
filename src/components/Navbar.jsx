import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleScroll = (e, sectionId) => {
    e.preventDefault();

    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>🤝 Helping Hand NGO</div>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>

        <a href="#about" onClick={(e) => handleScroll(e, "about")} style={styles.link}>
          About
        </a>

        <a href="#works" onClick={(e) => handleScroll(e, "works")} style={styles.link}>
          Works
        </a>

        <Link to="/volunteer" style={styles.link}>
          Volunteer
        </Link>

        <Link to="/check" style={styles.link}>
          Check ID
        </Link>

        <Link to="/gallery" style={styles.link}>
          Gallery
        </Link>

        <a href="#contact" onClick={(e) => handleScroll(e, "contact")} style={styles.link}>
          Contact
        </a>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "#ffffff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    flexWrap: "wrap"
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#2c5f2d"
  },
  links: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap"
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
    transition: "color 0.3s",
    cursor: "pointer"
  }
};

export default Navbar;