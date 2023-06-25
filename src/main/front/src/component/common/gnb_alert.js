import React from 'react';
import Commons from "../../script/common";
import Gnbs from "../../script/gnb";
import '../../css/common/gnb.css';

const GnbAlert = () => {
    const toggle = () => Commons.toggle_gnb_layer('gnb_alert_box', Gnbs.hide_all_header_layers);
    return (
        <>
            <a href="#" className="link_alarm" onClick={toggle}>
                <span className="img_common_tistory ico_alarm ico_white">알림</span>
                <span className="img_common_tistory ico_alarm ico_black">알림</span>
            </a>
            <div id="gnb_alert_box" className="header_layer layer_news" style={ {display:'none'} }>
                <div className="inner_header_layer"><h2 className="tit_list">새소식<em>0</em></h2>
                    <ul className="list_layer" style={ {maxHeight:'400px', overflowY: 'auto'} }>
                        <li className="">
                            <a href="#" className="link_cont" target="_blank">
                                <img src="https://i1.daumcdn.net/thumb/C72x72/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fblog%2Fadmin%2Fprofile_default_05.png" width="36" height="36" className="thumb_profile" alt=""/>
                                <div className="wrap_cont">
                                    <p className="desc_news"><em>안가도</em>님이 댓글을 남겼습니다.</p>
                                    <p className="desc_news">"안녕"</p>
                                    <span className="desc_name">[1회차] React.js 와 Vue.js 공통점과 차이점은?_jk</span>
                                </div>
                                <dl className="list_date">
                                    <dt className="screen_out">알람온시간</dt>
                                    <dd>2023.04.13</dd>
                                </dl>
                            </a>
                        </li>
                        <li className="">
                            <a href="#" className="link_cont" target="_blank">
                                <img src="https://i1.daumcdn.net/thumb/C72x72/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fblog%2Fadmin%2Fprofile_default_06.png" width="36" height="36" className="thumb_profile" alt=""/>
                                <div className="wrap_cont">
                                    <p className="desc_news"><em>찬녀여여여영</em>님이 댓글을 남겼습니다.</p>
                                    <p className="desc_news">[비밀] "비밀글인데요"</p>
                                    <span className="desc_name">[2회차] mysql 설치 및 오류해결 _ty</span>
                                </div>
                                <dl className="list_date">
                                    <dt className="screen_out">알람온시간</dt>
                                    <dd>2023.04.13</dd>
                                </dl>
                            </a>
                        </li>
                        <li className="on">
                            <a href="#" className="link_cont" target="_blank">
                                <img src="https://i1.daumcdn.net/thumb/C72x72/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fblog%2Fadmin%2Fprofile_default_04.png" width="36" height="36" className="thumb_profile" alt=""/>
                                <div className="wrap_cont">
                                    <p className="desc_news"><em>찬녀영</em>님이 댓글을 남겼습니다.</p><p
                                    className="desc_news">"안녕하세요"</p><span className="desc_name">[2회차] mysql 설치 및 오류해결 _ty</span></div>
                                <dl className="list_date">
                                    <dt className="screen_out">알람온시간</dt>
                                    <dd>2023.04.13</dd>
                                </dl>
                            </a>
                        </li>
                        <li className="">
                            <a href="#" className="link_cont" target="_blank">
                                <img src="https://i1.daumcdn.net/thumb/C72x72/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fblog%2Fadmin%2Fprofile_default_07.png" width="36" height="36" className="thumb_profile" alt=""/>
                                <div className="wrap_cont">
                                    <p className="desc_news"><em>지수</em>님이 방명록에 글을 남겼습니다.</p>
                                    <p className="desc_news">"비회원 방명록"</p><span className="desc_name">우영세</span>
                                </div>
                                <dl className="list_date">
                                    <dt className="screen_out">알람온시간</dt>
                                    <dd>2023.04.11</dd>
                                </dl>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default GnbAlert;