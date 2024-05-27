import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from './GlobalContext';
import { Box, TextField, Button, FormControlLabel, Radio, RadioGroup, Container, Typography, Paper } from '@mui/material';

const Login = () => {
  const { setUser } = useContext(GlobalContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('A');
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser({ username, location });
    navigate(`/home/${location}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 2, marginTop: 8 }}>
        <Typography component="h1" variant="h5" align="center">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <RadioGroup
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            row
            sx={{ justifyContent: 'center', marginTop: 2 }}
          >
            <FormControlLabel value="A" control={<Radio />} label="A" />
            <FormControlLabel value="B" control={<Radio />} label="B" />
            <FormControlLabel value="C" control={<Radio />} label="C" />
          </RadioGroup>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
