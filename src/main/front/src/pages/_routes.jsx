import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import HomePage from "./home";
import ContentsPage from "./board";
import PagePage from "./page";
import CategoryPage from "./category";
import NoticePage from "./notice";
import TemplagePage from "./template";
import SettingsPage from "./settings";



import TeamsPage from "./template";


const Switch = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*//메인홈*/}
                <Route path="/home"element={ <HomePage /> }></Route>
                {/*콘텐츠 홈(글관리)*/}
                <Route path="/contents" element={ <ContentsPage /> }></Route>
                {/*콘텐츠 > 글 관리*/}
                <Route path="/contents/board" element={ <ContentsPage /> }></Route>
                {/*콘텐츠 > 페이지 관리*/}
                <Route path="/contents/page" element={ <PagePage /> }></Route>
                {/*콘텐츠 > 카테고리 관리*/}
                <Route path="/contents/category" element={ <CategoryPage /> }></Route>
                {/*콘텐츠 > 공지 관리*/}
                <Route path="/contents/notice" element={ <NoticePage /> }></Route>
                {/*콘텐츠 > 서식 관리*/}
                <Route path="/contents/template" element={ <TemplagePage /> }></Route>
                {/*콘텐츠 > 설정*/}
                <Route path="/contents/settings"element={ <SettingsPage /> }></Route>

            </Routes>
        </BrowserRouter>
    );
};

export default Switch ;
