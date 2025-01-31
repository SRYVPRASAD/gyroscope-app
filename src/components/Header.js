// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/viewer" style={styles.link}>Viewer</Link>
        <Link to="/cameradata" style={styles.link}>Camera Data</Link>
        <Link to="/objViewer" style={styles.link}>3D Object Viewer</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    padding: '10px 20px',
    color: '#fff',
    textAlign: 'center',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Header;