import React from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

function Popup({ popupName, buttonColor, buttonVariant, buttonName }) {
  const store = React.useContext(Context);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function handleSend(buttonName) {
    buttonName === 'Log In' ? store.login(email, password) : store.registration(email, password);
    store.error === null ? setOpen(false) : console.log('test');
  }

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Box mr={3}>
      <Button onClick={handleOpen} color={buttonColor} variant={buttonVariant}>
        {buttonName}
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{popupName} form</DialogTitle>
        <DialogContent>
          <DialogContentText>LOG IN TO SEE WHAT WILL HAPPEN</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            autoFocus
            margin="dense"
            id="pass"
            label="Password"
            type="Password"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleSend(buttonName)} color="primary">
            {buttonName}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default observer(Popup);
