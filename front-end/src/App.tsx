import React from 'react';
import Header from './components/layout/Header.tsx';
import { Container, Typography } from '@mui/material';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to MyApp
        </Typography>
        <Typography variant="body1">
          This is a simple app using React + MUI.
        </Typography>
      </Container>
    </>
  );
};

export default App;
