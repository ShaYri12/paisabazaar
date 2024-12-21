"use client";
import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";

const sliderData = [
  {
    title: (
      <h1 className="text-[13px] lg:text-[28px] font-[700] text-greenish lg:leading-[44px] lg:mb-[15px]">
        Your Credit Score & Report <br className="sm:flex hidden" />{" "}
        <span className="line-through">worth ₹1,200</span>{" "}
        <span className="text-greenish">Absolutely FREE</span>
      </h1>
    ),
    description: (
      <p className="mb-[10px] lg:mb-[25px] text-[10px] lg:text-base text-[#052f5] opacity-[0.6]">
        Your credit score is more than just a number. It's the key to help you
        unlock the doors to the best loans & credit card offers available.
      </p>
    ),
    cta: "Get Free Credit Report",
    image: "/assets/slider1.png",
  },
  {
    title: (
      <h1 className="text-[13px] lg:text-[28px] font-[700] text-greenish lg:leading-[44px] lg:mb-[15px]">
        Proccessing fee @0 <br className="sm:flex hidden" />{" "}
        <span className="line-through"> processing fee</span>
        <span className="text-greenish"> Absolutely FREE</span>
      </h1>
    ),
    description: (
      <p className="mb-[10px] lg:mb-[25px] text-[10px] lg:text-base text-[#052f5] opacity-[0.6]">
        Your credit score is more than just a number. It's the key to help you
        unlock the doors to the best loans & credit card offers available.
      </p>
    ),
    cta: "Apply Now",
    image: "/assets/slider1.png",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: (i) => (
      <div
        className={`w-[6px] h-[6px] rounded-full ${
          i === currentSlide ? "bg-greenish" : "bg-gray-300"
        }`}
      />
    ),
  };

  return (
    <div
      className="relative lg:h-[460px] pt-[80px] lg:pt-[100px] mb-[20px] border-b-[3px] border-[#e8eef8] flex items-center justify-center"
      style={{ background: "linear-gradient(180deg, #fff 0, #f3f7ff 100%)" }}
    >
      <Slider
        {...settings}
        className="w-full h-full flex items-center justify-center"
      >
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 lg:py-0 py-4 h-full w-full flex items-center justify-center"
          >
            <div className="grid grid-cols-12 lg:gap-[50px] gap-4 h-full w-full">
              <div className="col-span-5 flex items-center justify-center">
                <div className="relative lg:h-[320px] w-full">
                  <img
                    src={slide.image}
                    alt="Credit Score Illustration"
                    priority
                  />
                </div>
              </div>
              <div className="col-span-7 flex items-center justify-center lg:justify-start">
                <div className="text-left">
                  {slide.title}
                  {slide.description}
                  <div className="">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-1 lg:gap-2 ps-[10px] lg:ps-[32px] lg:pe-[28px] pe-[10px] py-[4px] lg:py-[18px] text-[11px] sm:text-[12px] lg:text-base font-[600] rounded-[8px] text-white bg-greenish hover:bg-green-600"
                    >
                      {slide.cta}
                      <IoIosArrowForward className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
