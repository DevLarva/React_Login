import React, { useState } from 'react';
import { Box, TextField, Paper, Grid, Typography, Container, Button } from '@mui/material';
import BackgroundImg from './assets/background.jpg';

const PasswordFd = () => {
    const [findPassword, setfindPassword] = useState('');
    const [emailField, setemailField] = useState('');
    const [AuthenticationCode, setAuthenticationCode] = useState('');
    const [emailError, setEmailError] = useState('');
    const [codeSent, setCodeSent] = useState(false);

    const handleEmailValidation = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('올바른 이메일 형식을 입력해주세요.');
        } else {
            setEmailError('');
        }
    };

    const handleRegister = () => {
        if (!findPassword || !emailField || !AuthenticationCode) {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        // 추가 로직
    };

    const handleSendCode = () => {
        handleEmailValidation(emailField);
        if (!emailError && findPassword && emailField) {
            // 인증 번호 보내는 로직 추가
            setCodeSent(true);
            console.log('인증 번호가 전송되었습니다.');
        }
    };

    return (
        <Container component="main" maxWidth={false}>
            <Grid container disablegutters sx={{ height: '100vh', display: 'flex' }}>
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
                                    onChange={(e) => {
                                        setemailField(e.target.value);
                                        handleEmailValidation(e.target.value);
                                    }}
                                    error={!!emailError}
                                    helperText={emailError}
                                />
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        height: '50px',
                                        mt: 2,
                                        mb: 2,
                                    }}
                                    onClick={handleSendCode}
                                    disabled={!findPassword || !emailField || !!emailError}
                                >
                                    <Typography variant="subtitle1" align="center">
                                        인증 번호 받기
                                    </Typography>
                                </Button>
                                {codeSent && (
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="인증번호"
                                        autoComplete="AuthenticationCode"
                                        value={AuthenticationCode}
                                        onChange={(e) => setAuthenticationCode(e.target.value)}
                                    />
                                )}
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PasswordFd;




/* TODO:
- 텍필 다 채우면 버튼 잘보이게 그전에는 클릭도 못하게, 클릭하고 나면 나오게끔
- 인증번호는 어떻게 보내고 받는지는 고민
- 완료 버튼 위치 고민
- 시간 5분주는거 추가
- 일단 로직부터
*/