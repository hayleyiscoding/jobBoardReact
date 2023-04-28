import Slider from "react-slick";
import { testimonialData } from "../constants";
import quote from "../assets/icons/quote.png";
import stars from "../assets/icons/rating.png";
import React from "react";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-test">
      <Slider {...settings}>
        {testimonialData.map((person, index) => (
          <li key={person.id} className="slide flex-col">
            <h5 className="testimonial-title">{person.title}</h5>
            <img src={stars} className="testimonial-stars" alt="stars" />
            <h6 className="testimonial-quote-h6">{person.quote}</h6>
            <hr />
            <div className="flex-start testimonial-author-mt">
              <div className="testimonial-avatar">
                <img
                  src={person.avatar}
                  alt={`${person.name} avatar`}
                  width={50}
                />
              </div>
              <div>
                <div className="testimonial-name">{person.name}</div>
                <div>{person.location}</div>
              </div>
              <div>
                <img src={quote} alt="quote mark" />
              </div>
            </div>
          </li>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
