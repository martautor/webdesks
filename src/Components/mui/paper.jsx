import * as React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function MyPaper(props) {
    return (
        <ThemeProvider theme={darkTheme}>
            <Paper sx={{width: '15%', margin: '10px', height: '10px', textAlign: 'center', marginTop: '32px'}}>
                {props.text}
            </Paper>
        </ThemeProvider>
    )
}