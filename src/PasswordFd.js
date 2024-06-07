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
                        autoFocus
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
                        autoFocus
                        value={AuthenticationCode}
                        onChange={(e) => setAuthenticationCode(e.target.value)}
                    />
                </Box>
            </Paper>
        </Container>
    );
};



export default PasswordFd;