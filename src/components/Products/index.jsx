import Products1 from './Products1'
import Products2 from './Products2'
import './index.scss'
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Products() {
  return (
    <div>
      <h2>As Mais Pedidas</h2>
      <div className="container-products">

    <Swiper
      modules={[Navigation, Pagination,A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={5}
      loop={true}
      autoplay={true}
      navigation
    >
          <SwiperSlide>
            <Products1 />
          </SwiperSlide>
          <SwiperSlide>
            <Products2 />
          </SwiperSlide>
          <SwiperSlide>
            <Products1 />
          </SwiperSlide>
          <SwiperSlide>
            <Products2 />
          </SwiperSlide>
          <SwiperSlide>
            <Products1 />
          </SwiperSlide>
          <SwiperSlide>
            <Products2 />
          </SwiperSlide>
          <SwiperSlide>
            <Products1 />
          </SwiperSlide>
          <SwiperSlide>
            <Products2 />
          </SwiperSlide>
          <SwiperSlide>
            <Products1 />
          </SwiperSlide>
          <SwiperSlide>
            <Products2 />
          </SwiperSlide>
          <SwiperSlide>
            <Products1 />
          </SwiperSlide>
          <SwiperSlide>
            <Products2 />
          </SwiperSlide>
          <SwiperSlide>
            <Products1 />
          </SwiperSlide>
          <SwiperSlide>
            <Products2 />
          </SwiperSlide>
    </Swiper>
      </div> 
    </div>
  )
}
