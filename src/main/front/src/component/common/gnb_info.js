import React from 'react';
import Commons from "../../script/common";
import Gnbs from "../../script/gnb";
import '../../css/common/gnb.css';

const GnbInfo = () => {
    const toggle = () => Commons.toggle_gnb_layer('gnb_profile_box', Gnbs.hide_all_header_layers);
    return (
        <>
            <a className="link_profile" onClick={toggle}>
                <img src="https://i1.daumcdn.net/thumb/C100x100/?scode=mtistory2&amp;fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fstatic%2Fmanage%2Fimages%2Fr3%2Fdefault_S.png"
                     width="36" height="36" className="thumb_profile" alt=""/>
            </a>
            <div id="gnb_profile_box" className="header_layer layer_profile #sideToolBar" style={ {display:'none'} }>
                <div className="inner_header_layer">
                    <h2 className="screen_out">개인정보</h2>
                    <div className="info_profile" data-tiara-layer="gnb_profile">
                        <div className="wrap_account">
                            <a href="#" className="txt_id txt_id_type2">our young world</a>
                        </div>
                        <span className="txt_email">imoxionst@kakao.com</span>
                        <a href="#" className="link_setting link_setting_type2">계정관리</a>
                    </div>
                    <div className="wrap_list #blogList" style={ {maxHeight:'300px'} }>
                        <div><h3 className="tit_list_type">운영중인 블로그</h3>
                            <div className="info_profile info_profile_type1">
                                <a href="#" className="txt_id">우영세</a>
                                <a href="#" className="img_common_tistory link_edit">쓰기</a>
                                <a href="#" className="img_common_tistory link_setting">블로그 관리</a>
                            </div>
                        </div>
                    </div>
                    <button className="btn_logout">로그아웃</button>
                </div>
            </div>
        </>
    );
}

export default GnbInfo;