import * as React from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from "react-router-dom";

export default function TaskCard(props) {
    return (
      
     <Box className='card' sx={{ minWidth: 275 }}>
      {console.log(props)}
        <Card variant="outlined"><React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.client} ({props.inn})
      </Typography>
      <Typography variant="h5" component="div">
        {props.title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.rank}
      </Typography>
      <Typography variant="body2">
        {props.desc}
        <br />
      </Typography>
    </CardContent>
    <CardActions>
    <Link to={`../tasks/${props.id}`}><Button size="small">{props.button1}</Button></Link>
    <Link><Button size="small">{props.button2}</Button></Link>
    </CardActions>
  </React.Fragment></Card>
      <Outlet/>
      </Box>
    );
  }
  
  