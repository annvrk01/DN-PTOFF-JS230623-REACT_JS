import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  FormLabel,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { screenUrl } from '../../../../constants/screen/screenUrl';
import { useDispatch, useSelector } from 'react-redux';
import { EditorState, convertToRaw } from 'draft-js';
import { addProduct, updateProduct } from '../../api/productApi';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import BackupIcon from '@mui/icons-material/Backup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import EditorDescription from './EditorDescription';
import draftToHtml from 'draftjs-to-html';

UpdateProductPage.propTypes = {};

const inputStyle = {
  width: '320px',
  fontWeight: 400,
  lineHeight: 1,
  color: grey[900],
  background: '#fff',
  border: `1px solid grey[300]`,

  '.MuiInputBase-root': {
    borderRadius: '10px',
    height: '40px',
  },

  '.MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#0a68ff96',
    borderWidth: '3px',
  },
};

const currencies = [
  {
    value: 'Thời trang',
    label: 'Thời trang',
  },
  {
    value: 'Điện tử',
    label: 'Điện tử',
  },
  {
    value: 'Thiết bị thông minh',
    label: 'Thiết bị thông minh',
  },
  {
    value: 'Thể thao và sức khỏe',
    label: 'Thể thao và sức khỏe',
  },
  {
    value: 'Gaming',
    label: 'Gaming',
  },
  {
    value: 'Sức khỏe và làm đẹp',
    label: 'Sức khỏe và làm đẹp',
  },
  {
    value: 'Đồ gia dụng',
    label: 'Đồ gia dụng',
  },
  {
    value: 'Đồ chơi',
    label: 'Đồ chơi',
  },
  {
    value: 'Nhà cửa và nội thất',
    label: 'Nhà cửa và nội thất',
  },
  {
    value: 'Dụng cụ nghề nghiệp',
    label: 'Dụng cụ nghề nghiệp',
  },
  {
    value: 'Vui chơi và giải trí',
    label: 'Vui chơi và giải trí',
  },
  {
    value: 'Sản phẩm thú cưng',
    label: 'Sản phẩm thú cưng',
  },
  {
    value: 'Sản phẩm làm vườn',
    label: 'Sản phẩm làm vườn',
  },
];

function UpdateProductPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const param = useParams();
  const productId = param?.productId;

  const inputRefs = {
    name: useRef(null),
    price: useRef(null),
    quantity: useRef(null),
    category: useRef(null),
  };

  const [errors, setErrors] = useState({
    name: '',
    price: '',
    quantity: '',
    category: '',
  });

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [images, setImages] = useState([]);

  const handleUploadImage = (e) => {
    let files = Array.from(e.target.files).map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(files)
      .then((images) => setImages(images))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (productId) {
      const product = products.find((product) => product.id.toString() === productId);

      for (const fieldName in inputRefs) {
        const fieldRef = inputRefs[fieldName]?.current;
        if (fieldRef) {
          fieldRef.value = product[fieldName];
        }
      }
    }
  }, [productId]);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        if (!value) {
          return 'Tên không được để trống';
        }
        break;
      case 'price':
        if (value < 0 || isNaN(value)) {
          return 'Giá không hợp lệ';
        }
        break;
      case 'category':
        if (!value) {
          return 'Địa chỉ không được trống';
        }
        break;
      default:
        break;
    }
    return '';
  };

  const handleSubmit = () => {
    const newErrors = {};
    Object.keys(inputRefs).forEach((fieldName) => {
      const value = inputRefs[fieldName].current.value;
      const errorMessage = validateField(fieldName, value);
      if (errorMessage) {
        newErrors[fieldName] = errorMessage;
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const product = {
        id: Date.now().toString(),
        imageUrl: images,
        description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        createdDate: '2023-09-27',
        lastUpdatedDate: '2023-09-27',
        createdBy: {
          id: 101,
          name: 'John Doe',
          email: 'john@example.com',
        },
        updatedBy: {
          id: 102,
          name: 'Jane Smith',
          email: 'jane@example.com',
        },
        status: 'Còn hàng',
      };

      for (const fieldName in inputRefs) {
        product[fieldName] = inputRefs[fieldName]?.current?.value;
      }

      productId ? dispatch(updateProduct(product)) : dispatch(addProduct(product));
      navigate(screenUrl.ADMIN_PRODUCT);
    }
  };

  return (
    <Stack p={6}>
      <Stack direction="row" alignItems="center" gap={2}>
        <Link to={screenUrl.ADMIN_USERS}>
          <ArrowBackIosIcon color="primary" sx={{ fontSize: 20 }} />
        </Link>
        <Typography variant="h5">{productId ? 'Cập Nhật' : 'Thêm'} Sản phẩm</Typography>
      </Stack>

      <Stack
        direction="row"
        component={Paper}
        elevation={2}
        mt={4}
        p={3}
        gap={3}
        sx={{ borderRadius: 3 }}
      >
        <Stack width="60%" gap={2}>
          <TextField
            sx={inputStyle}
            label="Tên sản phẩm"
            style={{ width: '100%' }}
            InputLabelProps={{
              shrink: true,
            }}
            inputRef={inputRefs.name}
            helperText={errors.name}
            error={!!errors.name}
          />

          <Stack direction="row" alignItems="center" justifyContent="space-between" width={'100%'}>
            <TextField
              sx={inputStyle}
              label="Giá sản phẩm"
              type="number"
              style={{ width: '60%' }}
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={inputRefs.price}
              helperText={errors.price}
              error={!!errors.price}
            />

            <Box>
              <Stack direction="row" alignItems="center" gap={1}>
                <FormLabel id="demo-radio-buttons-group-label" sx={{ fontSize: 12 }}>
                  Số lượng
                </FormLabel>
                <Button
                  variant="contained"
                  style={{
                    padding: 0,
                    minWidth: 40,
                    height: 40,
                  }}
                >
                  <RemoveIcon />
                </Button>
                <TextField
                  sx={inputStyle}
                  style={{ width: 50, textAlign: 'center' }}
                  value={0}
                  inputRef={inputRefs.quantity}
                />
                <Button
                  variant="contained"
                  style={{
                    padding: 0,
                    minWidth: 40,
                    height: 40,
                  }}
                >
                  <AddIcon />
                </Button>
              </Stack>
            </Box>
          </Stack>
          <TextField
            id="outlined-select-currency"
            select
            label="Danh mục"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue="Điện tử"
            inputRef={inputRefs.category}
            helperText={errors.category}
            error={!!errors.category}
            sx={inputStyle}
            style={{ width: '100%' }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <Stack>
            <FormLabel id="demo-radio-buttons-group-label">Mô tả</FormLabel>
            <EditorDescription
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
            />
          </Stack>
          <Button variant="contained" onClick={handleSubmit}>
            {productId ? 'Sửa' : 'Thêm'}
          </Button>
        </Stack>
        <Stack width="40%" alignItems="center" justifyContent="center">
          <Stack
            width={250}
            sx={{
              borderRadius: 2,
              border: '2px dashed #0a68ff',
            }}
          >
            {images.length > 0 ? (
              <Stack direction="row" flexWrap="wrap" gap={1} m={2}>
                {images.map((image, index) => (
                  <Box key={index} component={Paper} elevation={2}>
                    <img key={index} src={image} width={200} height={200} />
                  </Box>
                ))}
              </Stack>
            ) : (
              <Button variant="text" component="label">
                <Stack alignItems="center">
                  <BackupIcon sx={{ fontSize: 32 }} />
                  Choose avatar
                </Stack>
                <input
                  type="file"
                  multiple="multiple"
                  hidden
                  accept="/image/"
                  onChange={handleUploadImage}
                />
              </Button>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default UpdateProductPage;
