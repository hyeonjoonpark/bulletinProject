/* eslint-disable */
import './App.css';
import React, { Component } from 'react';
import logo from "./images/logo.png";
import Login from "./component/Login.js";
import {Routes, BrowserRouter,  Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className="logoWrap">
          <img src={logo} className="logoImg" />
      </div>

      <div className="titleWrap">
        <a>The Best board of today</a>
      </div>

      <div className="boardWrap">
        Hello Dis is a BoardWrap.
      </div>

      <div className='navWrap'>
        <BrowserRouter>
          <button className='button'><Link to="/login">로그인</Link></button>

          <button className='button'><a>마이페이지</a></button>

          <button className='button'><a>게시물작성</a></button>

          <button className='button'><a>채팅</a></button>

          <button className='button'><a>문의하기</a></button>

            <Routes>
              <Route path='/login' element={ <Login /> } />
            </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;