import logo from "./logo.svg";
import "./App.css";
import ToDo from "./components/ToDo";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import LogIn from "./components/Login";
import Posts from "./components/Posts";
import Album from "./components/Album";
import Home from "./components/Home";
import { useEffect, useMemo, useState } from "react";
import Post from "./components/Post";

function App() {
    const [userId, setUserId] = useState('');
  function changeUser(id){
    console.log(id);
    console.log(33333333)
    setUserId(id)
  }
  console.log(userId);
 

  return (
    <div>
      <Header id={userId}/>
      <Routes>
      <Route path="/" element={<LogIn setUserId={changeUser}/>}></Route>
        <Route path="/user">
          <Route path=':id'>
            <Route path="home" element={<Home id={userId}/>}></Route>
            <Route path="toDo" element={<ToDo id={userId}/>}></Route>
            <Route path="posts" element={<Posts id={userId}/>}>
            </Route>
            <Route path="posts/:id" element={<Post />}></Route>
            <Route path="albums" element={<Album id={userId}/>}></Route>
            <Route path="*"></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
