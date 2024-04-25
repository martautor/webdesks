import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import GetTaskData from '../../getTaskData';
import { MenuItem, Select, TextField } from '@mui/material';

const data = await GetTaskData()

export default function DeleteColumnForm(props) {
  const [textFieldValue, setTextFieldValue] = React.useState('')
  const [value, setValue] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  }
  const handleChange = (event) => {
    
    setValue(event.target.value);
};
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteColumn = async () => {
    const data = await GetTaskData()
    if (textFieldValue !== 'Подтвердить') {
      return alert('Не верно введенное значение')
    } if(data === null || data === undefined) {
      return alert('und or null')
    }
    
    const dataKeys = Object.keys(data)
    let currKey = null
    for (let i = 0; i < dataKeys.length; i++) {
      console.log(i + '   ' + data[dataKeys[i]].GroupID, value)
      if(data[dataKeys[i]].GroupID === value) {
        console.log(data[dataKeys[i]].GroupID, value)
        currKey = dataKeys[i]
      }
    }
    const saveData = await fetch(`https://autorshtrih-default-rtdb.europe-west1.firebasedatabase.app/task/${currKey}/Tasks/.json`, {
      method: 'GET'
    }).then(response => response.json())
    .then(response => Object.keys(response).map(key => (response[key])))
    .catch(error => console.error(error))
    await saveData
    
    console.log(currKey, saveData)

      await fetch(`https://autorshtrih-default-rtdb.europe-west1.firebasedatabase.app/task/${currKey}/.json`, {
          method: 'DELETE',
          headers: {
              "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*",
              'Content-Type': 'application/json',
              "Access-Control-Allow-Methods": "POST,GET,PATCH"
          }
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))

      // saveData.moved = true
    await fetch(`https://autorshtrih-default-rtdb.europe-west1.firebasedatabase.app/deletedTasks/.json`, {
      method: 'post',
        body: JSON.stringify(saveData),
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
              "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            "Access-Control-Allow-Methods": "PUT,POST,GET,PATCH"
        }
      }
    ).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    //  setOpen(false);
    //  window.location.reload();
  }

  function renderSelectMenu() { 
    if(data === null || data === undefined) {
      return console.log('und or null')
    }
    let dataT = Object.keys(data)
    
    return (
    dataT.map(key => (
        <MenuItem value={data[key].GroupID}>{data[key].Group}</MenuItem>
    ))
  )
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
            {/* <Button onClick={handleClose} sx={{color:'white'}}>Добавить колонку</Button> */}
            {/* <TextField value={textFieldValue} onChange={handleTextFieldChange} label="Название колонки" id="outlined-size-small" size="small" sx={{marginTop: '5px'}}/> */}
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="column" value={value} onChange={handleChange}>
                {/* <MenuItem value={1}>E</MenuItem> */}
                {renderSelectMenu()}
            </Select>
            <br></br>
            <h3 sx={{color:'red'}}>Примечание: Все задачи с данной колонки удалятся.</h3>
            Введите "Подтвердить", чтобы продолжить операцию.
            <br />
            <br />
            <TextField id='success' onChange={handleTextFieldChange} value={textFieldValue} size='small'/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button sx={{color: 'white'}} onClick={deleteColumn}>Подтвердить</Button>
          <Button sx={{color: 'grey'}} onClick={handleClose}>Закрыть</Button>

        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}