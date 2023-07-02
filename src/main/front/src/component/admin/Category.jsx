import React from 'react';
import Menu from './Menu';


function Category() {
    return (
        <>
            <Menu />
            <div id="mArticle">
                <div className="inner_article">
                    <h2 id="kakaoBody" className="screen_out">
                        블로그관리 본문
                    </h2>
                    <div className="blog_category">
                        <h3 className="tit_cont">카테고리 관리</h3>
                        <div className="wrap_set">
                            <strong className="tit_set">
                                카테고리 순서를 변경하고 주제 연결을 설정할 수 있습니다.
                                <a
                                    href="http://notice.tistory.com/601"
                                    className="info_sub"
                                    target="_blank"
                                >
                                    자세히 보기
                                </a>
                            </strong>
                            <p className="desc_info">
                                드래그 앤 드롭으로 카테고리 순서를 변경할 수 있습니다.
                            </p>
                            <div className="bundle_group">
          <span className="count_total">
            <span className="screen_out">카테고리 개수</span>
            <span className="txt_num">10</span> / 500
          </span>
                                <label className="lab_btn btn_group">
                                    전체 펼치기
                                    <input
                                        type="button"
                                        className="btn_g"
                                        defaultValue="카테고리 전체 펼치기"
                                    />
                                </label>
                                <label className="lab_btn btn_group">
                                    전체 접기
                                    <input
                                        type="button"
                                        className="btn_g"
                                        defaultValue="카테고리 전체 접기"
                                    />
                                </label>
                            </div>
                            <div className="set_order" id="category-app">
                                <div className="wrap_order">
                                    <div className="list_order">
                                        <div className="bundle_item">
                                            <div className="item_order">
                                                <div className="basic_item">
                                                    <div className="wrap_drag wrap_all">
                                                        <span className="ico_blog ico_drag ico_all" />
                                                    </div>
                                                    <span className="txt_name">분류 전체보기</span>
                                                    <div className="info_btn">
                                                        <a href="#" className="btn_post">
                                                            추가
                                                        </a>
                                                        <a href="#" className="btn_post">
                                                            수정
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bundle_item open_subcate">
                                            <div className="item_order">
                                                <label className="lab_btn lab_cate">
                    <span className="wrap_arr">
                      <span className="ico_blog" />
                    </span>
                                                    <input
                                                        type="button"
                                                        className="btn_g"
                                                        defaultValue="open sub category"
                                                    />
                                                </label>
                                                <div className="basic_item">
                                                    <div className="wrap_drag" draggable="true">
                                                        <span className="ico_blog ico_drag" />
                                                    </div>
                                                    <div style={{ display: "inline" }}>
                                                        <div className="wrap_name">
                                                            <span className="txt_name">Spring Boot &amp; JPA</span>
                                                            <span className="txt_count">(15)</span>
                                                        </div>
                                                        <span className="txt_cate">IT 인터넷</span>
                                                        <div className="info_btn">
                                                            <a href="#" className="btn_post" draggable="false">
                                                                추가
                                                            </a>
                                                            <a href="#" className="btn_post" draggable="false">
                                                                수정
                                                            </a>
                                                            <a href="#" className="btn_post" draggable="false">
                                                                관리
                                                            </a>
                                                            <a href="#" className="btn_post" draggable="false">
                                                                이동
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="btn_post disabled"
                                                                draggable="false"
                                                            >
                                                                삭제
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bundle_item open_subcate">
                                            <div className="item_order">
                                                <label className="lab_btn lab_cate">
                    <span className="wrap_arr">
                      <span className="ico_blog" />
                    </span>
                                                    <input
                                                        type="button"
                                                        className="btn_g"
                                                        defaultValue="open sub category"
                                                    />
                                                </label>
                                                <div className="basic_item">
                                                    <div className="wrap_drag" draggable="true">
                                                        <span className="ico_blog ico_drag" />
                                                    </div>
                                                    <div style={{ display: "inline" }}>
                                                        <div className="wrap_name">
                                                            <span className="txt_name">React</span>
                                                            <span className="txt_count">(13)</span>
                                                        </div>
                                                        <span className="txt_cate">IT 인터넷</span>
                                                        <div className="info_btn">
                                                            <a href="#" className="btn_post" draggable="false">
                                                                추가
                                                            </a>
                                                            <a href="#" className="btn_post" draggable="false">
                                                                수정
                                                            </a>
                                                            <a href="#" className="btn_post" draggable="false">
                                                                관리
                                                            </a>
                                                            <a href="#" className="btn_post" draggable="false">
                                                                이동
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="btn_post disabled"
                                                                draggable="false"
                                                            >
                                                                삭제
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bundle_item open_subcate">
                                            <div className="item_order">
                                                <label className="lab_btn lab_cate">
                    <span className="wrap_arr">
                      <span className="ico_blog" />
                    </span>
                                                    <input
                                                        type="button"
                                                        className="btn_g"
                                                        defaultValue="open sub category"
                                                    />
                                                </label>
                                                <div className="basic_item">
                                                    <div className="wrap_drag" draggable="true">
                                                        <span className="ico_blog ico_drag" />
                                                    </div>
                                                    <div style={{ display: "inline" }}>
                                                        <div className="wrap_name">
                                                            <span className="txt_name">AWS</span>
                                                            <span className="txt_count">(0)</span>
                                                        </div>
                                                        <span className="txt_cate">IT 인터넷</span>
                                                        <div className="info_btn">
                                                            <a href="#" className="btn_post" draggable="false">
                                                                추가
                                                            </a>
                                                            <a href="#" className="btn_post" draggable="false">
                                                                수정
                                                            </a>
                                                            <a href="#" className="btn_post" draggable="false">
                                                                관리
                                                            </a>
                                                            <a href="#" className="btn_post" draggable="false">
                                                                이동
                                                            </a>
                                                            <a href="#" className="btn_post" draggable="false">
                                                                삭제
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bundle_item open_subcate">
                                            <div className="item_order">
                                                <label className="lab_btn lab_cate">
                    <span className="wrap_arr">
                      <span className="ico_blog" />
                    </span>
                                                    <input
                                                        type="button"
                                                        className="btn_g"
                                                        defaultValue="open sub category"
                                                    />
                                                </label>
                                                <div className="basic_item">
                                                    <div className="wrap_drag" draggable="true">
                                                        <span className="ico_blog ico_drag" />
                                                    </div>
                                                    <div style={{ display: "inline" }}>
                                                        <div className="wrap_name">
                                                            <span className="txt_name">회의록</span>
                                                            <span className="txt_count">(4)</span>
                                                        </div>
                                                        <div className="info_btn">
                                                            <a href="#" className="btn_post" draggable="false">
                                                                추가
                                                            </a>
                                                            <a href="#" className="btn_post" draggable="false">
                                                                수정
                                                            </a>
                                                            <a href="#" className="btn_post" draggable="false">
                                                                관리
                                                            </a>
                                                            <a href="#" className="btn_post" draggable="false">
                                                                이동
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="btn_post disabled"
                                                                draggable="false"
                                                            >
                                                                삭제
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bundle_item open_subcate">
                                            <div className="item_order">
                                                <label className="lab_btn lab_cate">
                    <span className="wrap_arr">
                      <span className="ico_blog" />
                    </span>
                                                    <input
                                                        type="button"
                                                        className="btn_g"
                                                        defaultValue="open sub category"
                                                    />
                                                </label>
                                                <div className="basic_item">
                                                    <div className="wrap_drag" draggable="true">
                                                        <span className="ico_blog ico_drag" />
                                                    </div>
                                                    <div style={{ display: "inline" }}>
                                                        <div className="wrap_name">
                                                            <span className="txt_name">GIT</span>
                                                            <span className="txt_count">(1)</span>
                                                        </div>
                                                        <div className="info_btn">
                                                            <a href="#" className="btn_post" draggable="false">
                                                                추가
                                                            </a>
                                                            <a href="#" className="btn_post" draggable="false">
                                                                수정
                                                            </a>
                                                            <a href="#" className="btn_post" draggable="false">
                                                                관리
                                                            </a>
                                                            <a href="#" className="btn_post" draggable="false">
                                                                이동
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="btn_post disabled"
                                                                draggable="false"
                                                            >
                                                                삭제
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wrap_add">
                                        <label className="lab_btn lab_add">
                                            <span className="ico_blog ico_add" />
                                            카테고리 추가
                                            <input
                                                type="button"
                                                className="btn_g"
                                                defaultValue="카테고리 추가"
                                            />
                                        </label>
                                        <span className="count_total">
                <span className="screen_out">카테고리 개수</span>
                <span className="txt_num">10</span> / 500
              </span>
                                    </div>
                                </div>
                            </div>
                            <div className="set_btn">
                                <button type="button" className="btn_save btn_off" disabled="">
                                    변경사항 저장
                                </button>
                            </div>
                        </div>
                        <h3 className="tit_cont">카테고리 설정</h3>
                        <form className="wrap_set">
                            <fieldset>
                                <legend className="screen_out">카테고리 설정</legend>
                                <div className="item_set">
                                    카테고리명이
                                    <input type="text" className="tf_set tf_set1" defaultValue={27} />
                                    글자까지 표시됩니다.
                                </div>
                                <div className="item_set">
                                    카테고리별 글 수를
                                    <div className="opt_set opt_cate2">
                                        <button type="button" className="btn_opt">
                                            <span className="txt_ellip">표시합니다</span>
                                            <span className="ico_blog ico_open" />
                                        </button>
                                        <div className="layer_opt">
                                            <label className="lab_set on">
                                                <input type="radio" className="inp_set" defaultValue={1} />
                                                <span className="txt_set txt_ellip">표시합니다</span>
                                            </label>
                                            <label className="lab_set">
                                                <input type="radio" className="inp_set" defaultValue={0} />
                                                <span className="txt_set txt_ellip">표시하지 않습니다</span>
                                            </label>
                                            <button type="button" className="btn_close">
                                                <span className="ico_blog" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="item_set">
                                    카테고리에 새 글 발행 여부를
                                    <div className="opt_set opt_cate3">
                                        <button type="button" className="btn_opt">
                                            <span className="txt_ellip">표시합니다</span>
                                            <span className="ico_blog ico_open" />
                                        </button>
                                        <div className="layer_opt">
                                            <label className="lab_set on">
                                                <input type="radio" className="inp_set" defaultValue={1} />
                                                <span className="txt_set txt_ellip">표시합니다</span>
                                            </label>
                                            <label className="lab_set">
                                                <input type="radio" className="inp_set" defaultValue={0} />
                                                <span className="txt_set txt_ellip">표시하지 않습니다</span>
                                            </label>
                                            <button type="button" className="btn_close">
                                                <span className="ico_blog" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="item_set item_sub">
                                    <div className="opt_set opt_cate4">
                                        <button type="button" className="btn_opt">
                                            <span className="txt_ellip">3일</span>
                                            <span className="ico_blog ico_open" />
                                        </button>
                                        <div className="layer_opt">
                                            <label className="lab_set">
                                                <input type="radio" className="inp_set" defaultValue={1} />
                                                <span className="txt_set txt_ellip">1일</span>
                                            </label>
                                            <label className="lab_set on">
                                                <input type="radio" className="inp_set" defaultValue={3} />
                                                <span className="txt_set txt_ellip">3일</span>
                                            </label>
                                            <label className="lab_set">
                                                <input type="radio" className="inp_set" defaultValue={5} />
                                                <span className="txt_set txt_ellip">5일</span>
                                            </label>
                                            <button type="button" className="btn_close">
                                                <span className="ico_blog" />
                                            </button>
                                        </div>
                                    </div>
                                    이내에 발행된 글이 있으면 새 글 여부를 표시합니다.
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend className="screen_out">저장 버튼</legend>
                                <button type="button" className="btn_save btn_off" disabled="">
                                    변경사항 저장
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Category;