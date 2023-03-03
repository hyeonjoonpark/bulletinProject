/* eslint-disable */
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import logo from "./images/logo.png";
import Login from "./component/Login";
import Chat from "./component/Chat";
import Ask from "./component/Ask";
import Mypage from './component/Mypage';
import Writing from './component/Writing';
import Nav from './component/Nav.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/mypage" component={ Mypage } />
          <Route exact path="/writing" component={ Writing } />
          <Route exact path="/chat" component={ Chat } />
          <Route exact path="/ask" component={ Ask } />
        </Switch>
      </BrowserRouter>
        <div className="logoWrap">
            <img src={ logo } className="logoImg" />
        </div>

        <div className="titleWrap">
          <a>The Best board of today</a>
        </div>

        <div className="boardWrap">
          Hello Dis is a BoardWrap.
        </div>
    </div>
  );
}

export default App;