import logo from './logo.svg';
import './App.css';
import { Button, Checkbox, FormControlLabel, Link, TextField, Grid, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Typography component="h1" variant="h5">
        And N 로그인
      </Typography>
      <TextField label="아이디" name="id" required fullWidth autoComplete="id" autoFocus/>
      <TextField label="비밀번호" name="password" type="password" required fullWidth autoComplete="current-password" />
      <FormControlLabel control={<Checkbox value="remember" color= "primary" />} label="로그인 상태 유지하기" />

      
      
      <Button type = "submit" fullWidth variant="contained" sx={{mt:3}}>
        로그인
      </Button>

      <Grid container>
        <Grid item xs>
          <Link>비밀번호 찾기</Link>
        </Grid>
        <Grid item>
          <Link>회원가입</Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

//required는 값을 반드시 받도록 강제 할 수 있음.
//autoComplete은 자동 완성 가능하게끔 할 수 있음.
//FormControlLabel은 ??? 조사해보기