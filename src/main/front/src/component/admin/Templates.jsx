import React from 'react';
import Menu from './Menu';


function Templates() {
    return (
        <>
            <Menu />
            <div id="mArticle">
                <div className="inner_article contents_article">
                    <h2 id="kakaoBody" className="screen_out">
                        티스토리 관리센터 본문
                    </h2>
                    <h3 className="tit_cont">
                        서식 관리<span className="txt_count"> 3</span>
                        <a
                            href="/manage/template?returnURL=/manage/templates"
                            className="link_write"
                        >
                            서식 쓰기
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
                        <form className="search_blog">
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
                                    </div>
                                </div>
                            </div>
                            <input
                                type="text"
                                className="tf_search"
                                title="검색어 입력"
                                placeholder="서식 관리에서 검색합니다."
                                defaultValue=""
                            />
                            <div className="info_search">
                                <button type="button" className="btn_search">
                                    검색<span className="ico_blog ico_search"> 열기</span>
                                </button>
                                <button type="submit" className="btn_search btn_query" disabled="">
                                    <span className="ico_blog ico_search">검색 하기</span>
                                </button>
                                <button type="reset" className="btn_del">
                                    닫기
                                </button>
                            </div>
                        </form>
                        <div className="opt_blog">
                            <button type="button" className="btn_opt" disabled="">
                                삭제
                            </button>
                            <span className="txt_change">
          <span className="ico_blog ico_change" />
        </span>
                        </div>
                    </div>
                    <div className="wrap_list">
                        <ul className="list_post list_post_type2">
                            <li className="">
                                <div className="check_blog">
                                    <input type="checkbox" id="inpCheck41" className="inp_check" />
                                    <label htmlFor="inpCheck41" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="/manage/template/41"
                                            title="이게 뭐하는것이여"
                                            className="link_cont"
                                        >
                                            이게 뭐하는것이여
                                        </a>
                                    </strong>
                                    <span className="txt_info fst">our young world</span>
                                    <span className="txt_info">2023-04-15 19:37</span>
                                </div>
                            </li>
                            <li className="">
                                <div className="check_blog">
                                    <input type="checkbox" id="inpCheck40" className="inp_check" />
                                    <label htmlFor="inpCheck40" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="/manage/template/40"
                                            title="서식테스트2"
                                            className="link_cont"
                                        >
                                            서식테스트2
                                        </a>
                                    </strong>
                                    <span className="txt_info fst">our young world</span>
                                    <span className="txt_info">2023-04-09 21:45</span>
                                </div>
                            </li>
                            <li className="">
                                <div className="check_blog">
                                    <input type="checkbox" id="inpCheck39" className="inp_check" />
                                    <label htmlFor="inpCheck39" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="/manage/template/39"
                                            title="서식테스트"
                                            className="link_cont"
                                        >
                                            서식테스트
                                        </a>
                                    </strong>
                                    <span className="txt_info fst">our young world</span>
                                    <span className="txt_info">2023-04-09 21:44</span>
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
                                    href="/manage/templates?page=1&searchKeyword=&searchType=title"
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

export default Templates;