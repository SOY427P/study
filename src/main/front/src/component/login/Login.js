import React from 'react';
import LoginContent from './LoginContent';
import LoginHeader from './LoginHeader';
import '../../css/login/gnb.min.css';
import '../../css/login/top.css';

const Login = () => {
    return (
        <div>
            <LoginHeader/>
            <hr class="hide"></hr>
            <LoginContent/>
            <hr class="hide"></hr>
        </div>
    )
}

export default Login;