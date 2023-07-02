import React from 'react';
import LoginContent from './LoginContent';
import LoginHeader from './LoginHeader';
import './css/gnb.min.css';
import './css/top.css';

const Login = () => {
    return (
        <div id="kakaoWrap">
            <LoginHeader/>
            <hr class="hide"></hr>
            <LoginContent/>
            <hr class="hide"></hr>
        </div>
    )
}

export default Login;