import React, { useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import GlobalContext from './GlobalContext';
import { Container, Typography, Paper } from '@mui/material';


const AndnMain = () => {
    return (
        <Typography component="h1" variant="h5" align="center">
            AndN 전용 페이지 입니다.
        </Typography>
    );
};

export default AndnMain;