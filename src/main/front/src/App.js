import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./component/admin/Posts";
import Pages from "./component/admin/Pages";
import Category from "./component/admin/Category";
import Notices from "./component/admin/Notices";
import Templates from "./component/admin/Templates";
import Setting_contents from "./component/admin/Setting_contents";
import Main from "./component/admin/main";



function App() {
    return (
        <div id="kakaoContent" role="main">
            <div id="cMain">
                <BrowserRouter>
                    <Routes>
                        <Route path="/manage" element={<Main />}> </Route>
                        <Route path="/manage/posts" element={<Posts />}> </Route>
                        <Route path="/manage/pages" element={<Pages />}> </Route>
                        <Route path="/manage/category" element={<Category />}> </Route>
                        <Route path="/manage/notices" element={<Notices />}> </Route>
                        <Route path="/manage/templates" element={<Templates />}> </Route>
                        <Route path="/manage/setting/contents" element={<Setting_contents />}> </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}
export default App;



