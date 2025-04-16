import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./resedencies.css"
import data from "../../utils/slider.json"

const Resendencies = () => {
  return (
    <section className="r-wrapper" id="residencies">
      <h3>Our Top Resedencies</h3>
      <div className="r-container">
      <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={1}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 1600, 
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 } 
          }}
        >
          {data.map((card, i) => (
            <SwiperSlide key={i}>
            <div className="r-card">
            <img src={`${process.env.PUBLIC_URL}${card.image}`} alt={card.name} />
              <span className='r-price'>
                <span>$</span>{card.price}
              </span>
              <span className='r-name'>{card.name}</span>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Resendencies;