import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import GetTaskData from '../../getTaskData';
import { Backdrop, CircularProgress } from '@mui/material';

// const data = await GetTaskData()
export default function MoveCurrentTask(props) {
  const [load, setLoad] = React.useState(false);
  const [value, setValue] = React.useState(1);

  const handleChange = (event) => {
    
        setValue(event.target.value);
    };

  const handleMove = async () => {
    const data = await GetTaskData()
    const dataKeys = Object.keys(data)
    let currKey = null
    for (let i = 0; i < dataKeys.length; i++) {
      console.log(i + '   ' + data[dataKeys[i]].GroupID, value)
      if(data[dataKeys[i]].GroupID === value) {
        console.log(data[dataKeys[i]].GroupID, value)
        currKey = dataKeys[i]
      }
    }
    setLoad(true)
    const curData = await fetch(`https://autorshtrih-default-rtdb.europe-west1.firebasedatabase.app/task/${props.keycolumn}/Tasks/${props.keytask}.json`, {
      method: 'GET'
    }).then(response => response.json())
    console.log(dataKeys, value)
    await fetch(`https://autorshtrih-default-rtdb.europe-west1.firebasedatabase.app/task/${currKey}/Tasks.json`, {
      method: 'post',
        body: JSON.stringify(curData),
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
              "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
             "Access-Control-Allow-Methods": "PUT,POST,GET,PATCH"
        }
    }).then(response => response.json())
    .then(data => console.log(data))
    await fetch(`https://autorshtrih-default-rtdb.europe-west1.firebasedatabase.app/task/${props.keycolumn}/Tasks/${props.keytask}.json`, {
      method: 'DELETE',
      headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
         "Access-Control-Allow-Methods": "POST,GET,PATCH,DELETE"
    }
    }).then(response => console.log(response))
    setOpen(false);
     window.location.reload();
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  function renderSelectMenu() { 
    let data = Object.keys(props.data) 
    // console.log(data)
    return (
    data.map(key => (
        <MenuItem key={props.data[key].GroupID} value={props.data[key].GroupID}>{props.data[key].Group}</MenuItem>
    ))
  )}

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
          Переместить задачу
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={load}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{textAlign:'center'}}>
            Текущее местоположение задачи: {props.name}
            <br></br>
            Переместить в: 
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Age" value={value} onChange={handleChange}>
                {renderSelectMenu()}
            </Select>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button sx={{color: 'white'}} onClick={handleMove}>Подтвердить</Button>
        <Button sx={{color: 'grey'}} onClick={handleClose}>Закрыть</Button>

        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}