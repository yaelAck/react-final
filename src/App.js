import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LogIn from './components/Login';
import { Home } from './components/Home';
import { Info } from './components/Info.js';
import { Logout } from './components/Logout.js';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/logIn" element={<LogIn />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/toDo" element={<ToDo />}></Route>
        {/* <Route path="/posts" element={<Posts />}></Route>
    <Route path="/albums" element={<Albums />}></Route> */}
        <Route path="/info" element={<Info />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="*"></Route>
      </Routes>
      <ToDo />
    </div>
  );
}

export default App;
