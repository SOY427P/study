import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation"; // *
import "swiper/css/pagination"; // *

<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"></link>
SwiperCore.use([Navigation, Pagination, Autoplay])



function MainPage() {
  const swiperStyle = {
   
    width: "100%", /* 슬라이드 너비에 맞게 이미지 크기 조정 */
    height: "500px" /* 비율에 맞게 이미지 높이 조정 */
  };
  return(
    <div>
      <Swiper style={swiperStyle}
      spaceBetween={50}
      slidesPerView='auto'
      onSlideChange={() => console.log('slide change')}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      loopedSlides={1}
      autoplay={{delay: 1000}}
      >
        <SwiperSlide><img src="1.png" style={{ width: '100%', height: '500px' }}/></SwiperSlide>
        <SwiperSlide><img src="2.png" style={{ width: '100%', height: '500px' }}/></SwiperSlide>
        <SwiperSlide><img src="3.png" style={{ width: '100%', height: '500px' }}/></SwiperSlide>
        <SwiperSlide><img src="4.png" style={{ width: '100%', height: '500px' }}/></SwiperSlide>
      </Swiper>
    
      
<div class="support_section">
						<h4>저희는 이것을 블로그로 만들거에요</h4>
						<ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none'}}>
							<li>
								<img src='1.png' style={{ width: '400px', height: '400px'}}/>
								<dl><strong>에스파</strong><dd>에스파</dd></dl>
							</li>
							<li>
								<img src='2.png' style={{ width: '400px', height: '400px' }}/>
								<dl><strong>카리나</strong><dd>카리나</dd></dl>
							</li>
							<li>
								<img src='3.png' style={{ width: '400px', height: '400px' }}/>
								<dl><strong>르세라핌</strong><dd>르세라핌</dd></dl>
							</li>
              <li>
								<img src='4.png' style={{ width: '400px', height: '400px' }}/>
								<dl><strong>아이브</strong><dd>아이브</dd></dl>
							</li>
						</ul>
					</div>
       
    <div>

      </div>
    </div>
    
  )
}

export default MainPage;
