import React, { Component } from 'react';
import Gnb from "./component/common/gnb";

import './css/common/common.css';

class App extends Component {
    render() {
        return (
            <div id="kakaoWrap" className="tistory_type1 tistory_type4">
                <Gnb/>
            </div>
        );
    }
}

export default App;