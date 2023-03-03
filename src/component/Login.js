/* eslint-disable */
import React, { Component } from 'react';

class Login extends React.Component {
    render() {
        return(
            <div className="Login">
                <div>
                <Routes>
  <Route path='/login' element={ <Login /> } />
  <Route path='/mypage' element={ <Mypage /> } />
  <Route path='/writing' element={ <Writing /> } />
  <Route path='/chat' element={ <Chat /> } />
  <Route path='/ask' element={ <Ask /> } />
</Routes>
                </div>
            </div>
        )
    }
}

export default Login;