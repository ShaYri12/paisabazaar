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
      <h1 className="text-[28px] font-[700] text-[#3a3ee5] leading-[44px] mb-[15px]">
        Your Credit Score & Report{" "}
        <span className="line-through">worth ₹1,200</span>{" "}
        <span className="text-[#d90368]">Absolutely FREE</span>
      </h1>
    ),
    description: (
      <p className="mb-[25px] text-base text-[#052f5] opacity-[0.6]">
        Your credit score is more than just a number. It's the key to help you
        unlock the doors to the best loans & credit card offers available.
      </p>
    ),
    cta: "Get Free Credit Report",
    image: "/assets/hp-banner-img.svg",
  },
  {
    title: (
      <h1 className="text-[28px] font-[700] text-[#3a3ee5] leading-[44px] mb-[8px]">
        Looking for the{" "}
        <span className="text-[#d90368]">Best Credit Card?</span>
      </h1>
    ),
    description: (
      <div className="flex items-center gap-8 mb-[24px]">
        <p className="flex flex-wrap items-center text-[#052F5FCC] text-base font-[600]">
          <span className="w-[24px] h-[1px] bg-[#d90368] mr-[8px]"></span>
          Search Cards by Card Name/Categories
        </p>
        <p className="flex items-center text-[#052F5FCC] text-base font-[600]">
          <span className="w-[24px] h-[1px] bg-[#d90368] mr-[8px]"></span>
          Choose from 400+ Credit Cards
        </p>
      </div>
    ),
    cta: "Search Credit Cards",
    image: "/assets/search-banner.png",
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
          i === currentSlide ? "bg-[#0066FF]" : "bg-gray-300"
        }`}
      />
    ),
  };

  return (
    <div
      className="relative h-[460px] pt-[100px] mb-[20px] border-b-[3px] border-[#e8eef8] flex items-center justify-center"
      style={{ background: "linear-gradient(180deg, #fff 0, #f9fbff 100%)" }}
    >
      <Slider
        {...settings}
        className="w-full h-full flex items-center justify-center"
      >
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 h-full w-full flex items-center justify-center"
          >
            <div className="lg:grid lg:grid-cols-12 lg:gap-[50px] h-full w-full">
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="relative h-[320px] w-full">
                  <Image
                    src={slide.image}
                    alt="Credit Score Illustration"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-7 flex items-center justify-center lg:justify-start">
                <div className="text-center lg:text-left">
                  {slide.title}
                  {slide.description}
                  <div className="">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-2 ps-[32px] pe-[28px] py-[18px] text-base font-[600] rounded-[8px] text-white bg-[#1b1dc7] hover:bg-blue-700"
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
