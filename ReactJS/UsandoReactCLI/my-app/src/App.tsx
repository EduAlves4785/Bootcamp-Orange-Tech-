import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Feed } from "./pages/feed";
import {Home}from './pages/home'
import { Hooks } from "./pages/hooks";
import {Login} from './pages/login'

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/hooks' element={<Hooks/>}/>
      </Routes>
    </Router>
  );
}

export default App;
