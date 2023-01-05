import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Logout } from './components/Logout.js';
import Albums from "./components/Albums";
import Info from './components/Info.js';
import Album from "./components/ Album";
import LogIn from "./components/Login";
import Posts from "./components/Posts";
import Tasks from "./components/Tasks";
import Home from "./components/Home";
import Post from "./components/Post";
import "./App.css";

function App() {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('')

  useEffect(() => {
    if (localStorage.getItem('currentUser') !== null) {
      setUserId(JSON.parse(localStorage.getItem('currentUser')).id)
      setUserName(JSON.parse(localStorage.getItem('currentUser')).username)
    }
  }, [userId])

  function changeUser(id) {
    setUserId(id)
  }

  return (
    <Routes>
      <Route path="/" element={<LogIn setUserId={changeUser} />}></Route>
      <Route path="/user">
        <Route path=':id'>
          <Route path="home" element={<Home id={userId} userName={userName} />}></Route>
          <Route path="tasks" element={<Tasks id={userId} />}></Route>
          <Route path="info" element={<Info id={userId} />}></Route>
          <Route path="logout" element={<Logout />}></Route>
          <Route path="posts" element={<Posts id={userId} />}></Route>
          <Route path="posts/:id" element={<Post id={userId} />}></Route>
          <Route path="albums" element={<Albums id={userId} />}></Route>
          <Route path="albums/:id" element={<Album id={userId} />}></Route>
          <Route path="*"></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
