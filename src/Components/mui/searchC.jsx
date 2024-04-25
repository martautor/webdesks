import * as React from 'react';
import Box from '@mui/material/Box';

export default function SearchC() {
  // function defaultValue() {
  //   const rank = props.tasks.key
  //   if (rank === 'high') return values[0]
  //     else if(rank === 'low') return values[1]
  //       else return values[2]
  // }
  return (
    <div className='tabs'>

      <br />
      <Box sx={{ width: 300, textAlign: 'center', alignItems: 'center'}}>
        Название
        {/* {props.tasks.key.map(key => console.log(key))} */}
      </Box>
    </div>
  );
  
}