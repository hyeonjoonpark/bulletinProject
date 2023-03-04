/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './Login.js'
import Mypage from './Mypage.js'
import Writing from './Writing.js'
import Chat from './Chat.js'
import Ask from './Ask.js'

function Nav() {
  return (
    <>
        <div className='navWrap'>
            <nav>
                <Link to="/login">
                    <button className='button'>로그인</button>
                </Link>

            
                <Link to="/mypage">
                    <button className='button'>마이페이지</button>
                </Link>

            
                <Link to="/writing">
                    <button className='button'>게시물작성</button>
                </Link>

            
                <Link to="/chat">
                    <button className='button'>채팅</button>
                </Link>

            
                <Link to="/ask">
                    <button className='button'>문의하기</button>
                </Link>
            </nav>

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/login" element={<Mypage />} />
                <Route path="/login" element={<Writing />} />
                <Route path="/login" element={<Chat />} />
                <Route path="/login" element={<Ask />} />
            </Routes>
        </div>
    </>
  );
}

export default Nav;