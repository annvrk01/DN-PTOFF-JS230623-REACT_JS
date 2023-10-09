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

const schema = yup
  .object({
    name: yup.string().required('Email không được để trống'),
    email: yup.string().email('Email không chính xác').required('Email không được để trống'),
    password: yup
      .string()
      .required('Mật khẩu không được để trống')
      .min(8, 'Password phải có 8 ký tự'),
    confirmPassword: yup
      .string()
      .required('Xác nhận mật khẩu không được để trống')
      .oneOf([yup.ref('password'), null], 'Mật khẩu không chính xác'),
  })
  .required();

function RegisterPage() {
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
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 8,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Stack>
            <Typography variant="h5" style={{ fontWeight: 400 }}>
              Tạo tài khoản,
            </Typography>
            <Typography>Đăng Ký</Typography>
          </Stack>
          <Box component="form" noValidate onSubmit={handleSubmit(handleOnSubmit)} sx={{ mt: 1 }}>
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Tên đăng nhập"
              name="name"
              autoComplete="name"
              autoFocus
              error={!!errors.name}
              helperText={errors.name?.message || ''}
              {...register('name')}
            />
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
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Xác nhập mật khẩu"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message || ''}
              {...register('confirmPassword')}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2, color: 'white' }}
            >
              Đăng Ký
            </Button>
            <Grid container>
              <Grid item alignItems="flex-end">
                Đã có tài khoản?{' '}
                <Link to="/admin/login" style={{ color: blue[800] }}>
                  {'Đăng nhập'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default RegisterPage;
