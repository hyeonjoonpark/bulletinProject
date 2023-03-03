import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className='navWrap'>
    
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

    </div>
    </>
  );
}

export default Nav;