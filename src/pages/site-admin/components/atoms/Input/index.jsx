import { TextField } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

const inputStyle = (error) => ({
  width: '320px',
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1,
  color: grey[900],
  background: '#fff',
  border: `1px solid grey[300]`,

  '.MuiInputBase-root': {
    borderRadius: '10px',
  },

  '.MuiInputBase-input': {
    padding: '12px 14px',
  },

  '.MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: error ? '#d32f2f' : '#0a68ff',
    borderWidth: '3px',
  },
});

function Input(props) {
  const { label, name, value, onChange, helperText, required = false, error, type = 'text' } = props;

  return (
    <TextField
      sx={() => inputStyle(error)}
      label={label}
      type={type}
      name={name}
      style={{ width: '100%' }}
      InputLabelProps={{
        shrink: true,
      }}
      required={required}
      value={value}
      onChange={onChange}
      helperText={helperText}
      error={error}
    />
  );
}

export default Input;
