import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import GetTaskData from '../../getTaskData';

export default function NewColumnForm(props) {
  const [textFieldValue, setTextFieldValue] = React.useState('')
  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const createColumn = async () => {
    const data = await GetTaskData()
    if(data === null || data === undefined) {
      let dataInput = {
        Group: textFieldValue,
        GroupID: 0,
        Tasks: []
    }
    await fetch('https://autorshtrih-default-rtdb.europe-west1.firebasedatabase.app/task.json', {
        method: 'POST',
        body: JSON.stringify(dataInput),
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
              "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
             "Access-Control-Allow-Methods": "POST,GET,PATCH"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
     setOpen(false);
     window.location.reload();
    }
    const dataKeys = Object.keys(data)
    const lastKey = dataKeys[dataKeys.length - 1]
    let dataInput = {
        Group: textFieldValue,
        GroupID: data[lastKey].GroupID+1,
        Tasks: []
    }
    await fetch('https://autorshtrih-default-rtdb.europe-west1.firebasedatabase.app/task.json', {
        method: 'POST',
        body: JSON.stringify(dataInput),
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
              "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
             "Access-Control-Allow-Methods": "POST,GET,PATCH"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
     setOpen(false);
     window.location.reload();
  }
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
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
            <TextField value={textFieldValue} onChange={handleTextFieldChange} label="Название колонки" id="outlined-size-small" size="small" sx={{marginTop: '5px'}}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button sx={{color: 'white'}} onClick={createColumn}>Подтвердить</Button>
          <Button sx={{color: 'grey'}} onClick={handleClose}>Закрыть</Button>

        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}