import {Routes, Route, Link} from "react-router-dom";
// import './App.css'
import ToDoView from "./views/ToDoView";

function App() {


  return (
    <>
      <h1> This is the App.jsx </h1>
      <Routes>
        <Route path="/" element={<ToDoView />} />
      </Routes>
    </>

);
}



export default App
