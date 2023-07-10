import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import {FileUploader} from './components/FileUploader';

function App() {
  const user = localStorage.getItem("token");
  const [file, setFile] = useState();
  const onSuccess = (savedFile) => {
    setFile(savedFile)
    };
  return (
    <div>
      <Routes>
        {user && <Route path="/" exact element={<Main/>}/>}
        {user && <Route path="/files" exact element={<FileUploader onSuccess ={onSuccess}/>}/>}
        <Route path = "/signup" exact element ={<Signup/>}/>
        <Route path = "/login" exact element ={<Login/>}/>
        <Route path = "/" exact element ={<Navigate replace to="/login" />}/>     
      </Routes>
      <ToastContainer/> 
    </div>
  );
}

export default App;
