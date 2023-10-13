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

    case 'password':
      if (value.length < 8) {
        return 'Password phải có 8 ký tự';
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

export default validateField;
