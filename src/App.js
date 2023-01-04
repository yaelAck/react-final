import logo from "./logo.svg";
import "./App.css";
import ToDo from "./components/ToDo";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import LogIn from "./components/Login";
import Posts from "./components/Posts";
import Albums from "./components/Albums";
import Home from "./components/Home";
import { useEffect, useMemo, useState } from "react";
import Post from "./components/Post";
import Album from "./components/ Album";
import  Info  from './components/Info.js';
import { Logout } from './components/Logout.js';

function App() {
    const [userId, setUserId] = useState('');
    const [userName,setUserName] = useState('')
  function changeUser(id){
    setUserId(id)
  }
  console.log(userId);
 useEffect(()=>{
if(localStorage.getItem('currentUser') !== null){
setUserId(JSON.parse(localStorage.getItem('currentUser')).id)
setUserName(JSON.parse(localStorage.getItem('currentUser')).username)
}
 },[userId])

  return (
    <div>
      <Routes>
      <Route path="/" element={<LogIn setUserId={changeUser}/>}></Route>
        <Route path="/user">
          <Route path=':id'>
            <Route path="home" element={<Home id={userId} userName={userName}/>}></Route>
            <Route path="toDo" element={<ToDo id={userId}/>}></Route>
            <Route path="info" element={<Info id={userId}/>}></Route>
            <Route path="logout" element={<Logout />}></Route>
            <Route path="posts" element={<Posts id={userId}/>}></Route>
            <Route path="posts/:id" element={<Post id={userId}/>}></Route>
            <Route path="albums" element={<Albums id={userId}/>}></Route>
            <Route path="albums/:id" element={<Album id={userId}/>}></Route>     
            <Route path="*"></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
