import React, { useState } from 'react';
import { Box, TextField, Paper, Grid, Typography, Container } from '@mui/material';
import BackgroundImg from './assets/background.jpg';

const PasswordFd = () => {
    const [findPassword, setfindPassword] = useState('');
    const [emailField, setemailField] = useState('');
    const [AuthenticationCode, setAuthenticationCode] = useState('');

    return (
        <Container component="main" maxWidth={false}>
            <Grid container disableGutters sx={{ height: '100vh', display: 'flex' }}>
                <Grid item xs={8}>
                    <Box
                        sx={{
                            height: '100%',
                            width: '100%',
                            backgroundImage: `url(${BackgroundImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'left',
                            display: 'flex',
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'right',
                            alignItems: 'top'
                        }}
                    >
                        <Paper elevation={1} sx={{ padding: 3, mt: 3 }}>
                            <Typography component="h1" variant="h5" align="left" sx={{ fontWeight: "medium", marginBottom: 1 }}>
                                비밀 번호 찾기
                            </Typography>
                            <Typography component="h4" variant="subtitle1" align="left" sx={{ fontWeight: "light", marginBottom: 2 }}>
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
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="이메일"
                                    autoComplete="emailField"
                                    placeholder='인증번호를 받을 이메일을 입력해주세요.'
                                    value={emailField}
                                    onChange={(e) => setemailField(e.target.value)}
                                />
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
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PasswordFd;
