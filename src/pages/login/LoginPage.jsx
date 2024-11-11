import { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import axios from 'axios';
import { localStorageKeys } from '../../data/localStorageKeys';
import { Iconify } from '../../components/iconify';
import { toast } from 'react-toastify';
import { SignUp } from '../../components/signup/Signup';
import { FindPassword } from '../../components/FindPassword';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openFindPassword, setOpenFindPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error('이메일과 비밀번호를 입력해주세요.');
      return;
    }

    axios
      .post('/users/login', { email, password })
      .then((response) => response.data)
      .then(({ accessToken, refreshToken }) => {
        if (!accessToken || !refreshToken) {
          toast.error('로그인 실패');
          return;
        }

        localStorage.setItem(localStorageKeys.accessToken, accessToken);
        localStorage.setItem(localStorageKeys.refreshToken, refreshToken);

        window.location.href = '/dashboard';
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/background.png'})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          component="form"
          onSubmit={handleLogin}
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">로그인</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            계정이 없으신가요?
            <Link onClick={()=> setOpenSignup(true)} variant="subtitle2" sx={{ ml: 1 }}>
              회원가입
            </Link>
          </Typography>
          <Stack spacing={3}>
            <TextField
              name="이메일"
              label="이메일"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              name="비밀번호"
              label="비밀번호"
              type={showPassword ? 'text' : 'password'}
              required
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((show) => !show)}
                      edge="end"
                    >
                      <Iconify
                        icon={
                          showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            sx={{ my: 3 }}
          >
            <Link onClick={() => setOpenFindPassword(true)} variant="subtitle2" underline="hover">
              비밀번호를 잊으셨나요?
            </Link>
          </Stack>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="inherit"
          >
            로그인
          </LoadingButton>
        </Card>
        <SignUp open={openSignup} onClose={() => setOpenSignup(false)} />
        <FindPassword open={openFindPassword} onClose={() => setOpenFindPassword(false)} />
      </Stack>
    </Box>
  );
}
