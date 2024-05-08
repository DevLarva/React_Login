import logo from './logo.svg';
import './App.css';
import { Button, Checkbox, FormControlLabel, Link, TextField, Grid, Typography, Avatar, Box, Container} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function App() {
  return (
    <Container className="App" component="main" maxWidth="md" 
    style={{ backgroundImage: `url(https://png.pngtree.com/element_pic/00/16/07/08577f31095ca6e.jpg)`,
    backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: "cover"}}
    >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignitems: 'center',
        }}
      >
        
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        And N 로그인
      </Typography>
      <TextField margin="normal" label="아이디" name="id" required fullWidth autoComplete="id" autoFocus/>
      <TextField margin="normal" label="비밀번호" name="password" type="password" required fullWidth autoComplete="current-password" />
      <FormControlLabel control={<Checkbox value="remember" color= "primary" />} label="로그인 상태 유지하기" />
  
      <Button type = "submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2}}>
        로그인
      </Button>
      <Grid container>
        <Grid item xs>
          <Link>비밀번호 찾기</Link>
        </Grid>
        <Grid item xs>
          <Link>회원가입</Link>
        </Grid>
      </Grid>
      </Box>
    </Container>
  );
}

export default App;

//required는 값을 반드시 받도록 강제 할 수 있음.
//autoComplete은 자동 완성 가능하게끔 할 수 있음.
//FormControlLabel은 ??? 조사해보기
//flex column?? center 종류 및 사용법 조사
//백그라운드 이미지 줄때 속성값 추가 안해주면 반복됨. backgroundRepeat: 'no-repeat' 참고
