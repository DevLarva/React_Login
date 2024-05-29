import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, FormControlLabel, Radio, RadioGroup, Container, Typography, Paper } from '@mui/material';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

const Register = () => {
  const [UserId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('AndN');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Here, you would typically send the registration data to the backend API
    // For now, let's just navigate to the login page
    navigate('/');
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
            label="아이디"
            autoComplete="UserId"
            autoFocus
            value={UserId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="비밀번호"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          />
          <RadioGroup
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            row
            sx={{ justifyContent: 'center', marginTop: 2 }}
          >
            <div>
              <div data-tooltip-id="AndN">
                <FormControlLabel value="AndN" control={<Radio />} label="앤드앤" />
              </div>
              <Tooltip id="AndN" place="top" effect="solid">
                앤드앤 회사에 속한 경우 선택하세요
              </Tooltip>
            </div>
            <div>
              <div data-tooltip-id="Client">
                <FormControlLabel value="Client" control={<Radio />} label="클라이언트" />
              </div>
              <Tooltip id="Client" place="top" effect="solid">
                클라이언트인 경우 선택하세요
              </Tooltip>
            </div>
            <div>
              <div data-tooltip-id="Outsourcing">
                <FormControlLabel value="Outsourcing" control={<Radio />} label="외주업체" />
              </div>
              <Tooltip id="Outsourcing" place="top" effect="solid">
                외주업체인 경우 선택하세요
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