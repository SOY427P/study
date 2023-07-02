import React from 'react';
import Menu from './Menu';


function Posts() {
    return (
        <>
            <Menu />
            <div id="mArticle">
                <div className="inner_article contents_article">
                    <h2 id="kakaoBody" className="screen_out">
                        티스토리 관리센터 본문
                    </h2>
                    <h3 className="tit_cont">
                        글 관리<span className="txt_count"> 33</span>
                        <a href="/manage/post/?returnURL=/manage/posts" className="link_write">
                            글 쓰기
                            <span className="ico_blog" />
                        </a>
                    </h3>
                    <div className="wrap_search">
                        <div className="check_blog">
                            <input type="checkbox" id="inpAllCheck" className="inp_check" />
                            <label htmlFor="inpAllCheck" className="ico_blog ico_checkbox">
                                선택됨
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
                                placeholder="글 관리에서 검색합니다."
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
                                            보호
                                            <input type="button" className="btn_g" defaultValue="보호" />
                                        </label>
                                    </li>
                                    <li>
                                        <label className="lab_btn">
                                            삭제
                                            <input type="button" className="btn_g" defaultValue="삭제" />
                                        </label>
                                    </li>
                                </ul>
                                <div className="scroll_opt">
                                    <strong className="tit_opt">카테고리 변경</strong>
                                    <ul className="list_opt">
                                        <li className="">
                                            <label className="lab_btn" title="카테고리 없음">
                  <span className="txt_lab">
                    <span className="inner_lab">카테고리 없음</span>
                  </span>
                                                <input
                                                    type="button"
                                                    className="btn_g"
                                                    defaultValue="카테고리 없음"
                                                />
                                            </label>
                                            <ul />
                                        </li>
                                        <li className="">
                                            <label className="lab_btn" title="Spring Boot & JPA">
                  <span className="txt_lab">
                    <span className="inner_lab">Spring Boot &amp; JPA</span>
                  </span>
                                                <input
                                                    type="button"
                                                    className="btn_g"
                                                    defaultValue="Spring Boot & JPA"
                                                />
                                            </label>
                                            <ul />
                                        </li>
                                        <li className="">
                                            <label className="lab_btn" title="React">
                  <span className="txt_lab">
                    <span className="inner_lab">React</span>
                  </span>
                                                <input type="button" className="btn_g" defaultValue="React" />
                                            </label>
                                            <ul />
                                        </li>
                                        <li className="">
                                            <label className="lab_btn" title="AWS">
                  <span className="txt_lab">
                    <span className="inner_lab">AWS</span>
                  </span>
                                                <input type="button" className="btn_g" defaultValue="AWS" />
                                            </label>
                                            <ul />
                                        </li>
                                        <li className="">
                                            <label className="lab_btn" title="회의록">
                  <span className="txt_lab">
                    <span className="ico_blog ico_secret">비공개</span>
                    <span className="inner_lab">회의록</span>
                  </span>
                                                <input
                                                    type="button"
                                                    className="btn_g"
                                                    defaultValue="회의록"
                                                />
                                            </label>
                                            <ul />
                                        </li>
                                        <li className="">
                                            <label className="lab_btn" title="GIT">
                  <span className="txt_lab">
                    <span className="inner_lab">GIT</span>
                  </span>
                                                <input type="button" className="btn_g" defaultValue="GIT" />
                                            </label>
                                            <ul />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="opt_blog">
                            <button type="button" className="btn_opt">
                                보기
                                <span className="ico_blog ico_open" />
                            </button>
                            <div className="layer_opt layer_double">
                                <a className="lab_btn lab_all" href="/manage/posts">
                                    모든 글 보기
                                    <input type="button" className="btn_g" defaultValue="모든글보기" />
                                </a>
                                <strong className="tit_opt">상태별 보기</strong>
                                <ul className="list_opt">
                                    <li className="on">
                                        <a className="lab_btn" href="/manage/posts?visibility=all">
                                            전체
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="lab_btn" href="/manage/posts?visibility=visible">
                                            공개
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="lab_btn" href="/manage/posts?visibility=hidden">
                                            비공개
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="lab_btn" href="/manage/posts?visibility=protect">
                                            보호
                                        </a>
                                    </li>
                                </ul>
                                <div className="scroll_opt">
                                    <strong className="tit_opt">카테고리별 보기</strong>
                                    <ul className="list_opt">
                                        <li className="on">
                                            <a className="lab_btn" href="/manage/posts">
                  <span className="txt_lab">
                    <span className="inner_lab">카테고리 전체보기</span>
                  </span>
                                            </a>
                                            <ul />
                                        </li>
                                        <li className="">
                                            <a className="lab_btn" href="/manage/posts?category=0">
                  <span className="txt_lab">
                    <span className="inner_lab">카테고리 없음</span>
                  </span>
                                            </a>
                                            <ul />
                                        </li>
                                        <li className="">
                                            <a className="lab_btn" href="/manage/posts?category=1125957">
                  <span className="txt_lab">
                    <span className="inner_lab">Spring Boot &amp; JPA</span>
                  </span>
                                            </a>
                                            <ul />
                                        </li>
                                        <li className="">
                                            <a className="lab_btn" href="/manage/posts?category=1125958">
                  <span className="txt_lab">
                    <span className="inner_lab">React</span>
                  </span>
                                            </a>
                                            <ul />
                                        </li>
                                        <li className="">
                                            <a className="lab_btn" href="/manage/posts?category=1125959">
                  <span className="txt_lab">
                    <span className="inner_lab">AWS</span>
                  </span>
                                            </a>
                                            <ul />
                                        </li>
                                        <li className="">
                                            <a className="lab_btn" href="/manage/posts?category=1125960">
                  <span className="txt_lab">
                    <span className="ico_blog ico_secret">비공개</span>
                    <span className="inner_lab">회의록</span>
                  </span>
                                            </a>
                                            <ul />
                                        </li>
                                        <li className="">
                                            <a className="lab_btn" href="/manage/posts?category=1128038">
                  <span className="txt_lab">
                    <span className="inner_lab">GIT</span>
                  </span>
                                            </a>
                                            <ul />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrap_list">
                        <ul className="list_post list_post_type2">
                            <li className="">
                                <div className="check_blog">
                                    <input type="checkbox" id="inpCheck35" className="inp_check" />
                                    <label htmlFor="inpCheck35" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="https://uyoungse.tistory.com/35"
                                            title="[4주차] React 간단한 실습 _ty"
                                            className="link_cont"
                                            target="_blank"
                                        >
                                            [4주차] React 간단한 실습 _ty
                                        </a>
                                        <span className="ico_blog ico_file" />
                                    </strong>
                                    <a href="/manage/posts?category=1125958">
                                        <span className="txt_cate txt_ellip">React</span>
                                    </a>
                                    <span className="txt_info txt_ellip">our young world</span>
                                    <span className="txt_info">2023-04-09 20:31</span>
                                </div>
                                <div className="post_btn">
                                    <span className="ico_blog ico_private">비공개</span>
                                    <div className="info_btn">
                                        <div>
                                            <a
                                                className="btn_post"
                                                href="/manage/post/35?returnURL=https%3A%2F%2Fuyoungse.tistory.com%2Fmanage%2Fposts"
                                            >
                                                수정
                                            </a>
                                            <a className="btn_post" href="#">
                                                삭제
                                            </a>
                                            <a
                                                className="btn_post"
                                                href="/manage/statistics/entry/35"
                                                target="_blank"
                                            >
                                                통계
                                            </a>
                                            <div className="opt_set opt_post1">
                                                <button type="button" className="btn_opt">
                                                    <span className="txt_ellip">비공개</span>
                                                    <span className="ico_blog" />
                                                </button>
                                                <div className="layer_opt">
                                                    <label className="lab_set">
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
                                                            defaultValue="PROTECTED"
                                                        />
                                                        <span className="txt_set txt_ellip">보호</span>
                                                    </label>
                                                    <label className="lab_set on">
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
                                    <input type="checkbox" id="inpCheck34" className="inp_check" />
                                    <label htmlFor="inpCheck34" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="https://uyoungse.tistory.com/34"
                                            title="[4회차] Spring Boot 환경에서 React 연동_sy"
                                            className="link_cont"
                                            target="_blank"
                                        >
                                            [4회차] Spring Boot 환경에서 React 연동_sy
                                        </a>
                                        <span className="ico_blog ico_file" />
                                    </strong>
                                    <a href="/manage/posts?category=1125958">
                                        <span className="txt_cate txt_ellip">React</span>
                                    </a>
                                    <span className="txt_info txt_ellip">our young world</span>
                                    <span className="txt_info">2023-04-09 20:16</span>
                                </div>
                                <div className="post_btn">
                                    <span className="ico_blog ico_private">비공개</span>
                                    <div className="info_btn">
                                        <div>
                                            <a
                                                className="btn_post"
                                                href="/manage/post/34?returnURL=https%3A%2F%2Fuyoungse.tistory.com%2Fmanage%2Fposts"
                                            >
                                                수정
                                            </a>
                                            <a className="btn_post" href="#">
                                                삭제
                                            </a>
                                            <a
                                                className="btn_post"
                                                href="/manage/statistics/entry/34"
                                                target="_blank"
                                            >
                                                통계
                                            </a>
                                            <div className="opt_set opt_post1">
                                                <button type="button" className="btn_opt">
                                                    <span className="txt_ellip">비공개</span>
                                                    <span className="ico_blog" />
                                                </button>
                                                <div className="layer_opt">
                                                    <label className="lab_set">
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
                                                            defaultValue="PROTECTED"
                                                        />
                                                        <span className="txt_set txt_ellip">보호</span>
                                                    </label>
                                                    <label className="lab_set on">
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
                                    <input type="checkbox" id="inpCheck33" className="inp_check" />
                                    <label htmlFor="inpCheck33" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="https://uyoungse.tistory.com/33"
                                            title="[4주차] React 설정 및 jsx문법_jh"
                                            className="link_cont"
                                            target="_blank"
                                        >
                                            [4주차] React 설정 및 jsx문법_jh
                                        </a>
                                    </strong>
                                    <a href="/manage/posts?category=1125958">
                                        <span className="txt_cate txt_ellip">React</span>
                                    </a>
                                    <span className="txt_info txt_ellip">our young world</span>
                                    <span className="txt_info">2023-04-09 13:36</span>
                                </div>
                                <div className="post_btn">
                                    <span className="ico_blog ico_private">비공개</span>
                                    <div className="info_btn">
                                        <div>
                                            <a
                                                className="btn_post"
                                                href="/manage/post/33?returnURL=https%3A%2F%2Fuyoungse.tistory.com%2Fmanage%2Fposts"
                                            >
                                                수정
                                            </a>
                                            <a className="btn_post" href="#">
                                                삭제
                                            </a>
                                            <a
                                                className="btn_post"
                                                href="/manage/statistics/entry/33"
                                                target="_blank"
                                            >
                                                통계
                                            </a>
                                            <div className="opt_set opt_post1">
                                                <button type="button" className="btn_opt">
                                                    <span className="txt_ellip">비공개</span>
                                                    <span className="ico_blog" />
                                                </button>
                                                <div className="layer_opt">
                                                    <label className="lab_set">
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
                                                            defaultValue="PROTECTED"
                                                        />
                                                        <span className="txt_set txt_ellip">보호</span>
                                                    </label>
                                                    <label className="lab_set on">
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
                                    <input type="checkbox" id="inpCheck32" className="inp_check" />
                                    <label htmlFor="inpCheck32" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="https://uyoungse.tistory.com/32"
                                            title="[4주차] React state 생성, 변경_js"
                                            className="link_cont"
                                            target="_blank"
                                        >
                                            [4주차] React state 생성, 변경_js
                                        </a>
                                    </strong>
                                    <a href="/manage/posts?category=1125958">
                                        <span className="txt_cate txt_ellip">React</span>
                                    </a>
                                    <span className="txt_info txt_ellip">our young world</span>
                                    <span className="txt_info">2023-04-02 20:38</span>
                                </div>
                                <div className="post_btn">
                                    <span className="ico_blog ico_private">비공개</span>
                                    <div className="info_btn">
                                        <div>
                                            <a
                                                className="btn_post"
                                                href="/manage/post/32?returnURL=https%3A%2F%2Fuyoungse.tistory.com%2Fmanage%2Fposts"
                                            >
                                                수정
                                            </a>
                                            <a className="btn_post" href="#">
                                                삭제
                                            </a>
                                            <a
                                                className="btn_post"
                                                href="/manage/statistics/entry/32"
                                                target="_blank"
                                            >
                                                통계
                                            </a>
                                            <div className="opt_set opt_post1">
                                                <button type="button" className="btn_opt">
                                                    <span className="txt_ellip">비공개</span>
                                                    <span className="ico_blog" />
                                                </button>
                                                <div className="layer_opt">
                                                    <label className="lab_set">
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
                                                            defaultValue="PROTECTED"
                                                        />
                                                        <span className="txt_set txt_ellip">보호</span>
                                                    </label>
                                                    <label className="lab_set on">
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
                                    <input type="checkbox" id="inpCheck31" className="inp_check" />
                                    <label htmlFor="inpCheck31" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="https://uyoungse.tistory.com/31"
                                            title="[4회차] React Hooks_jk"
                                            className="link_cont"
                                            target="_blank"
                                        >
                                            [4회차] React Hooks_jk
                                        </a>
                                    </strong>
                                    <a href="/manage/posts?category=1125958">
                                        <span className="txt_cate txt_ellip">React</span>
                                    </a>
                                    <span className="txt_info txt_ellip">our young world</span>
                                    <span className="txt_info">2023-04-02 20:38</span>
                                </div>
                                <div className="post_btn">
                                    <span className="ico_blog ico_private">비공개</span>
                                    <div className="info_btn">
                                        <div>
                                            <a
                                                className="btn_post"
                                                href="/manage/post/31?returnURL=https%3A%2F%2Fuyoungse.tistory.com%2Fmanage%2Fposts"
                                            >
                                                수정
                                            </a>
                                            <a className="btn_post" href="#">
                                                삭제
                                            </a>
                                            <a
                                                className="btn_post"
                                                href="/manage/statistics/entry/31"
                                                target="_blank"
                                            >
                                                통계
                                            </a>
                                            <div className="opt_set opt_post1">
                                                <button type="button" className="btn_opt">
                                                    <span className="txt_ellip">비공개</span>
                                                    <span className="ico_blog" />
                                                </button>
                                                <div className="layer_opt">
                                                    <label className="lab_set">
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
                                                            defaultValue="PROTECTED"
                                                        />
                                                        <span className="txt_set txt_ellip">보호</span>
                                                    </label>
                                                    <label className="lab_set on">
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
                                    <input type="checkbox" id="inpCheck30" className="inp_check" />
                                    <label htmlFor="inpCheck30" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="https://uyoungse.tistory.com/30"
                                            title="[4회차] React 환경 구축_sw"
                                            className="link_cont"
                                            target="_blank"
                                        >
                                            [4회차] React 환경 구축_sw
                                        </a>
                                        <span className="ico_blog ico_file" />
                                    </strong>
                                    <a href="/manage/posts?category=1125958">
                                        <span className="txt_cate txt_ellip">React</span>
                                    </a>
                                    <span className="txt_info txt_ellip">our young world</span>
                                    <span className="txt_info">2023-04-02 20:33</span>
                                </div>
                                <div className="post_btn">
                                    <span className="ico_blog ico_private">비공개</span>
                                    <div className="info_btn">
                                        <div>
                                            <a
                                                className="btn_post"
                                                href="/manage/post/30?returnURL=https%3A%2F%2Fuyoungse.tistory.com%2Fmanage%2Fposts"
                                            >
                                                수정
                                            </a>
                                            <a className="btn_post" href="#">
                                                삭제
                                            </a>
                                            <a
                                                className="btn_post"
                                                href="/manage/statistics/entry/30"
                                                target="_blank"
                                            >
                                                통계
                                            </a>
                                            <div className="opt_set opt_post1">
                                                <button type="button" className="btn_opt">
                                                    <span className="txt_ellip">비공개</span>
                                                    <span className="ico_blog" />
                                                </button>
                                                <div className="layer_opt">
                                                    <label className="lab_set">
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
                                                            defaultValue="PROTECTED"
                                                        />
                                                        <span className="txt_set txt_ellip">보호</span>
                                                    </label>
                                                    <label className="lab_set on">
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
                                    <input type="checkbox" id="inpCheck29" className="inp_check" />
                                    <label htmlFor="inpCheck29" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="https://uyoungse.tistory.com/29"
                                            title="[4회차] React UseState() 알아보기_cy"
                                            className="link_cont"
                                            target="_blank"
                                        >
                                            [4회차] React UseState() 알아보기_cy
                                        </a>
                                        <span className="ico_blog ico_file" />
                                    </strong>
                                    <a href="/manage/posts?category=1125958">
                                        <span className="txt_cate txt_ellip">React</span>
                                    </a>
                                    <span className="txt_info txt_ellip">our young world</span>
                                    <span className="txt_info">2023-03-29 12:23</span>
                                </div>
                                <div className="post_btn">
                                    <span className="ico_blog ico_private">비공개</span>
                                    <div className="info_btn">
                                        <div>
                                            <a
                                                className="btn_post"
                                                href="/manage/post/29?returnURL=https%3A%2F%2Fuyoungse.tistory.com%2Fmanage%2Fposts"
                                            >
                                                수정
                                            </a>
                                            <a className="btn_post" href="#">
                                                삭제
                                            </a>
                                            <a
                                                className="btn_post"
                                                href="/manage/statistics/entry/29"
                                                target="_blank"
                                            >
                                                통계
                                            </a>
                                            <div className="opt_set opt_post1">
                                                <button type="button" className="btn_opt">
                                                    <span className="txt_ellip">비공개</span>
                                                    <span className="ico_blog" />
                                                </button>
                                                <div className="layer_opt">
                                                    <label className="lab_set">
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
                                                            defaultValue="PROTECTED"
                                                        />
                                                        <span className="txt_set txt_ellip">보호</span>
                                                    </label>
                                                    <label className="lab_set on">
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
                                    <input type="checkbox" id="inpCheck28" className="inp_check" />
                                    <label htmlFor="inpCheck28" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="https://uyoungse.tistory.com/28"
                                            title="4주차 회의록 ( 2023 / 03 / 26 )"
                                            className="link_cont"
                                            target="_blank"
                                        >
                                            4주차 회의록 ( 2023 / 03 / 26 )
                                        </a>
                                    </strong>
                                    <a href="/manage/posts?category=1125960">
                                        <span className="txt_cate txt_ellip">회의록</span>
                                    </a>
                                    <span className="txt_info txt_ellip">our young world</span>
                                    <span className="txt_info">2023-03-27 10:16</span>
                                </div>
                                <div className="post_btn">
                                    <span className="ico_blog ico_private">비공개</span>
                                    <div className="info_btn">
                                        <div>
                                            <a
                                                className="btn_post"
                                                href="/manage/post/28?returnURL=https%3A%2F%2Fuyoungse.tistory.com%2Fmanage%2Fposts"
                                            >
                                                수정
                                            </a>
                                            <a className="btn_post" href="#">
                                                삭제
                                            </a>
                                            <a
                                                className="btn_post"
                                                href="/manage/statistics/entry/28"
                                                target="_blank"
                                            >
                                                통계
                                            </a>
                                            <div className="opt_set opt_post1 off">
                                                <button type="button" className="btn_opt" disabled="">
                                                    <span className="txt_ellip">비공개</span>
                                                    <span className="ico_blog" />
                                                </button>
                                                <div className="layer_opt">
                                                    <label className="lab_set">
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
                                                            defaultValue="PROTECTED"
                                                        />
                                                        <span className="txt_set txt_ellip">보호</span>
                                                    </label>
                                                    <label className="lab_set on">
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
                                    <input type="checkbox" id="inpCheck27" className="inp_check" />
                                    <label htmlFor="inpCheck27" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="https://uyoungse.tistory.com/27"
                                            title="[3회차] JPA @Embeddable / @SecondaryTable _ sy"
                                            className="link_cont"
                                            target="_blank"
                                        >
                                            [3회차] JPA @Embeddable / @SecondaryTable _ sy
                                        </a>
                                        <span className="ico_blog ico_file" />
                                    </strong>
                                    <a href="/manage/posts?category=1125957">
                                        <span className="txt_cate txt_ellip">Spring Boot &amp; JPA</span>
                                    </a>
                                    <span className="txt_info txt_ellip">our young world</span>
                                    <span className="txt_info">2023-03-26 20:43</span>
                                </div>
                                <div className="post_btn">
                                    <span className="ico_blog ico_private">비공개</span>
                                    <div className="info_btn">
                                        <div>
                                            <a
                                                className="btn_post"
                                                href="/manage/post/27?returnURL=https%3A%2F%2Fuyoungse.tistory.com%2Fmanage%2Fposts"
                                            >
                                                수정
                                            </a>
                                            <a className="btn_post" href="#">
                                                삭제
                                            </a>
                                            <a
                                                className="btn_post"
                                                href="/manage/statistics/entry/27"
                                                target="_blank"
                                            >
                                                통계
                                            </a>
                                            <div className="opt_set opt_post1">
                                                <button type="button" className="btn_opt">
                                                    <span className="txt_ellip">비공개</span>
                                                    <span className="ico_blog" />
                                                </button>
                                                <div className="layer_opt">
                                                    <label className="lab_set">
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
                                                            defaultValue="PROTECTED"
                                                        />
                                                        <span className="txt_set txt_ellip">보호</span>
                                                    </label>
                                                    <label className="lab_set on">
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
                                    <input type="checkbox" id="inpCheck26" className="inp_check" />
                                    <label htmlFor="inpCheck26" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="https://uyoungse.tistory.com/26"
                                            title="[3회차] JPA Annotaion / Setter 메서드 사용 지양_js"
                                            className="link_cont"
                                            target="_blank"
                                        >
                                            [3회차] JPA Annotaion / Setter 메서드 사용 지양_js
                                        </a>
                                    </strong>
                                    <a href="/manage/posts?category=1125957">
                                        <span className="txt_cate txt_ellip">Spring Boot &amp; JPA</span>
                                    </a>
                                    <span className="txt_info txt_ellip">our young world</span>
                                    <span className="txt_info">2023-03-26 18:47</span>
                                </div>
                                <div className="post_btn">
                                    <span className="ico_blog ico_private">비공개</span>
                                    <div className="info_btn">
                                        <div>
                                            <a
                                                className="btn_post"
                                                href="/manage/post/26?returnURL=https%3A%2F%2Fuyoungse.tistory.com%2Fmanage%2Fposts"
                                            >
                                                수정
                                            </a>
                                            <a className="btn_post" href="#">
                                                삭제
                                            </a>
                                            <a
                                                className="btn_post"
                                                href="/manage/statistics/entry/26"
                                                target="_blank"
                                            >
                                                통계
                                            </a>
                                            <div className="opt_set opt_post1">
                                                <button type="button" className="btn_opt">
                                                    <span className="txt_ellip">비공개</span>
                                                    <span className="ico_blog" />
                                                </button>
                                                <div className="layer_opt">
                                                    <label className="lab_set">
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
                                                            defaultValue="PROTECTED"
                                                        />
                                                        <span className="txt_set txt_ellip">보호</span>
                                                    </label>
                                                    <label className="lab_set on">
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
                                    <input type="checkbox" id="inpCheck25" className="inp_check" />
                                    <label htmlFor="inpCheck25" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="https://uyoungse.tistory.com/25"
                                            title="[3회차] React Components&Props_cy"
                                            className="link_cont"
                                            target="_blank"
                                        >
                                            [3회차] React Components&amp;Props_cy
                                        </a>
                                        <span className="ico_blog ico_file" />
                                    </strong>
                                    <a href="/manage/posts?category=1125958">
                                        <span className="txt_cate txt_ellip">React</span>
                                    </a>
                                    <span className="txt_info txt_ellip">our young world</span>
                                    <span className="txt_info">2023-03-26 15:38</span>
                                </div>
                                <div className="post_btn">
                                    <span className="ico_blog ico_private">비공개</span>
                                    <div className="info_btn">
                                        <div>
                                            <a
                                                className="btn_post"
                                                href="/manage/post/25?returnURL=https%3A%2F%2Fuyoungse.tistory.com%2Fmanage%2Fposts"
                                            >
                                                수정
                                            </a>
                                            <a className="btn_post" href="#">
                                                삭제
                                            </a>
                                            <a
                                                className="btn_post"
                                                href="/manage/statistics/entry/25"
                                                target="_blank"
                                            >
                                                통계
                                            </a>
                                            <div className="opt_set opt_post1">
                                                <button type="button" className="btn_opt">
                                                    <span className="txt_ellip">비공개</span>
                                                    <span className="ico_blog" />
                                                </button>
                                                <div className="layer_opt">
                                                    <label className="lab_set">
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
                                                            defaultValue="PROTECTED"
                                                        />
                                                        <span className="txt_set txt_ellip">보호</span>
                                                    </label>
                                                    <label className="lab_set on">
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
                                    <input type="checkbox" id="inpCheck24" className="inp_check" />
                                    <label htmlFor="inpCheck24" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="https://uyoungse.tistory.com/24"
                                            title="[3회차] React 시작하기_cy"
                                            className="link_cont"
                                            target="_blank"
                                        >
                                            [3회차] React 시작하기_cy
                                        </a>
                                        <span className="ico_blog ico_file" />
                                    </strong>
                                    <a href="/manage/posts?category=1125958">
                                        <span className="txt_cate txt_ellip">React</span>
                                    </a>
                                    <span className="txt_info txt_ellip">our young world</span>
                                    <span className="txt_info">2023-03-26 14:02</span>
                                </div>
                                <div className="post_btn">
                                    <span className="ico_blog ico_private">비공개</span>
                                    <div className="info_btn">
                                        <div>
                                            <a
                                                className="btn_post"
                                                href="/manage/post/24?returnURL=https%3A%2F%2Fuyoungse.tistory.com%2Fmanage%2Fposts"
                                            >
                                                수정
                                            </a>
                                            <a className="btn_post" href="#">
                                                삭제
                                            </a>
                                            <a
                                                className="btn_post"
                                                href="/manage/statistics/entry/24"
                                                target="_blank"
                                            >
                                                통계
                                            </a>
                                            <div className="opt_set opt_post1">
                                                <button type="button" className="btn_opt">
                                                    <span className="txt_ellip">비공개</span>
                                                    <span className="ico_blog" />
                                                </button>
                                                <div className="layer_opt">
                                                    <label className="lab_set">
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
                                                            defaultValue="PROTECTED"
                                                        />
                                                        <span className="txt_set txt_ellip">보호</span>
                                                    </label>
                                                    <label className="lab_set on">
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
                                    <input type="checkbox" id="inpCheck23" className="inp_check" />
                                    <label htmlFor="inpCheck23" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="https://uyoungse.tistory.com/23"
                                            title="[3회차] 스프링 빈 의존관계 설정_jh"
                                            className="link_cont"
                                            target="_blank"
                                        >
                                            [3회차] 스프링 빈 의존관계 설정_jh
                                        </a>
                                        <span className="ico_blog ico_file" />
                                    </strong>
                                    <a href="/manage/posts?category=1125957">
                                        <span className="txt_cate txt_ellip">Spring Boot &amp; JPA</span>
                                    </a>
                                    <span className="txt_info txt_ellip">our young world</span>
                                    <span className="txt_info">2023-03-26 12:00</span>
                                </div>
                                <div className="post_btn">
                                    <span className="ico_blog ico_private">비공개</span>
                                    <div className="info_btn">
                                        <div>
                                            <a
                                                className="btn_post"
                                                href="/manage/post/23?returnURL=https%3A%2F%2Fuyoungse.tistory.com%2Fmanage%2Fposts"
                                            >
                                                수정
                                            </a>
                                            <a className="btn_post" href="#">
                                                삭제
                                            </a>
                                            <a
                                                className="btn_post"
                                                href="/manage/statistics/entry/23"
                                                target="_blank"
                                            >
                                                통계
                                            </a>
                                            <div className="opt_set opt_post1">
                                                <button type="button" className="btn_opt">
                                                    <span className="txt_ellip">비공개</span>
                                                    <span className="ico_blog" />
                                                </button>
                                                <div className="layer_opt">
                                                    <label className="lab_set">
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
                                                            defaultValue="PROTECTED"
                                                        />
                                                        <span className="txt_set txt_ellip">보호</span>
                                                    </label>
                                                    <label className="lab_set on">
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
                                    <input type="checkbox" id="inpCheck22" className="inp_check" />
                                    <label htmlFor="inpCheck22" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="https://uyoungse.tistory.com/22"
                                            title="[3회차] React 구구단 만들기_jk"
                                            className="link_cont"
                                            target="_blank"
                                        >
                                            [3회차] React 구구단 만들기_jk
                                        </a>
                                        <span className="ico_blog ico_file" />
                                    </strong>
                                    <a href="/manage/posts?category=1125958">
                                        <span className="txt_cate txt_ellip">React</span>
                                    </a>
                                    <span className="txt_info txt_ellip">our young world</span>
                                    <span className="txt_info">2023-03-25 22:28</span>
                                </div>
                                <div className="post_btn">
                                    <span className="ico_blog ico_private">비공개</span>
                                    <div className="info_btn">
                                        <div>
                                            <a
                                                className="btn_post"
                                                href="/manage/post/22?returnURL=https%3A%2F%2Fuyoungse.tistory.com%2Fmanage%2Fposts"
                                            >
                                                수정
                                            </a>
                                            <a className="btn_post" href="#">
                                                삭제
                                            </a>
                                            <a
                                                className="btn_post"
                                                href="/manage/statistics/entry/22"
                                                target="_blank"
                                            >
                                                통계
                                            </a>
                                            <div className="opt_set opt_post1">
                                                <button type="button" className="btn_opt">
                                                    <span className="txt_ellip">비공개</span>
                                                    <span className="ico_blog" />
                                                </button>
                                                <div className="layer_opt">
                                                    <label className="lab_set">
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
                                                            defaultValue="PROTECTED"
                                                        />
                                                        <span className="txt_set txt_ellip">보호</span>
                                                    </label>
                                                    <label className="lab_set on">
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
                                    <input type="checkbox" id="inpCheck21" className="inp_check" />
                                    <label htmlFor="inpCheck21" className="ico_blog ico_checkbox">
                                        선택 안됨
                                    </label>
                                </div>
                                <div className="post_cont">
                                    <strong className="tit_post tit_ellip">
                                        <a
                                            href="https://uyoungse.tistory.com/21"
                                            title="3주차 회의록 ( 2023 / 03 / 19 )"
                                            className="link_cont"
                                            target="_blank"
                                        >
                                            3주차 회의록 ( 2023 / 03 / 19 )
                                        </a>
                                    </strong>
                                    <a href="/manage/posts?category=1125960">
                                        <span className="txt_cate txt_ellip">회의록</span>
                                    </a>
                                    <span className="txt_info txt_ellip">our young world</span>
                                    <span className="txt_info">2023-03-19 21:59</span>
                                    <span className="txt_info">댓글 2</span>
                                </div>
                                <div className="post_btn">
                                    <span className="ico_blog ico_private">비공개</span>
                                    <div className="info_btn">
                                        <div>
                                            <a
                                                className="btn_post"
                                                href="/manage/post/21?returnURL=https%3A%2F%2Fuyoungse.tistory.com%2Fmanage%2Fposts"
                                            >
                                                수정
                                            </a>
                                            <a className="btn_post" href="#">
                                                삭제
                                            </a>
                                            <a
                                                className="btn_post"
                                                href="/manage/statistics/entry/21"
                                                target="_blank"
                                            >
                                                통계
                                            </a>
                                            <div className="opt_set opt_post1 off">
                                                <button type="button" className="btn_opt" disabled="">
                                                    <span className="txt_ellip">비공개</span>
                                                    <span className="ico_blog" />
                                                </button>
                                                <div className="layer_opt">
                                                    <label className="lab_set">
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
                                                            defaultValue="PROTECTED"
                                                        />
                                                        <span className="txt_set txt_ellip">보호</span>
                                                    </label>
                                                    <label className="lab_set on">
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
                                    href="/manage/posts?category=-3&page=1&searchKeyword=&searchType=title&visibility=all"
                                >
                                    1
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="link_num"
                                    href="/manage/posts?category=-3&page=2&searchKeyword=&searchType=title&visibility=all"
                                >
                                    2
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="link_num"
                                    href="/manage/posts?category=-3&page=3&searchKeyword=&searchType=title&visibility=all"
                                >
                                    3
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

export default Posts;