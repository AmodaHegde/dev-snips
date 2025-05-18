import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header.tsx';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const handleLogout = () => {
    // Implement logout logic here
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header 
          isDarkMode={isDarkMode}
          onThemeToggle={handleThemeToggle}
          isLoggedIn={isLoggedIn}
          username={username}
          onLogout={handleLogout}
        />
        <main>
          {/* Your routes and content will go here */}
        </main>
      </div>
    </Router>
  );
}

export default App;
