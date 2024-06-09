import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, FormControlLabel, Radio, RadioGroup, Container, Typography, Paper } from '@mui/material';


const PasswordFd = () => {
    const navigate = useNavigate();
    const [findPassword, setfindPassword] = useState('');
    const [emailField, setemailField] = useState('');
    const [AuthenticationCode, setAuthenticationCode] = useState('');

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={5} sx={{ padding: 2, marginTop: 2 }}>
                <Typography component="h1" variant="h5" align="left" sx={{ fontWeight: "medium", marginBottom: 1 }}>
                    비밀 번호 찾기
                </Typography>
                <Typography component="h4" variant="subtitle1" align="left" sx={{ fontWeight: "light" }}>
                    가입할 때 입력했던 정보를 입력해주세요.
                </Typography>

                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="아이디"
                        autoComplete="findPassword"
                        autoFocus
                        value={findPassword}
                        onChange={(e) => setfindPassword(e.target.value)}
                    />
                </Box>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="이메일"
                        autoComplete="emailField"
                        value={emailField}
                        onChange={(e) => setemailField(e.target.value)}
                    />
                </Box>


                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="인증코드"
                        autoComplete="AuthenticationCode"
                        value={AuthenticationCode}
                        onChange={(e) => setAuthenticationCode(e.target.value)}
                    />
                </Box>
            </Paper>
        </Container >
    );
};



export default PasswordFd;

