import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
  isLoggedIn?: boolean;
  username?: string;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isDarkMode = false,
  onThemeToggle = () => {},
  isLoggedIn = false,
  username = '',
  onLogout = () => {},
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo">
            DevSnip
          </Link>
          <span className="tagline">Share code snippets easily</span>
        </div>

        <div className="header-actions">
          <button
            className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
            onClick={onThemeToggle}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <div className="nav-links desktop-nav">
            <Link to="/new" className="nav-link">New Snippet</Link>
            <Link to="/explore" className="nav-link">Explore</Link>
            <Link to="/docs" className="nav-link">Docs</Link>
          </div>

          <div className="auth-section">
            {isLoggedIn ? (
              <div className="user-menu">
                <button className="user-menu-button" onClick={toggleMenu}>
                  {username} ▼
                </button>
                {isMenuOpen && (
                  <div className="dropdown-menu">
                    <Link to="/profile" className="dropdown-item">Profile</Link>
                    <Link to="/settings" className="dropdown-item">Settings</Link>
                    <Link to="/my-snippets" className="dropdown-item">My Snippets</Link>
                    <button className="dropdown-item logout" onClick={onLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="auth-button login">Log In</Link>
                <Link to="/register" className="auth-button register">Sign Up</Link>
              </div>
            )}
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/new" className="mobile-nav-link">New Snippet</Link>
          <Link to="/explore" className="mobile-nav-link">Explore</Link>
          <Link to="/docs" className="mobile-nav-link">Docs</Link>
          {!isLoggedIn && (
            <>
              <Link to="/login" className="mobile-nav-link">Log In</Link>
              <Link to="/register" className="mobile-nav-link">Sign Up</Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link to="/profile" className="mobile-nav-link">Profile</Link>
              <Link to="/settings" className="mobile-nav-link">Settings</Link>
              <Link to="/my-snippets" className="mobile-nav-link">My Snippets</Link>
              <button className="mobile-nav-link logout" onClick={onLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;