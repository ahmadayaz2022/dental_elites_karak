import { testimonials } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";

function TestimonialsSection() {
  return (
    <section className="py-28 bg-white">
      <div className="container-custom">

        <div className="text-center mb-16">
          <p className="section-subtitle">
            Testimonials
          </p>

          <h2 className="section-title mt-3">
            What Our Patients Say
          </h2>

          <p className="section-description mt-5">
            We are proud to have earned the trust of our patients
            through exceptional dental care and personalized treatment.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          autoplay={{ delay: 3500 }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
          }}
        >

          {testimonials.map((item) => (

            <SwiperSlide key={item.id}>

              <div className="card p-8 h-full">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto"
                />

                <div className="flex justify-center gap-1 mt-5">

                  {[...Array(item.rating)].map((_, i) => (

                    <FaStar
                      key={i}
                      className="text-yellow-400"
                    />

                  ))}

                </div>

                <p className="mt-6 text-slate-500 leading-8">

                  "{item.review}"

                </p>

                <h3 className="text-xl font-bold mt-8">

                  {item.name}

                </h3>

                <p className="text-sky-600">

                  {item.treatment}

                </p>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>
    </section>
  );
}

export default TestimonialsSection;