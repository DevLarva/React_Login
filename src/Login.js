import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import GlobalContext from './GlobalContext';
import { Box, TextField, Button, FormControlLabel, Radio, RadioGroup, Container, Typography, Paper, Grid } from '@mui/material';

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
      <Paper elevation={3} sx={{ padding: 2, marginTop: 8 }}>
        <Typography component="h1" variant="h5" align="center">
          Login
        </Typography>
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

          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={4}>
              <Link to="/find-password" style={{ textDecoration: 'none' }}>
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
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
