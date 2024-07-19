import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import GlobalContext from './GlobalContext';
import { Box, TextField, Button, Container, Typography, Paper, Grid, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Andnlogo from './assets/andnlogo.png';
import { signin } from './API/ApiService'; // signin 함수 import

const Login = () => {
  const { setUser } = useContext(GlobalContext);
  const [userId, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  // 비번 보이게 or 안보이게
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const userDTO = {
      userID: userId,
      password: password,
    };

    signin(userDTO)
      .then((response) => {
        // 로그인 성공 시
        setUser({ userId, location });
        navigate(`/home/${location}`);
        console.log('로그인 성공');
      })
      .catch((error) => {
        // 로그인 실패 시
        alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요.');
        console.error('Login error:', error);
      });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h2" variant="h1" align="center" sx={{ marginTop: 4 }}>
        <img src={Andnlogo} alt="And N" height={70} style={{ filter: 'invert(1)' }} />
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
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <Button fullWidth color="primary">
              회원가입
            </Button>
          </Link>
        </Grid>
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
      </Grid>
    </Container>
  );
};

export default Login;

