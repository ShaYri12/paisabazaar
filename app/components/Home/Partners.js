"use client";
import React, { useState } from "react";

export default function Partners() {
  const partners = [
    { id: 1, name: "State Bank of India", logo: "/partner/1.jpg" },
    { id: 2, name: "Central Bank of India", logo: "/partner/2.jpg" },
    { id: 3, name: "Bajaj Finserv", logo: "/partner/3.jpg" },
    { id: 4, name: "Federal Bank", logo: "/partner/4.jpg" },
    { id: 5, name: "HDFC Bank", logo: "/partner/5.jpg" },
    { id: 6, name: "Industar", logo: "/partner/6.jpg" },
    { id: 7, name: "IDFC First Bank", logo: "/partner/7.jpg" },
    { id: 8, name: "Fullerton India", logo: "/partner/8.jpg" },
    { id: 9, name: "Aditya Birla Group", logo: "/partner/9.jpg" },
    { id: 10, name: "HDFC Bank", logo: "/partner/10.jpg" },
    { id: 11, name: "Tata Capital", logo: "/partner/11.jpg" },
    { id: 12, name: "ICICI Bank", logo: "/partner/12.jpg" },
    { id: 13, name: "Indiabulls", logo: "/partner/13.jpg" },
    { id: 14, name: "Ziploan", logo: "/partner/14.jpg" },
    { id: 15, name: "IndusInd Bank", logo: "/partner/15.jpg" },
    { id: 16, name: "RBL Bank", logo: "/partner/16.jpg" },
    { id: 17, name: "DCB Bank", logo: "/partner/17.jpg" },
    { id: 18, name: "Neo Growth", logo: "/partner/18.jpg" },
    { id: 19, name: "Yes Bank", logo: "/partner/19.jpg" },
    { id: 20, name: "Faircent", logo: "/partner/20.jpg" },
    { id: 21, name: "Yes Bank", logo: "/partner/21.jpg" },
    { id: 22, name: "Faircent", logo: "/partner/22.jpg" }
  ];

  return (
    <div className="bg-[#eaffe7] pt-[50px] pb-[60px] px-4">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[#232323] text-[24px] font-bold mt-[20px] mb-[26px]">
          Our Partners
        </h2>

        <div className="flex items-center md:flex-row flex-col justify-between gap-10 lg:gap-20">
          <div className="w-full grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white m-1 md:m-2.5 p-2.5 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  draggable="false"
                  className="max-h-[37px] w-auto object-contain hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <img
              src="/partners-pic.png"
              alt="Partnership illustration"
              className="animation-custom"
              draggable="false"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

