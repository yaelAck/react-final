import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
  <ToDo />
  {/* <Header /> */}
  <Routes>
    <Route path="/logIn"></Route>
    <Route path="/home" ></Route>
    <Route path="/toDo" ></Route>
    <Route path="/posts" ></Route>
    <Route path="/albums" ></Route>
    <Route path="*"></Route>
  </Routes>
  </div>
  );
}

export default App;
