import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import NewColumnForm from './forms/newColumnForm'
import DeleteColumnForm from './forms/deleteColumnForm';
export default function DialogSettings(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <React.Fragment>
      <Button sx={{position:'absolute', bottom: '400px',left:'1700px', color:'black', height:'25px'}} onClick={handleClickOpen}>
        {props.buttonHandle}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Настройки отображения
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{textAlign:'center'}}>
            
            <NewColumnForm text='1' buttonHandle={<Button sx={{color:'white'}}>Добавить колонку</Button>}/>
            <br></br>
            <br></br>
            <DeleteColumnForm text='1' buttonHandle={<Button sx={{color:'white'}}>Удалить колонку</Button>}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button sx={{color: 'grey'}} onClick={handleClose}>Закрыть</Button>

        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}