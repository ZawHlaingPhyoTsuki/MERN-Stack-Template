import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TeamProfile() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container mt-20">
      <Slider {...settings}>
        <div className="px-2">
          <img className="" src="../../../public/Pasted image (2).png" alt="" />
          <h2 className="mt-3 text-2xl font-semibold">Tom Cruise</h2>
          <p className="mt-2 mb-4 font-sans">Founder & Chairman</p>
        </div>
        <div className="px-2">
          <img className="" src="../../../public/Pasted image (2).png" alt="" />
          <h2 className="mt-3 text-2xl font-semibold">Tom Cruise</h2>
          <p className="mt-2 mb-4 font-sans">Founder & Chairman</p>
        </div>
        <div className="px-2">
          <img className="" src="../../../public/Pasted image (2).png" alt="" />
          <h2 className="mt-3 text-2xl font-semibold">Tom Cruise</h2>
          <p className="mt-2 mb-4 font-sans">Founder & Chairman</p>
        </div>
        <div className="px-2">
          <img className="" src="../../../public/Pasted image (2).png" alt="" />
          <h2 className="mt-3 text-2xl font-semibold">Tom Cruise</h2>
          <p className="mt-2 mb-4 font-sans">Founder & Chairman</p>
        </div>
        <div className="px-2">
          <img className="" src="../../../public/Pasted image (2).png" alt="" />
          <h2 className="mt-3 text-2xl font-semibold">Tom Cruise</h2>
          <p className="mt-2 mb-4 font-sans">Founder & Chairman</p>
        </div>
      </Slider>
    </div>
  );
}

export default TeamProfile;
