import React from 'react';

const LoginHeader = () => {
    return (
        <div id="kakaoHead" role="banner" class="kakao_head head_type1">
		<div class="inner_header">
			<h1>
			<a href="../../login#" id="kakaoServiceLogo" class="link_logo">
			<span class="img_common_tistory tit_tistory tit_tistory_white">티스토리</span>
			<span class="img_common_tistory tit_tistory tit_tistory_black"></span>
			</a>
			</h1>
			<div class="info_tistory">
				<div class="logn_tistory">
					<a href="../../login#" class="btn_tistory btn_log_info">가입하기</a>
				</div>
			</div>
		</div>
	</div>
    )
}

export default LoginHeader;