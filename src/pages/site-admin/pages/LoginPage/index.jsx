import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MESSAGES } from '../../../../constants/validate';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../../../api/userApi';
import { addUserCurrent } from '../../../../redux/slice/userSlice';
import { SCREEN_URL } from '../../../../constants/screen';
import { blue } from '@mui/material/colors';
import { Stack, Typography, Grid, Box, Paper, Checkbox, FormControlLabel, TextField, Button } from '@mui/material';
import AlertMessage from '../../components/atoms/AlertMessage';
import md5 from 'md5';
import * as yup from 'yup';
import './styles.scss';

const schema = yup
  .object({
    email: yup.string().email(MESSAGES.INVALID_EMAIL).required(MESSAGES.EMAIL_REQUIRED),
    password: yup.string().required(MESSAGES.PASSWORD_REQUIRED).min(8, MESSAGES.INVALID_PASSWORD),
  })
  .required();

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState({
    isError: false,
    message: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const handleCloseMessage = (e, reason) => {
    if (reason === 'clickaway') return;

    setError({ ...error, isError: false });
  };

  const handleOnSubmit = async (data) => {
    try {
      const { email, password } = data;
      const usersResponse = await dispatch(fetchUsers());
      const users = usersResponse.payload;

      const userExists = users.find((user) => email === user.email && user.role === 'admin');

      if (userExists) {
        if (md5(password) === userExists.password) {
          const { id, avatar, email, fullName, token } = userExists;
          dispatch(addUserCurrent({ token, dataUser: { id, avatar, email, fullName, role: 'admin' } }));
          navigate(SCREEN_URL.ADMIN_HOME);
        } else {
          setError({ isError: true, message: MESSAGES.INCORRECT_PASSWORD });
        }
      } else {
        setError({ isError: true, message: MESSAGES.ACCOUNT_DOES_NOT_EXIST });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid className="login" container component="main" sx={{ height: '100vh' }}>
      <Grid item xs={false} sm={4} md={6} className="login__background" />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square className="login__form">
        <Stack my={8} mx={8}>
          <Stack>
            <Typography variant="h5" style={{ fontWeight: 400 }}>
              Xin chào Admin,
            </Typography>
            <Typography>Đăng Nhập</Typography>
          </Stack>
          <Box component="form" onSubmit={handleSubmit(handleOnSubmit)} sx={{ mt: 1 }}>
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              error={!!errors.email}
              helperText={errors.email?.message || ''}
              {...register('email')}
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!errors.password}
              helperText={errors.password?.message || ''}
              {...register('password')}
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2, color: 'white' }}>
              Đăng Nhập
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" style={{ color: blue[800] }}>
                  Quên mật khẩu?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Grid>
      <AlertMessage open={error.isError} type="error" message={error.message} handleClose={handleCloseMessage} />
    </Grid>
  );
}

export default LoginPage;
