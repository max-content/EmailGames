import {Routes, Route, Link} from "react-router-dom";
// import './App.css'
import ToDoView from "./views/ToDoView";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
      palette: {
        mode: 'dark',
        background: {
          default: '#170233', 
          paper: '#1d0d2d',
        },
        primary: {
          main: '#e00065',
        },
        secondary: {
          main: '#9c27b0',
        },
      },
  });

function App() {


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<ToDoView />} />
      </Routes>
    </ThemeProvider>
    

);
}

export default App
