import React from 'react';
import profile from "../../img/admin/profile.png";
import "../../css/admin/font.css";
import "../../css/admin/gnb.min.css";
import "../../css/admin/photo.css";
import "../../css/admin/common.css";
import "../../css/admin/KeditorPhotosEditor.min.css";

function Menu() {
    return (
        <div id="mFeature">
            <div className="aside_profile">
                <h3 className="screen_out">프로필</h3>
                <div className="wrap_thumb">
                    <a href="/manage/setting/blog">
                        <img src={profile} width="214" height="214" className="thumb_img" alt="" />
                    </a>
                </div>
                <div className="wrap_cont"><strong className="tit_profile">우영세</strong>
                    <a href="https://uyoungse.tistory.com" target="_blank" className="link_profile">
                        <span className="txt_url">uyoungse.tistory.com</span>
                        <span className="area_ico">
                                <span className="ico_blog ico_blank"></span>
                            </span>
                    </a>
                </div>
            </div>
            <div className="aside_write">
                <h3 className="screen_out">글 쓰기 바로가기</h3>
                <a href="/manage/post" className="link_write">쓰기</a>
                <a href="#" className="btn_open">
                    <span className="txt_bar"></span>
                    <span className="ico_blog ico_open">글 쓰기 메뉴 열기</span>
                </a>
                <div className="wrap_menu hide">
                    <ul className="list_write">
                        <li>
                            <a href="/manage/post" className="link_list">글</a>
                        </li>
                        <li>
                            <a href="/manage/notice" className="link_list">공지</a>
                        </li>
                        <li>
                            <a href="/manage/template" className="link_list">서식</a>
                        </li>
                        <li>
                            <a href="/manage/page" className="link_list">페이지</a>
                        </li>
                    </ul>
                    <a href="#" className="btn_close">
                        <span className="ico_blog ico_close">글 쓰기 메뉴 닫기</span>
                    </a>
                </div>
            </div>
            <div id="kakaoLnb" className="aside_menu" role="navigation">
                <h3 className="screen_out">블로그 관리센터 메뉴</h3>
                <div className="wrap_menu">
                    <a className="tit_menu tit_line" href="/manage/"  style={{ textDecoration: 'none' }}>
                        <span className="link_menu"> <span className="ico_blog ico_home"></span>블로그관리 홈</span>
                    </a>
                </div>
                <div className="wrap_menu">
                    <strong className="tit_menu on">
                        <span className="ico_blog ico_post"></span>콘텐츠</strong>
                    <ul className="list_menu">
                        <li>
                            <a className="link_menu on" href="/manage/posts" aria-current="page">글
                                관리</a>
                        </li>
                        <li>
                            <a className="link_menu" href="/manage/pages">페이지 관리</a>
                        </li>
                        <li>
                            <a className="link_menu" href="/manage/category">카테고리 관리</a>
                        </li>
                        <li>
                            <a className="link_menu" href="/manage/notices">공지 관리</a>
                        </li>
                        <li>
                            <a className="link_menu" href="/manage/templates">서식 관리</a>
                        </li>
                        <li>
                            <a className="link_menu" href="/manage/setting/contents">설정</a>
                        </li>
                    </ul>
                </div>
                <div className="wrap_menu">
                    <strong className="tit_menu">
                        <span className="ico_blog ico_reply"></span>댓글·방명록
                    </strong>
                    <ul className="list_menu">
                        <li>
                            <a className="link_menu" href="/manage/comments">댓글 관리</a>
                        </li>
                        <li>
                            <a className="link_menu" href="/manage/guestbook">방명록 관리</a>
                        </li>
                        <li>
                            <a className="link_menu" href="/manage/setting/comments">설정</a>
                        </li>
                    </ul>
                </div>
                <div className="wrap_menu">
                    <strong className="tit_menu">
                        <span className="ico_blog ico_analysis"></span>통계
                    </strong>
                    <ul className="list_menu">
                        <li>
                            <a className="link_menu" href="/manage/statistics/blog">방문 통계</a>
                        </li>
                        <li>
                            <a className="link_menu" href="/manage/statistics/referrer">유입 경로</a>
                        </li>
                    </ul>
                </div>
                <div className="wrap_menu">
                    <a className="tit_menu tit_line" href="/manage/revenue"  style={{ textDecoration: 'none' }}>
                        <span className="link_menu"> <span className="ico_blog ico_revenue"></span>수익</span>
                    </a>
                </div>
                <div className="wrap_menu">
                    <strong className="tit_menu">
                        <span className="ico_blog ico_skin"></span>꾸미기
                    </strong>
                    <ul className="list_menu">
                        <li>
                            <a className="link_menu" href="/manage/design/skin">스킨 변경</a>
                        </li>
                        <li>
                            <a href="/manage/design/skin/edit" target="_blank" className="link_menu">스킨
                                편집
                                <span className="ico_blog ico_blank"></span>
                            </a>
                        </li>
                        <li>
                            <a className="link_menu" href="/manage/design/sidebar">사이드바</a>
                        </li>
                        <li>
                            <a className="link_menu" href="/manage/design/menu">메뉴</a>
                        </li>
                        <li>
                            <a className="link_menu" href="/manage/design/mobile">모바일</a>
                        </li>
                        <li>
                            <a className="link_menu" href="/manage/design/setting">메뉴바/구독 설정</a>
                        </li>
                    </ul>
                </div>
                <div className="wrap_menu">
                    <a className="tit_menu tit_line" href="/manage/plugins"  style={{ textDecoration: 'none' }}>
                        <span className="link_menu"><span className="ico_blog ico_plugin"></span>플러그인</span>
                    </a>
                </div>
                <div className="wrap_menu">
                    <strong className="tit_menu">
                        <span className="ico_blog ico_link"></span>링크
                    </strong>
                    <ul className="list_menu">
                        <li>
                            <a className="link_menu" href="/manage/link/my">나의 링크</a>
                        </li>
                    </ul>
                </div>
                <div className="wrap_menu">
                    <strong className="tit_menu">
                        <span className="ico_blog ico_setting"></span>관리
                    </strong>
                    <ul className="list_menu">
                        <li>
                            <a className="link_menu" href="/manage/setting/blog">블로그</a>
                        </li>
                        <li>
                            <a className="link_menu" href="/manage/teamblog">팀블로그</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Menu;