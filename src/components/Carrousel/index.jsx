// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Content from './Content';
import './index.scss'

export default function Carrousel() {
  return (
    <div className='container-slider'>
      <Swiper
      modules={[Navigation, Pagination,A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={true}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
      <Content />
      </SwiperSlide>
      <SwiperSlide>
      <Content />
      </SwiperSlide>
      <SwiperSlide>
      <Content />
      </SwiperSlide>
      <SwiperSlide>
      <Content />
      </SwiperSlide>
      <SwiperSlide>
      <Content />
      </SwiperSlide>

      ...
    </Swiper>
      
    </div>
  )
}
