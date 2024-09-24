import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'; // Import your logo

const HeaderBar = () => {
  const [hoveredLogo, setHoveredLogo] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleLogoMouseEnter = () => setHoveredLogo(true);
  const handleLogoMouseLeave = () => setHoveredLogo(false);

  const handleLinkMouseEnter = (link) => setHoveredLink(link);
  const handleLinkMouseLeave = () => setHoveredLink(null);

  return (
    <header style={styles.header}>
      <div
        style={styles.logoContainer}
        onMouseEnter={handleLogoMouseEnter}
        onMouseLeave={handleLogoMouseLeave}
      >
        <Link to="/" style={styles.logoLink}>
          <img
            src={logo}
            alt="Logo"
            style={{ ...styles.logo, ...(hoveredLogo ? styles.logoHover : {}) }}
          />
        </Link>
        <h1 style={styles.title}>TheDevAtlas</h1>
      </div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li
            style={styles.navItem}
            onMouseEnter={() => handleLinkMouseEnter('home')}
            onMouseLeave={handleLinkMouseLeave}
          >
            <Link
              to="/"
              style={{
                ...styles.navLink,
                ...(hoveredLink === 'home' ? styles.navLinkHover : {}),
              }}
            >
              Home
            </Link>
          </li>
          <li
            style={styles.navItem}
            onMouseEnter={() => handleLinkMouseEnter('blog')}
            onMouseLeave={handleLinkMouseLeave}
          >
            <Link
              to="/blog"
              style={{
                ...styles.navLink,
                ...(hoveredLink === 'blog' ? styles.navLinkHover : {}),
              }}
            >
              Blog
            </Link>
          </li>
          <li
            style={styles.navItem}
            onMouseEnter={() => handleLinkMouseEnter('resume')}
            onMouseLeave={handleLinkMouseLeave}
          >
            <Link
              to="/resume"
              style={{
                ...styles.navLink,
                ...(hoveredLink === 'resume' ? styles.navLinkHover : {}),
              }}
            >
              Resume
            </Link>
          </li>
          <li
            style={styles.navItem}
            onMouseEnter={() => handleLinkMouseEnter('contact')}
            onMouseLeave={handleLinkMouseLeave}
          >
            <Link
              to="/contact"
              style={{
                ...styles.navLink,
                ...(hoveredLink === 'contact' ? styles.navLinkHover : {}),
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#0D0D1D',
    color: 'white',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoLink: {
    textDecoration: 'none',
  },
  logo: {
    height: '50px',
    marginRight: '10px',
    transition: 'transform 0.3s ease',
  },
  logoHover: {
    transform: 'scale(1.1)', // Slight zoom-in on hover
  },
  title: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    display: 'inline-block', // Allow scaling with transform
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2em',
    transition: 'color 0.3s ease, transform 0.3s ease',
  },
  navLinkHover: {
    color: '#0AB4FF', // Change color on hover
    transform: 'scale(1.1)', // Slight zoom-in on hover
  },
};

export default HeaderBar;
