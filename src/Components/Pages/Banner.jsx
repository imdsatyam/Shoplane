import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import Image from "/Visusal Studio Codes/Projects React/shoplane/src/Assets/H&M.png";
import Image_2 from "/Visusal Studio Codes/Projects React/shoplane/src/Assets/US Polo.png";
import Image_3 from "/Visusal Studio Codes/Projects React/shoplane/src/Assets/Wonder Women.png";
import Image_4 from "/Visusal Studio Codes/Projects React/shoplane/src/Assets/Puma.png";

function Banner() {
  return (
    <div className="Banner">
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image_4} alt="" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default Banner;
