import React from 'react';
import Menu from './Menu';


function Notices() {
    return (
        <>
            <Menu />
            <div id="mArticle">
                <div className="inner_article contents_article">
                    <h2 id="kakaoBody" className="screen_out">
                        티스토리 관리센터 본문
                    </h2>
                    <h3 className="tit_cont">
                        공지 관리<span className="txt_count"> 2</span>
                        <a href="/manage/notice?returnURL=/manage/notices" className="link_write">
                            공지 쓰기
                            <span className="ico_blog" />
                        </a>
                    </h3>
                    <div className="wrap_search">
                        <div className="check_blog">
                            <input type="checkbox" id="inpAllCheck" className="inp_check" />
                            <label htmlFor="inpAllCheck" className="ico_blog ico_checkbox">
                                선택 됨
                            </label>
                        </div>
                        <div className="search_blog">
                            <div className="filter_search">
                                <div className="opt_set">
                                    <button type="button" className="btn_opt">
                                        <span className="txt_ellip">제목</span>
                                        <span className="ico_blog ico_open" />
                                    </button>
                                    <div className="layer_opt">
                                        <label className="lab_set on">
                                            <input type="radio" className="inp_set" defaultValue="title" />
                                            <span className="txt_set txt_ellip">제목</span>
                                        </label>
                                        <label className="lab_set">
                                            <input
                                                type="radio"
                                                className="inp_set"
                                                defaultValue="content"
                                            />
                                            <span className="txt_set txt_ellip">내용</span>
                                        </label>
                                        <label className="lab_set">
                                            <input type="radio" className="inp_set" defaultValue="tag" />
                                            <span className="txt_set txt_ellip">태그</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <input
                                type="text"
                                className="tf_search"
                                title="검색어 입력"
                                placeholder="공지 관리에서 검색합니다."
                            />
                            <div className="info_search">
                                <button type="button" className="btn_search">
                                    검색<span className="ico_blog ico_search"> 열기</span>
                                </button>
                                <button type="button" className="btn_search btn_query" disabled="">
                                    <span className="ico_blog ico_search">검색 하기</span>
                                </button>
                                <button type="reset" className="btn_del">
                                    닫기
                                </button>
                            </div>
                        </div>
                        <div className="opt_blog">
                            <button type="button" className="btn_opt" disabled="">
                                변경
                                <span className="ico_blog ico_open" />
                            </button>
                            <span className="txt_change">
          <span className="ico_blog ico_change" />
        </span>
                            <div className="layer_opt layer_double">
                                <strong className="tit_opt">상태 변경</strong>
                                <ul className="list_opt">
                                    <li>
                                        <label className="lab_btn">
                                            공개
                                            <input type="button" className="btn_g" defaultValue="공개" />
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lab_btn">
                                            비공개
                                            <input type="button" className="btn_g" defaultValue="비공개" />
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lab_btn">
                                            삭제
                                            <input type="button" className="btn_g" defaultValue="삭제" />
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wrap_list">
                        <ul className="list_post list_post_type2">
                            <li className="">
                                <div className="check_blog">
                                    <input type="checkbox" id="inpCheck42" className="inp_check" />
                                    <label htmlFor="inpCheck42" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="https://uyoungse.tistory.com/notice/42"
                                            title="askdfjkasjdfl"
                                            className="link_cont"
                                            target="_blank"
                                        >
                                            askdfjkasjdfl
                                        </a>
                                    </strong>
                                    <span className="txt_info fst">our young world</span>
                                    <span className="txt_info">2023-05-01 11:44</span>
                                    <span className="txt_info">댓글 0</span>
                                </div>
                                <div className="post_btn">
                                    <div className="info_btn">
                                        <div>
                                            <a
                                                className="btn_post"
                                                href="/manage/notice/42?returnURL=https%3A%2F%2Fuyoungse.tistory.com%2Fmanage%2Fnotices"
                                            >
                                                수정
                                            </a>
                                            <a className="btn_post" href="#">
                                                삭제
                                            </a>
                                            <a
                                                className="btn_post"
                                                href="/manage/statistics/entry/42"
                                                target="_blank"
                                            >
                                                통계
                                            </a>
                                            <div className="opt_set opt_post2">
                                                <button type="button" className="btn_opt">
                                                    <span className="txt_ellip">공개</span>
                                                    <span className="ico_blog" />
                                                </button>
                                                <div className="layer_opt">
                                                    <label className="lab_set on">
                                                        <input
                                                            type="radio"
                                                            className="inp_set"
                                                            defaultValue="PUBLIC"
                                                        />
                                                        <span className="txt_set txt_ellip">공개</span>
                                                    </label>
                                                    <label className="lab_set">
                                                        <input
                                                            type="radio"
                                                            className="inp_set"
                                                            defaultValue="PRIVATE"
                                                        />
                                                        <span className="txt_set txt_ellip">비공개</span>
                                                    </label>
                                                    <button type="button" className="btn_close">
                                                        <span className="ico_blog" />
                                                    </button>
                                                </div>
                                                <span className="txt_change">
                    변경중
                    <span className="ico_blog ico_change" />
                  </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="">
                                <div className="check_blog">
                                    <input type="checkbox" id="inpCheck38" className="inp_check" />
                                    <label htmlFor="inpCheck38" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="https://uyoungse.tistory.com/notice/38"
                                            title="test"
                                            className="link_cont"
                                            target="_blank"
                                        >
                                            test
                                        </a>
                                    </strong>
                                    <span className="txt_info fst">our young world</span>
                                    <span className="txt_info">2023-04-09 21:41</span>
                                    <span className="txt_info">댓글 0</span>
                                </div>
                                <div className="post_btn">
                                    <div className="info_btn">
                                        <div>
                                            <a
                                                className="btn_post"
                                                href="/manage/notice/38?returnURL=https%3A%2F%2Fuyoungse.tistory.com%2Fmanage%2Fnotices"
                                            >
                                                수정
                                            </a>
                                            <a className="btn_post" href="#">
                                                삭제
                                            </a>
                                            <a
                                                className="btn_post"
                                                href="/manage/statistics/entry/38"
                                                target="_blank"
                                            >
                                                통계
                                            </a>
                                            <div className="opt_set opt_post2">
                                                <button type="button" className="btn_opt">
                                                    <span className="txt_ellip">공개</span>
                                                    <span className="ico_blog" />
                                                </button>
                                                <div className="layer_opt">
                                                    <label className="lab_set on">
                                                        <input
                                                            type="radio"
                                                            className="inp_set"
                                                            defaultValue="PUBLIC"
                                                        />
                                                        <span className="txt_set txt_ellip">공개</span>
                                                    </label>
                                                    <label className="lab_set">
                                                        <input
                                                            type="radio"
                                                            className="inp_set"
                                                            defaultValue="PRIVATE"
                                                        />
                                                        <span className="txt_set txt_ellip">비공개</span>
                                                    </label>
                                                    <button type="button" className="btn_close">
                                                        <span className="ico_blog" />
                                                    </button>
                                                </div>
                                                <span className="txt_change">
                    변경중
                    <span className="ico_blog ico_change" />
                  </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="wrap_paging">
                        <strong className="screen_out">현재 1페이지</strong>
                        <a className="link_paging">
                            <span className="ico_blog ico_prev">이전 페이지 없음</span>
                        </a>
                        <ul className="list_paging">
                            <li className="on">
                                <a
                                    className="link_num"
                                    href="/manage/notices?page=1&searchKeyword=&searchType=title"
                                >
                                    1
                                </a>
                            </li>
                        </ul>
                        <a className="link_paging">
                            <span className="ico_blog ico_next">다음 페이지 없음</span>
                        </a>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Notices;