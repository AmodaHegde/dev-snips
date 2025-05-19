import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/layout/Header.tsx';
import { Container, Typography } from '@mui/material';
import { AuthProvider } from './contexts/AuthContext.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path = "/" element={<div>Home</div>}/>
          <Route path = "/login" element={<div>Login Page</div>}/>
          <Route path = "/signup" element={<div>Signup page</div>}/>
          <Route path = "/new-snippet" element={<div>New Snippet Page</div>}/>
          <Route path = "/all-my-snippets" element={<div>All my snippets</div>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
