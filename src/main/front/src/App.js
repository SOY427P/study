import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Posts from "./component/admin/Posts";
import Pages from "./component/admin/Pages";
import Category from "./component/admin/Category";
import Notices from "./component/admin/Notices";
import Templates from "./component/admin/Templates";
import Setting_contents from "./component/admin/Setting_contents";
import Main from "./component/admin/main";
import Login from './component/login/Login';
import MainPage from './component/main/MainPage';


import './css/common/common.css';

function App() {
    return (
        <>
            <div id="kakaoWrap">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainPage/>}> </Route>
                        <Route path="/login" element={<Login/>}></Route>
                        <Route path="/main" element={<Main/>}> </Route>
                        <Route path="/manage/posts" element={<Posts/>}> </Route>
                        <Route path="/manage/pages" element={<Pages/>}> </Route>
                        <Route path="/manage/category" element={<Category/>}> </Route>
                        <Route path="/manage/notices" element={<Notices/>}> </Route>
                        <Route path="/manage/templates" element={<Templates/>}> </Route>
                        <Route path="/manage/setting/contents" element={<Setting_contents/>}> </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;