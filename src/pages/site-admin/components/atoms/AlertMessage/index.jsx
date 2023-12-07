import { Alert, Snackbar } from '@mui/material';
import React from 'react';

function AlertMessage(props) {
  const { open, message, type = 'success', handleClose } = props;

  return (
    <Snackbar
      open={open}
      autoHideDuration={500}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      key={'bottom' + 'right'}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default AlertMessage;
