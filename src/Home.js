import React, { useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import GlobalContext from './GlobalContext';
import { Container, Typography, Paper } from '@mui/material';

const Home = () => {
  const { user } = useContext(GlobalContext);
  const { location } = useParams();

  if (!user || user.location !== location) {
    return <Navigate to="/" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 2, marginTop: 8 }}>
        <Typography component="h1" variant="h5" align="center">
          Welcome, {user.username}
        </Typography>
        <Typography component="p" variant="body1" align="center">
          You are logged in from {location}
        </Typography>
      </Paper>
    </Container>
  );
};

export default Home;
