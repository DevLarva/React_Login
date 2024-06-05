import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, FormControlLabel, Radio, RadioGroup, Container, Typography, Paper, Grid, IconButton, Tooltip } from '@mui/material';
import 'react-tooltip/dist/react-tooltip.css';
import InfoIcon from '@mui/icons-material/Info';

const Register = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('AndN');
  const [passwordError, setPasswordError] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const navigate = useNavigate();

  const passwordValidation = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  };

  useEffect(() => {
    if (passwordTouched) {
      if (password !== confirmPassword) {
        setPasswordError('비밀번호가 일치하지 않습니다.');
      } else {
        setPasswordError('');
      }

      setPasswordValid(passwordValidation(password));
    }
  }, [password, confirmPassword, passwordTouched]);

  const handleRegister = () => {
    if (!userName || !userId || !password || !confirmPassword) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!passwordValid) {
      alert('비밀번호가 유효하지 않습니다. 영문, 숫자, 특수문자 포함하여 8자 이상을 입력해주세요.');
      return;
    }

    alert('회원가입이 완료되었습니다!');
    navigate('/');
  };

  const handleCheckUserId = () => {
    alert('아이디 중복 검사를 진행합니다.');
    //TODO: 이후에 실제로 중복 검사를 위한 API 호출 로직을 추가해야함.
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 2, marginTop: 8 }}>
        <Typography component="h1" variant="h5" align="center">
          회원가입
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="이름"
            autoComplete="userName"
            value={userName}
            autoFocus
            onChange={(e) => setUserName(e.target.value)}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="아이디"
              autoComplete="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleCheckUserId}
              sx={{
                width: '100px',
                height: '55px',
                padding: '10px',
                marginTop: 1,
              }}>
              중복 검사
            </Button>
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            label="비밀번호"
            type="password"
            autoComplete="new-password"
            value={password}
            placeholder='영문, 숫자, 특수문자 포함하여 8자 이상을 입력해주세요.'
            onChange={(e) => setPassword(e.target.value)}
            error={!passwordValid && passwordTouched}
            helperText={!passwordValid && passwordTouched && '비밀번호는 영문, 숫자, 특수문자 포함하여 8자 이상이어야 합니다.'}
            onBlur={() => setPasswordTouched(true)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="비밀번호 확인"
            type="password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={Boolean(passwordError)}
            helperText={passwordError}
          />
          <RadioGroup
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            row
            sx={{ justifyContent: 'center', marginTop: 2 }}
          >
            <div>
              <Tooltip title="앤드앤 회사에 속한 경우 선택하세요." placement="top" arrow>
                <FormControlLabel value="AndN" control={<Radio />} label="앤드앤" />
              </Tooltip>
            </div>
            <div>
              <Tooltip title="클라이언트인 경우 선택하세요." placement="top" arrow>
                <FormControlLabel value="Client" control={<Radio />} label="클라이언트" />
              </Tooltip>
            </div>
            <div>
              <Tooltip title="외주업체인 경우 선택하세요." placement="top" arrow>
                <FormControlLabel value="Outsourcing" control={<Radio />} label="외주업체" />
              </Tooltip>
            </div>
          </RadioGroup>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleRegister}
          >
            회원가입
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;





//i 버튼 추가해서 카테고리중에서 어떤걸 선택해야 하는지 알려주는 tip을 적어본다면 어떤가?  
//회원가입 완료 되면 완료 alert 추가해주세요.
//빈칸있는 상태에서 회원가입 완료 버튼 누르면 비밀번호 유효성검사랑 관련있는 alert가 아니라 빈칸이 있다는 alert를 추가해주세요.