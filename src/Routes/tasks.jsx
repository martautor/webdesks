import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import '../app.css'
import { Link } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import DialogSettings from '../Components/mui/dialogSettings.jsx'
import GetTaskData from '../Components/getTaskData.jsx';
import MoveCurrentTask from '../Components/mui/forms/moveCurrentTask.jsx';
import getEmdedData from '../Components/functions/getEmdedData.jsx';

const data = await GetTaskData()
const Item = styled(Paper)(({ theme }) => ({
  marginTop: '5px',
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function render(obj) {
  if(obj === null || obj === undefined) {
    return (<Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', color:'darkred'}}>
      <h4>Нет задач, и колонок.</h4>
    </Box>)
  }
  let data = Object.keys(obj)
    return (<Box sx={{ width: '95%', marginTop: '15px', display: 'flex',
    flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center'}}>
      {data.map(key => (<Stack 
      key={obj[key].GroupID} sx={{display: 'flex', margin: '5px', marginTop: '5px'}} spacing={5} alignItems='center' >
      <Box key={obj[key].GroupID}sx={{ width: '74%', border: "1px solid grey", p: [2, 2, 2], borderRadius: '30px', m: 2, textAlign: 'center', marginTop: '1px', marginRight:'5px' }}>
        {obj[key].Group}</Box>
      {obj[key].Tasks === undefined || obj[key].Tasks === null ? <h5>Нет задач. </h5>: Object.keys(obj[key].Tasks).map(Tkey => (<Item key={obj[key].Tasks[Tkey].TaskID}
          sx={{margin: '0px'}} style={{marginTop: '15px'}}>
            {obj[key].Tasks[Tkey].TaskID}
            <br></br>
            {obj[key].Tasks[Tkey].TaskName}
            <br></br>
            {obj[key].Tasks[Tkey].TaskDesc}
            <br></br>
            {obj[key].Tasks[Tkey].Rank}
            <br></br>
            {obj[key].Tasks[Tkey].Client}
            <br></br>
            {obj[key].Tasks[Tkey].INN}
            <br></br>
            {obj[key].Tasks[Tkey].Agreement}
            <br></br>
            {obj[key].Tasks[Tkey].ServiceObject}
            <br></br>
            {obj[key].Tasks[Tkey].Equipment}
            <br></br>
            <ButtonGroup>
              <Link to={`../tasks/${obj[key].Tasks[Tkey].TaskID}`}><Button>ПЕРЕЙТИ</Button></Link>
                <MoveCurrentTask keytask={Tkey} keycolumn={key} name={obj[key].Group} id={obj[key].NameID} taskId={obj[key].Tasks[Tkey].TaskID} data={obj} text='1' buttonHandle='ПЕРЕМЕСТИТЬ'/>
            </ButtonGroup>
        </Item>))}
    </Stack>))}
    </Box>)
}

export default function Tasks() {
    return (
        <>                 
          {render(data)} 
          <DialogSettings text='1' buttonHandle={<SettingsIcon sx={{position: 'absolute'}} />}/>       
          {/* <GetTaskData/>   */}
        </>
    )
}
/* {data.map(key => (
          <Item  sx={{margin: '0px'}} style={{marginTop: '15px'}}>
            {obj[key].ID}
            <br></br>
            {obj[key].TaskName}
            <br></br>
            {obj[key].TaskDesc}
            <br></br>
            {obj[key].Rank}
            <br></br>
            {obj[key].Client}
            <br></br>
            {obj[key].INN}
            <br></br>
            {obj[key].Agreement}
            <br></br>
            {obj[key].ServiceObject}
            <br></br>
            {obj[key].Equipment}
            <br></br>
            <ButtonGroup>
              <Link to={`../tasks/${obj[key].ID}`}><Button>ПЕРЕЙТИ</Button></Link>
                <Button>ПЕРЕМЕСТИТЬ</Button>
            </ButtonGroup>
          </Item>))} */