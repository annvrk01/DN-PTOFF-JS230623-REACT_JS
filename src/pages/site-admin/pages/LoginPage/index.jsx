import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { blue } from '@mui/material/colors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { message } from '../../../../constants/validate';
import './styles.scss';

const schema = yup
  .object({
    email: yup.string().email(message.EMAIL_WRONG).required(message.EMAIL_REQUIRED),
    password: yup.string().required(message.PASSWORD_REQUIRED).min(8, message.PASSWORD_WRONG),
  })
  .required();

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const handleOnSubmit = () => {
    console.log('test');
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
    </Grid>
  );
}

export default LoginPage;
