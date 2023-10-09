import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  Box,
  Button,
  Card,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import theme from '../../../../theme';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import BackButtonLink from '../../components/atoms/BackButtonLink';
import Input from '../../components/atoms/Input';
import { addUser, getUser, updateUser } from '../../api/userApi';
import { screenUrl } from '../../../../constants/screen/screenUrl';
import { storage } from '../../../../firebase';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

function UpdateUserPage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const { userId } = useParams();

  const [user, setUser] = useState({
    id: uuidv4(),
    fullName: '',
    email: '',
    country: '',
    state: '',
    address: '',
    phone: '',
    dayOfBirth: '2023-01-01',
    gender: 'female',
    order: 0,
    spent: 0,
    avatar: 'https://material-kit-react.devias.io/assets/avatars/avatar-carson-darrin.png',
    isPublic: true,
  });
  const [errorMessage, setErrorMessage] = useState({
    fullName: '',
    email: '',
    address: '',
    phone: '',
  });
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, 'images/');

  const handleUploadFile = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  const validateField = (value, field) => {
    if (!value || value.trim() === '') {
      return 'Trường bạn nhập không được để trống';
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^\d{10}/;

    switch (field) {
      case 'fullName':
        if (value.length < 3) {
          return 'Họ và tên phải có ít nhất 3 ký tự';
        } else {
          return '';
        }

      case 'email':
        if (!emailPattern.test(value)) {
          return 'Email không hợp lệ';
        } else {
          return '';
        }

      case 'address':
        if (value.length < 5) {
          return 'Địa chỉ phải có ít nhất 5 ký tự';
        } else {
          return '';
        }

      case 'phone':
        if (!phonePattern.test(value)) {
          return 'Số điện thoại không hợp lệ';
        } else {
          return '';
        }

      default:
        break;
    }
  };

  const handleOnChange = (e) => {
    const { name, value, checked } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: name === 'isPublic' ? checked : value,
    }));

    setErrorMessage((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = () => {
    const fieldsToValidate = ['fullName', 'email', 'address', 'phone'];

    const newErrors = {};
    for (const key of fieldsToValidate) {
      const error = validateField(user[key], key);
      newErrors[key] = error;
    }

    setErrorMessage(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== '');

    if (!hasErrors) {
      console.log(user);
      userId ? dispatch(updateUser(user)) : dispatch(addUser(user));
      navigate(-1);
      console.log('Form submitted successfully');
    } else {
      console.log('Form has errors');
    }
  };

  useEffect(() => {
    if (!userId) return;

    const userUpdate = users?.data?.find((user) => user.id === userId);
    setUser({ ...userUpdate });
  }, []);

  useEffect(() => {
    listAll(imagesListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  console.log(imageUrls);

  return (
    <Stack>
      <BackButtonLink linkTo={screenUrl.ADMIN_USERS} />
      <Stack direction="row" mx={3} my={4} alignItems="center" gap={2} flex={1}>
        {userId ? (
          <Stack direction="row" alignItems="center" gap={2}>
            <Avatar sx={{ width: 62, height: 62 }} src={user.avatar}>
              {user.fullName[0]}
            </Avatar>
            <Stack gap={1}>
              <Typography variant="h4">{user.email}</Typography>
              <Typography variant="body2">
                <span style={{ fontWeight: 600 }}>user_id:</span>
                <span
                  style={{
                    margin: '0 8px',
                    padding: '2px 8px',
                    borderRadius: 999,
                    backgroundColor: 'rgba(17, 25, 39, 0.12)',
                  }}
                >
                  {user.id}
                </span>
              </Typography>
            </Stack>
          </Stack>
        ) : (
          <>
            <Stack
              component="label"
              sx={{
                cursor: 'pointer',
                borderRadius: 9999,
                outline: '1px dashed #ccc',
                outlineOffset: '4px',
                overflow: 'hidden',
                position: 'relative',

                '&:hover .icon': {
                  display: 'flex',
                },
              }}
            >
              <img
                src="https://material-kit-pro-react.devias.io/assets/avatars/avatar-anika-visser.png"
                alt=""
                style={{ width: 80, height: 80, objectFit: 'cover' }}
              />
              <input type="file" hidden onChange={(e) => setImageUpload(e.target.files[0])} />
              <Stack
                className="icon"
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: 80,
                  height: 80,
                  backgroundColor: 'rgba(0,0,0,0.25)',
                  textAlign: 'center',
                  position: 'absolute',
                  display: 'none',
                }}
              >
                <Typography style={{ width: 50, fontWeight: 600, color: '#eee' }}>
                  <AddAPhotoOutlinedIcon />
                </Typography>
              </Stack>
            </Stack>
            <Button
              color="black"
              style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                width: 'fit-content',
                height: 38,
                padding: '10px',
              }}
              variant="contained"
              onClick={handleUploadFile}
            >
              Thay đổi
            </Button>
          </>
        )}
      </Stack>
      <Card component={Paper} elevation={3} sx={{ borderRadius: 5, mx: 3, p: 3 }}>
        <Typography
          variant="h6"
          style={{ fontWeight: 600, color: theme.palette.black.main, textTransform: 'capitalize', paddingBottom: 16 }}
        >
          {userId ? 'Cập nhật' : 'Tạo'} thông tin người dùng
        </Typography>

        <Box>
          <Stack direction="row" gap={2} my={2}>
            <Input
              label="Họ và tên"
              name="fullName"
              required={true}
              value={user.fullName}
              onChange={handleOnChange}
              helperText={errorMessage.fullName}
              error={!!errorMessage.fullName}
            />
            <Input
              label="Email"
              name="email"
              required={true}
              value={user.email}
              onChange={handleOnChange}
              helperText={errorMessage.email}
              error={!!errorMessage.email}
            />
          </Stack>
          <Stack direction="row" gap={2} my={2}>
            <Input label="Quốc gia" name="country" value={user.country} onChange={handleOnChange} />
            <Input label="Thành phố" name="state" value={user.state} onChange={handleOnChange} />
          </Stack>
          <Stack direction="row" gap={2} my={2}>
            <Input
              label="Địa chỉ"
              name="address"
              required={true}
              value={user.address}
              onChange={handleOnChange}
              helperText={errorMessage.address}
              error={!!errorMessage.address}
            />
            <Input
              label="Số điện thoại"
              name="phone"
              required={true}
              value={user.phone}
              onChange={handleOnChange}
              helperText={errorMessage.phone}
              error={!!errorMessage.phone}
            />
          </Stack>
          <Stack direction="row" gap={2} my={2}>
            <Box style={{ flex: 1 }}>
              <Input
                label="Ngày sinh"
                name="dayOfBirth"
                type="date"
                value={user.dayOfBirth}
                onChange={handleOnChange}
              />
            </Box>
            <Stack direction="row" alignItems="center" gap={2} style={{ flex: 1 }}>
              <FormLabel id="demo-row-radio-buttons-group-label">Giới tính:</FormLabel>
              <RadioGroup row value={user.gender} onChange={handleOnChange} name="gender">
                <FormControlLabel value="female" control={<Radio />} label="Nữ" />
                <FormControlLabel value="male" control={<Radio />} label="Nam" />
                <FormControlLabel value="other" control={<Radio />} label="Khác" />
              </RadioGroup>
            </Stack>
          </Stack>
        </Box>

        <Stack direction="row" my={3} justifyContent="space-between">
          <Stack gap={1}>
            <Typography variant="h6" style={{ fontWeight: 500 }}>
              Công khai thông tin liên hệ
            </Typography>
            <Typography style={{ color: theme.palette.gray.main, fontSize: 14 }}>
              Bất kỳ ai xem hồ sơ của bạn đều có thể xem chi tiết liên hệ của bạn
            </Typography>
          </Stack>
          <Switch
            name="isPublic"
            checked={user.isPublic}
            onChange={handleOnChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Stack>

        <Stack display="inline-flex" direction="row" gap={2}>
          <Button variant="contained" onClick={handleSubmit}>
            {userId ? 'Cập nhật' : 'Tạo'}
          </Button>
          <Button
            component={Link}
            color="black"
            style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
            to={screenUrl.ADMIN_USERS}
            variant="contained"
          >
            Thoát
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
}

export default UpdateUserPage;
