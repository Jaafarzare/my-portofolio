"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { testimonials } from "@/data/data";

const TestimonialsSlider = () => {
  return (
    <div className="w-full py-12 bg-gray-100">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-full"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <div className="flex gap-4 ">
              <div>
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="rounded-full mx-auto mb-4"
                  width={256}
                  height={256}
                />
              </div>
              <div className="flex flex-col  gap-4">
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-gray-700 mb-5">{testimonial.comment}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSlider;
