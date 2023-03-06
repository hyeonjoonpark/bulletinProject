/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './Login.js'
import Mypage from './Mypage.js'
import Writing from './Writing.js'
import Chat from './Chat.js'
import Ask from './Ask.js'
import { REDIRECT_URI, REST_API_KEY } from "../important/Key.js";
import kakaoLogin from '../server/KakaoLogin';

function Nav() {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }
  return (
    <>
        <div className='navWrap'>
            <nav>  
                <button className='button' onClick={handleLogin}>로그인</button>
                <button className='button' onClick={() => {
                    window.open('/mypage', <Mypage/>, "mypage")
                }}>마이페이지</button>
                <button className='button'>게시물작성</button>
                <button className='button'>채팅</button>
                <button className='button'>문의하기</button>

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