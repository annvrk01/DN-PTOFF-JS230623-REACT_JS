import React, { useState } from 'react';
import { Avatar, Button, Card, Divider, Paper, Stack, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../../../../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../../../../../api/userApi';
import { MESSAGES } from '../../../../../constants/validate';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import imageCompression from 'browser-image-compression';
import AlertMessage from '../../../components/atoms/AlertMessage';
import ModalRemove from '../../../components/molecules/ModalRemove';
import Loading from '../../../../../components/Loading';
import { useNavigate } from 'react-router-dom';
import { SCREEN_URL } from '../../../../../constants/screen';

const labelInfo = [
  { fullName: 'Họ và tên' },
  { email: 'Email' },
  { phone: 'Số điện thoại' },
  { country: 'Quốc gia' },
  { state: 'Khu vực' },
  { address: 'Địa chỉ' },
];

function InfoUser(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = props;
  const [avatar, setAvatar] = useState();
  const [imageUpload, setImageUpload] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    isMessage: false,
    content: '',
    type: 'success',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);

    setAvatar(file);
    setImageUpload(file);
  };

  const handleUploadImage = async () => {
    if (imageUpload == null) return;

    const options = {
      maxSizeMB: 500,
      maxWidthOrHeight: 60,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(imageUpload, options);
      const imageRef = ref(storage, `images/${compressedFile.name + uuidv4()}`);

      setIsLoading(true);

      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            setIsLoading(false);
            dispatch(updateUser({ ...user, avatar: url }));
            setMessage({ isMessage: true, content: MESSAGES.IMAGE_UPDATE_SUCCESS, type: 'success' });
          })
          .catch((error) => setMessage({ isMessage: true, content: MESSAGES.IMAGE_UPDATE_FAILURE, type: 'error' }));
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseMessage = (e, reason) => {
    if (reason === 'clickaway') return;
    setMessage({ ...message, isMessage: false });
  };

  const handleRemoveUser = () => {
    dispatch(deleteUser(user.id));
    handleClose();
    navigate(SCREEN_URL.ADMIN_USERS);
  };

  return (
    <Stack px={3} py={5}>
      <Typography variant="h5" sx={{ m: 3, mt: 0, flex: 1 }}>
        Thông tin cơ bản
      </Typography>
      <Card component={Paper} elevation={3} sx={{ borderRadius: 5, mx: 3, px: 3 }}>
        <Stack direction="row" alignItems="center" py={3} gap={2}>
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
            <Avatar sx={{ width: 60, height: 60, objectFit: 'cover' }} src={avatar?.preview || user.avatar} />
            <input type="file" hidden onChange={handlePreviewAvatar} />
            <Stack
              className="icon"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: 60,
                height: 60,
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
            variant="contained"
            onClick={handleUploadImage}
            style={{ width: 'fit-content', height: 38, padding: '10px' }}
          >
            Thay đổi
          </Button>
        </Stack>
        {labelInfo.map((obj, index) => {
          const key = Object.keys(obj)[0];
          const value = obj[key];

          return (
            <React.Fragment key={index}>
              <Stack direction="row" py={2}>
                <Typography style={{ width: 150, fontWeight: 600 }} variant="body2">
                  {value}
                </Typography>
                <Typography variant="body2">{user[key]}</Typography>
              </Stack>
              {index < labelInfo.length - 1 && <Divider />}
            </React.Fragment>
          );
        })}
      </Card>
      <Typography variant="h6" sx={{ m: 3, flex: 1 }}>
        Cài đặt lại mật khẩu
      </Typography>
      <Card component={Paper} elevation={3} sx={{ borderRadius: 5, mx: 3, p: 3 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" py={2}>
          <Stack direction="row" alignItems="center">
            <Typography style={{ width: 150, fontWeight: 600 }} variant="body2">
              Mật khẩu
            </Typography>
            <Typography variant="body2">**** **** ****</Typography>
          </Stack>
          <Button variant="contained" color="primary">
            Đặt lại
          </Button>
        </Stack>
      </Card>
      <Typography variant="h6" sx={{ m: 3, flex: 1 }}>
        Xoá tài khoản người dùng
      </Typography>
      <Card component={Paper} elevation={3} sx={{ borderRadius: 5, mx: 3, p: 3 }}>
        <Button variant="contained" color="red" onClick={handleOpen}>
          Xoá tài khoản
        </Button>
      </Card>

      {message.isMessage && (
        <AlertMessage
          open={message.isMessage}
          type={message.type}
          message={message.content}
          handleClose={handleCloseMessage}
        />
      )}
      {open && <ModalRemove open={open} handleClose={handleClose} handleRemove={handleRemoveUser} />}
      {isLoading && <Loading />}
    </Stack>
  );
}

export default InfoUser;
