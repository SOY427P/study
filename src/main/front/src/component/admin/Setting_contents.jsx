import React from 'react';
import Menu from './Menu';


function Setting_contents() {
    return (
        <>
            <Menu />
            <div id="mArticle">
                <div className="inner_article">
                    <h2 id="kakaoBody" className="screen_out">
                        블로그관리 본문
                    </h2>
                    <h3 className="tit_cont">콘텐츠 설정</h3>
                    <form className="wrap_set">
                        <fieldset>
                            <div className="item_set">
                                글쓰기 시 기본으로 저장할 글 상태는
                                <div className="opt_set opt_post1">
                                    <button type="button" className="btn_opt">
                                        <span className="txt_ellip">비공개</span>
                                        <span className="ico_blog ico_open" />
                                    </button>
                                    <div className="layer_opt">
                                        <label className="lab_set">
                                            <input type="radio" className="inp_set" defaultValue={3} />
                                            <span className="txt_set txt_ellip">공개</span>
                                        </label>
                                        <label className="lab_set">
                                            <input type="radio" className="inp_set" defaultValue={1} />
                                            <span className="txt_set txt_ellip">보호</span>
                                        </label>
                                        <label className="lab_set on">
                                            <input type="radio" className="inp_set" defaultValue={0} />
                                            <span className="txt_set txt_ellip">비공개</span>
                                        </label>
                                        <button type="button" className="btn_close">
                                            <span className="ico_blog" />
                                        </button>
                                    </div>
                                </div>
                                로 설정합니다.
                            </div>
                            <div className="item_set">
                                단락 앞뒤에 공백을
                                <div className="opt_set opt_ccl1">
                                    <button type="button" className="btn_opt">
                                        <span className="txt_ellip">사용하지 않습니다</span>
                                        <span className="ico_blog ico_open" />
                                    </button>
                                    <div className="layer_opt">
                                        <label className="lab_set">
                                            <input type="radio" className="inp_set" defaultValue={0} />
                                            <span className="txt_set txt_ellip">사용합니다</span>
                                        </label>
                                        <label className="lab_set on">
                                            <input type="radio" className="inp_set" defaultValue={1} />
                                            <span className="txt_set txt_ellip">사용하지 않습니다</span>
                                        </label>
                                        <button type="button" className="btn_close">
                                            <span className="ico_blog" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend className="screen_out">저작물 사용 허가(CCL) 설정</legend>
                            <div className="item_set">
                                저작물 사용 허가(CCL)를
                                <div className="opt_set opt_ccl1">
                                    <button type="button" className="btn_opt">
                                        <span className="txt_ellip">표시하지 않습니다</span>
                                        <span className="ico_blog ico_open" />
                                    </button>
                                    <div className="layer_opt">
                                        <label className="lab_set">
                                            <input type="radio" className="inp_set" defaultValue={1} />
                                            <span className="txt_set txt_ellip">표시합니다</span>
                                        </label>
                                        <label className="lab_set on">
                                            <input type="radio" className="inp_set" defaultValue={0} />
                                            <span className="txt_set txt_ellip">표시하지 않습니다</span>
                                        </label>
                                        <button type="button" className="btn_close">
                                            <span className="ico_blog" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="item_set item_sub" style={{ display: "none" }}>
                                상업적 이용을
                                <div className="opt_set opt_ccl2">
                                    <button type="button" className="btn_opt">
                                        <span className="txt_ellip">허용</span>
                                        <span className="ico_blog ico_open" />
                                    </button>
                                    <div className="layer_opt">
                                        <label className="lab_set on">
                                            <input type="radio" className="inp_set" defaultValue={1} />
                                            <span className="txt_set txt_ellip">허용</span>
                                        </label>
                                        <label className="lab_set">
                                            <input type="radio" className="inp_set" defaultValue={2} />
                                            <span className="txt_set txt_ellip">비허용</span>
                                        </label>
                                        <button type="button" className="btn_close">
                                            <span className="ico_blog" />
                                        </button>
                                    </div>
                                </div>
                                합니다.
                            </div>
                            <div className="item_set item_sub" style={{ display: "none" }}>
                                콘텐츠 변경을
                                <div className="opt_set opt_ccl3">
                                    <button type="button" className="btn_opt">
                                        <span className="txt_ellip">허용</span>
                                        <span className="ico_blog ico_open" />
                                    </button>
                                    <div className="layer_opt">
                                        <label className="lab_set on">
                                            <input type="radio" className="inp_set" defaultValue={1} />
                                            <span className="txt_set txt_ellip">허용</span>
                                        </label>
                                        <label className="lab_set">
                                            <input type="radio" className="inp_set" defaultValue={2} />
                                            <span className="txt_set txt_ellip">비허용</span>
                                        </label>
                                        <label className="lab_set">
                                            <input type="radio" className="inp_set" defaultValue={3} />
                                            <span className="txt_set txt_ellip">동일 설정시 허락</span>
                                        </label>
                                        <button type="button" className="btn_close">
                                            <span className="ico_blog" />
                                        </button>
                                    </div>
                                </div>
                                합니다.
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


        </>
    );
}

export default Setting_contents;