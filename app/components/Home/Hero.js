"use client";
import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderData = [
  {
    title: "Your Credit Score & Report",
    subtitle: "worth ₹1,200 Absolutely FREE",
    description:
      "Your credit score is more than just a number. It's the key to help you unlock the doors to the best loans & credit card offers available",
    cta: "Get Free Credit Report",
    image: "/placeholder.svg?height=500&width=600",
  },
  {
    title: "Personalized Loan Offers",
    subtitle: "Find the best rates for you",
    description:
      "Compare and choose from a wide range of loan options tailored to your credit profile and financial needs.",
    cta: "Explore Loan Offers",
    image: "/placeholder.svg?height=500&width=600",
  },
  {
    title: "Credit Card Recommendations",
    subtitle: "Discover cards that fit your lifestyle",
    description:
      "Get personalized credit card recommendations based on your spending habits and credit score.",
    cta: "Find Your Card",
    image: "/placeholder.svg?height=500&width=600",
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
        className={`w-2 h-2 rounded-full ${
          i === currentSlide ? "bg-[#0066FF]" : "bg-gray-300"
        }`}
      />
    ),
  };

  return (
    <div className="relative bg-white pt-16">
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div key={index}>
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 py-12">
                <div className="lg:col-span-6">
                  <div className="relative h-[400px] md:h-[500px] w-full">
                    <Image
                      src={slide.image}
                      alt="Credit Score Illustration"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-6">
                  <div className="text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-bold text-[#0066FF] sm:text-5xl md:text-6xl">
                      {slide.title}
                    </h1>
                    <div className="mt-3 sm:mt-5">
                      <p className="text-xl md:text-2xl">
                        <span className="line-through text-gray-500">
                          worth ₹1,200
                        </span>{" "}
                        <span className="text-[#E91E63] font-bold">
                          {slide.subtitle}
                        </span>
                      </p>
                    </div>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      {slide.description}
                    </p>
                    <div className="mt-8 sm:mt-10">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0066FF] hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                      >
                        {slide.cta}
                      </a>
                    </div>
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
