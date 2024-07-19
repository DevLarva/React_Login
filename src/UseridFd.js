import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, RadioGroup, FormControlLabel, Radio, Tooltip, Box, Paper } from '@mui/material';

const UseridFd = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('앤드앤');
    const [userId, setUserId] = useState(null);

    const handleFindId = async () => {
        try {
            const response = await fetch('/api/find-userid', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, department }),
            });

            const data = await response.json();

            if (response.ok) {
                setUserId(data.userId);
            } else {
                console.error('아이디 찾기 실패:', data.message);
            }
        } catch (error) {
            console.error('아이디 찾기 오류:', error);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 3, marginTop: 10 }}>
                <Typography component="h1" variant="h5" align="center" sx={{ padding: 3 }}>
                    아이디 찾기
                </Typography>

                <Typography component="h2" variant="h6" sx={{ mt: 2, mb: 1 }}>
                    이름을 입력해주세요.
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="이름"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Typography component="h2" variant="h6" sx={{ mt: 2, mb: 1 }}>
                        소속을 입력해주세요.
                    </Typography>
                    <RadioGroup
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        row
                        sx={{ justifyContent: 'center', marginTop: 1 }}
                    >
                        <Tooltip title="앤드앤 회사에 속한 경우 선택하세요." placement="top" arrow>
                            <FormControlLabel value="앤드앤" control={<Radio />} label="앤드앤" sx={{ mx: 2 }} />
                        </Tooltip>
                        <Tooltip title="클라이언트인 경우 선택하세요." placement="top" arrow>
                            <FormControlLabel value="클라이언트" control={<Radio />} label="클라이언트" sx={{ mx: 2 }} />
                        </Tooltip>
                        <Tooltip title="외주업체인 경우 선택하세요." placement="top" arrow>
                            <FormControlLabel value="외주업체" control={<Radio />} label="외주업체" sx={{ mx: 2 }} />
                        </Tooltip>
                    </RadioGroup>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleFindId}
                    >
                        아이디 찾기
                    </Button>
                    {userId && (
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            아이디: {userId}
                        </Typography>
                    )}
                </Box>
            </Paper>
        </Container>
    );
};

export default UseridFd;
