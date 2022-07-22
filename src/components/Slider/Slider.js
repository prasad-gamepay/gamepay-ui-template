import React, { Component } from "react";
import Slider from "react-slick";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <div className="img">
            <img src="http://via.placeholder.com/100" />
          </div>
        </div>
        <div>
          <div className="img">
            <img src="http://via.placeholder.com/100" />
          </div>
        </div>
        <div>
          <div className="img">
            <img src="http://via.placeholder.com/100" />
          </div>
        </div>
        <div>
          <div className="img">
            <img src="http://via.placeholder.com/100" />
          </div>
        </div>
        <div>
          <div className="img">
            <img src="http://via.placeholder.com/100" />
          </div>
        </div>
        <div>
          <div className="img">
            <img src="http://via.placeholder.com/100" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
