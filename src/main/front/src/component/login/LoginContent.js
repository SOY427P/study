import React from 'react';

const LoginContent = () => {
    return (
        <div id="kakaoContent" role="main">
		<div id="cMain">
			<div id="mArticle">
				<div class="content_login content_login_type1">
					<div class="inner_login">
						<div class="login_tistory ">
							<h2 id="kakaoBody" class="screen_out">로그인</h2>
							<strong class="img_common_tistory txt_tistory_v1">TISTORY</strong>
							<form method="post" id="authForm" action="https://www.tistory.com/auth/login" data-tiara-layer="login_form">
								<input type="hidden" name="redirectUrl" value="https://www.tistory.com/"/>
								<fieldset>
									<legend class="screen_out">로그인 정보 입력폼</legend>
									<div class="box_login">
										<div class="inp_text">
											<label for="loginId" class="screen_out">아이디</label>
											<input type="email" id="loginId" name="loginId" placeholder="ID"/>
										</div>
										<div class="inp_text">
											<label for="loginPw" class="screen_out">비밀번호</label>
											<input type="password" id="loginPw" name="password" placeholder="Password"/>
										</div>
									</div>
									<button type="submit" class="btn_login" disabled="disabled" data-tiara-layer="login" data-tiara-action-kind="Login" data-tiara-action-name="로그인 클릭">로그인</button>
									<div class="login_append">
										<div class="inp_chk" data-tiara-layer="keep_state" data-tiara-action-name="로그인 상태 유지 클릭">
											<input type="checkbox" id="keepLogin" class="inp_radio" name="keepLogin"/><label for="keepLogin" class="lab_g"><span class="img_top ico_check"></span><span class="txt_lab">로그인 상태 유지</span></label>
										</div>
										<span class="txt_find">
										<a href="/member/find/loginId" class="link_find" data-tiara-layer="change_id" data-tiara-action-name="아이디 찾기 클릭">아이디</a>
										/ <a href="/member/find/password" class="link_find" data-tiara-layer="change_password" data-tiara-action-name="비밀번호 찾기 클릭">비밀번호 찾기</a>
										</span>
									</div>
								</fieldset>
								<input type="hidden" name="fp" value=""/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default LoginContent;