import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { useState } from 'react';

export default function Popup({open, handleClose, title, description}: any) {

  console.log(title + description);


  return(
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText className="whitespace-pre-wrap">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
}