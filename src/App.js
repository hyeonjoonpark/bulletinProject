/* eslint-disable */
import './App.css';
import React, { useState } from 'react';
import logo from "./images/logo.png";
import Nav from './component/Nav.js'

function Modal(){
  return (
      <div className="introModal">
        <br/>
        <h1>* About *</h1>
        <p>자신의 일상과 서로의 지식을 공유하는 복합 사이트</p><br/>
        <br/>
        <h1>* Warning *</h1>
        <p>1.욕설, 패드립 등 불필요한 말은 삼가해주세요</p>
        <p>2.신고접수 시 계정이 정지 될 수 있습니다</p><br/>
        <br/>
        <h1>* etc *</h1>
        <p>즐거운 사용바랍니다</p>
        <p>문제 발생시 문의하기를 눌러주시기 바랍니다</p>
      </div>
  )
}

function App() {
  let [modal, setModal] = useState(false);
  return (
    <div className="App">
        <Nav />

        <div className="logoWrap">
            <img src={ logo } className="logoImg" />
        </div>

        <div className="titleWrap">
          <a>About The Don't Worry</a>
        </div>

        <div className="boardWrap">
          <button className='modalBtn' onClick={ () => { setModal(!modal) } }>INTRODUCE</button>
          {
            modal === true ? <Modal /> : null
          }
        </div>
    </div>
  );
}

export default App;