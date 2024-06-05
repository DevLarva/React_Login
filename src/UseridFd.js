import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, FormControlLabel, Radio, RadioGroup, Container, Typography, Paper } from '@mui/material';


const UseridFd = () => {
    const navigate = useNavigate();

    return (
        <Typography component="h1" variant="h5" align="center">
            아이디 찾기 페이지
        </Typography>
    );
};


export default UseridFd;