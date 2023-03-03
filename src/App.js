/* eslint-disable */
import './App.css';
import React from 'react';
import logo from "./images/logo.png";
import Login from "./component/Login";
import Chat from "./component/Chat";
import Ask from "./component/Ask";
import Mypage from './component/Mypage';
import Writing from './component/Writing';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="logoWrap">
          <img src={ logo } className="logoImg" />
      </div>

      <div className="titleWrap">
        <a>The Best board of today</a>
      </div>

      <div className="boardWrap">
        Hello Dis is a BoardWrap.
      </div>

      <div className='navWrap'>

          <button className='button'>
            <Link to="/login">로그인</Link>
            <Routes>
  <Route path='/login' element={ <Login /> } />
  <Route path='/mypage' element={ <Mypage /> } />
  <Route path='/writing' element={ <Writing /> } />
  <Route path='/chat' element={ <Chat /> } />
  <Route path='/ask' element={ <Ask /> } />
</Routes>
          </button>

          <button className='button'>
            <Link to="/mypage">마이페이지</Link>
          </button>

          <button className='button'>
            <Link to="/writing">게시물작성</Link>
          </button>

          <button className='button'>
            <Link to="/chat">채팅</Link>
          </button>

          <button className='button'>
            <Link to="/ask">문의하기</Link>
          </button>
      </div>
    </div>
  );
}

export default App;