import React, { useEffect } from 'react';
import GnbInfo from "./gnb_info";
import GnbAlert from "./gnb_alert";

import Gnbs from "../../script/gnb";

import '../../css/common/gnb.css';

const Gnb = () => {

    useEffect(() => {
        const handle_click_area = (event) => {
            const is_child_of_header_layer = event.target.closest('.header_layer');
            const c_list = event.target.classList;
            const is_trigger_btn = c_list.contains("thumb_profile") || c_list.contains("ico_alarm");
            if (!is_child_of_header_layer && !is_trigger_btn) Gnbs.hide_all_header_layers();
        };
        document.addEventListener('mouseup', handle_click_area);

        // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리합니다.
        return () => {
            document.removeEventListener('mouseup', handle_click_area);
        };
    }, []);

    return (
            <div id="kakaoHead" role="banner" className="kakao_head gnb_mv">
                <div className="inner_header tistory">
                    <h1>
                        <a href="#" id="kakaoServiceLogo" className="#logo link_logo">
                            <span className="img_common_tistory tit_tistory tit_tistory_white">티스토리</span>
                            <span className="img_common_tistory tit_tistory tit_tistory_black"></span>
                        </a>
                    </h1>
                    <div id="kakaoGnb" role="navigation" className="gnb_tistory">
                        <h2 className="screen_out">서비스 주요 메뉴</h2>
                        <ul className="list_gnb">
                            <li className=""><a href="#" className="#feed link_gnb">피드</a></li>
                            <li className=""><a href="#" className="#story link_gnb">스토리</a></li>
                            <li className=""><a href="#" className="#skin link_gnb">스킨</a></li>
                            <li className=""><a href="#" className="#forum link_gnb">포럼</a></li>
                        </ul>
                    </div>
                    <div className="info_tistory">
                        <div className="profile_tistory">
                            <a href="#" className="btn_tistory btn_log_info">글쓰기</a>
                            <GnbAlert/>
                            <GnbInfo/>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Gnb;