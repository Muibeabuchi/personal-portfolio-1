import testimonialData from "../data/testimonialData";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// import "~swiper/modules/pagination/pagination";
// import "~swiper/swiper";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialData.map(({ id, client, image, review }) => {
          return (
            <SwiperSlide className="testimonial" key={id}>
              <div className="client__avatar">
                <img src={image} alt="client avatar" />
              </div>
              <h5 className="client__name">{client}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
