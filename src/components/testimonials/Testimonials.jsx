import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ClientData = [
  {
    id: 1,
    Image: AVTR1,
    Name: "Ernest Achiever",
    Review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              dolorem est aliquam, pariatur ad iure. Nihil, qui libero fugiat in
              ex, cum consequuntur dolore a et illum inventore, dolorem voluptas`,
  },
  {
    id: 2,
    Image: AVTR2,
    Name: "Ayas Muhammed",
    Review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              dolorem est aliquam, pariatur ad iure. Nihil, qui libero fugiat in
              ex, cum consequuntur dolore a et illum inventore, dolorem voluptas`,
  },
  {
    id: 3,
    Image: AVTR3,
    Name: "Krishna",
    Review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              dolorem est aliquam, pariatur ad iure. Nihil, qui libero fugiat in
              ex, cum consequuntur dolore a et illum inventore, dolorem voluptas`,
  },
  {
    id: 4,
    Image: AVTR4,
    Name: "Jordan Loake",
    Review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              dolorem est aliquam, pariatur ad iure. Nihil, qui libero fugiat in
              ex, cum consequuntur dolore a et illum inventore, dolorem voluptas`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper  pagination={{ clickable: true }} modules={[Pagination]} spaceBetween={40} slidesPerView={1} className="testimonials__container container">
        
        {ClientData.map(({ id, Image, Name, Review }) => {
          return (
            <SwiperSlide key={id} className="testimonials__card">
              <div className="client">
                <img src={Image} alt="" />
              </div>
              <h5 className="client__name">{Name}</h5>
              <small className="client__review">{Review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
