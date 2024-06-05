import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import GlobalContext from './GlobalContext';
import { Box, TextField, Button, FormControlLabel, Radio, RadioGroup, Container, Typography, Paper, Grid } from '@mui/material';
import Andnlogo from './assets/andnlogo.png'

const Login = () => {
  const { setUser } = useContext(GlobalContext);
  const [userId, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('A');
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser({ userId, location });
    navigate(`/home/${location}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h2" variant="h1" align="center" sx={{ marginTop: 4 }} >
        <img
          src={Andnlogo}
          alt="And N"
          height={70}
          style={{ filter: 'invert(1)' }}
        />
      </Typography>
      <Paper elevation={5} sx={{ padding: 2, marginTop: 2 }}>

        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="아이디"
            autoComplete="username"
            autoFocus
            value={userId}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="비밀번호"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            로그인
          </Button>


        </Box>
      </Paper>
      <Grid container spacing={1} justifyContent="space-between" sx={{ marginTop: 0.1 }}>
        <Grid item xs={4}>
          <Link to="/find-password" style={{ textDecoration: 'none' }} fullWidth color='primary'>
            <Button fullWidth color="primary">
              비밀번호 찾기
            </Button>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to="/find-userid" style={{ textDecoration: 'none' }}>
            <Button fullWidth color="primary">
              아이디 찾기
            </Button>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <Button fullWidth color="primary">
              회원가입
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
