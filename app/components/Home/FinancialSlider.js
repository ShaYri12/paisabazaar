"use client";
import Slider from "react-slick";
import { FaTrophy } from "react-icons/fa";
import { BsCalculator, BsCreditCard2Front } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const slides = [
  {
    title: (
      <>
        <span className="text-blue-700">"Best Lending Fintech"</span> at BFS
        2023 &
        <span className="text-blue-700"> "Most Innovative Digital Lender"</span>{" "}
        at IFTA 2023
      </>
    ),
    icon: <FaTrophy className="w-16 h-16 text-yellow-500" />,
    bgColor: "bg-yellow-400",
    dotPattern: "right-4 top-4",
  },
  {
    title: (
      <>
        Proudly made in <span className="text-blue-700">India</span>, for
        Indians around the world
      </>
    ),
    icon: (
      <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-blue-600">
        <span className="text-blue-700 font-bold text-sm text-center leading-tight">
          MADE IN
          <br />
          INDIA
        </span>
      </div>
    ),
    bgColor: "bg-blue-500",
    dotPattern: "right-4 bottom-4",
  },
  {
    title: (
      <>
        Calculate Reward Earnings on Your Credit Card
        <a
          href="#"
          className="block text-blue-600 text-sm mt-2 hover:underline"
        >
          Check Now
        </a>
      </>
    ),
    icon: (
      <div className="flex gap-2">
        <BsCreditCard2Front className="w-12 h-12 text-purple-700" />
        <BsCalculator className="w-12 h-12 text-purple-700" />
      </div>
    ),
    bgColor: "bg-purple-400",
    dotPattern: "right-4 bottom-4",
  },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg text-blue-600 flex items-center justify-center z-10"
    aria-label="Next slide"
  >
    <IoIosArrowForward className="w-6 h-6" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg text-blue-600 flex items-center justify-center z-10"
    aria-label="Previous slide"
  >
    <IoIosArrowBack className="w-6 h-6" />
  </button>
);

export default function FinancialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div style={{ bottom: "-40px" }}>
        <ul
          style={{
            margin: "0px",
            padding: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
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
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="text-blue-700 text-2xl font-bold mb-8">
        KEEPING YOU FINANCIALLY HEALTHY AND SAFE, ALWAYS
      </h1>

      <div className="relative pb-16">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="outline-none">
              <div className="bg-white rounded-lg shadow-lg p-8 min-h-[200px] relative overflow-hidden mx-4">
                <div
                  className={`absolute -left-20 -top-20 w-80 h-80 rounded-full ${slide.bgColor} opacity-20 blur-3xl`}
                />
                <div className={`absolute ${slide.dotPattern} w-16 h-16`}>
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 bg-gray-300 rounded-full"
                      />
                    ))}
                  </div>
                </div>

                <div className="relative flex items-center gap-8">
                  <div className="flex-shrink-0">{slide.icon}</div>
                  <div className="flex-grow">
                    <h2 className="font-semibold text-gray-800">
                      {slide.title}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
