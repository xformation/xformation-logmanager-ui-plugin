import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ConfirmDialog(props: any) {
  const [open, setOpen] = React.useState(false);
  
//   const handleClick = (userChoice: boolean) => {
//     console.log("handleClick : userChoice -> "+ userChoice)
//     setChoice(userChoice);
//     handleClose;
//   };

  const handleClose = () => {
    setOpen(false);
    if (props.handleCloseConfirmDialog) {
        console.log("calling handleCloseConfirmDialog");
        props.handleCloseConfirmDialog();
        return;
    }
  };

  const onConfirm = () => {
    console.log("onConfirm clicked ")
    setOpen(false);
    if(props.handleConfirmDelete){
        props.handleConfirmDelete(props.objectType, props.objectId);
        return;
    }
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title">{props.titleMsg}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onConfirm} color="primary" autoFocus>
                Ok
            </Button>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
