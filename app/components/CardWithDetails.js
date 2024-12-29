import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const CardWithDetails = ({ title, data }) => {
  return (
    <div className="max-w-[1200px] mx-auto w-full px-[15px] mt-[50px] mb-[20px]">
      <div className="flex items-center gap-2">
        <h2 className="text-greenish text-[14px] font-bold uppercase">
          {title}
        </h2>
        <div className="lg:w-[128px] w-[20px] h-[1.5px] bg-greenish"></div>
      </div>
      <div className="grid grid-cols-3 lg:gap-6 gap-[8px] mt-6">
        {data.map((loan) => (
          <Link
            key={loan.id}
            href={loan.link}
            className="relative scale-100 hover:scale-110 overflow-hidden p-[14px] lg:shadow-custom-green rounded-[8px] lg:border lg:border-green-border transition-all duration-300 hover:shadow-hover-blue"
          >
            <div className="flex lg:flex-row flex-col-reverse lg:items-start items-center lg:justify-between justify-center lg:gap-1 gap-2">
              <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center">
                <h2 className="text-[10px] lg:text-sm lg:font-[600] font-[400] mb-2 uppercase text-black lg:text-left text-center">
                  {loan.title}
                </h2>
                <p className="lg:block hidden text-[#69829f] text-[12px] mb-[15px] w-[80%]">
                  {loan.description}
                </p>
              </div>
              <div className="min-w-[54px] min-h-[54px]">
                <Image
                  src={loan.imageSrc}
                  alt={loan.imageAlt}
                  width={54}
                  height={54}
                />
              </div>
            </div>
            <button className="lg:flex items-center gap-1 hidden text-greenish text-[12px] font-semibold">
              {loan.buttonText} <MdKeyboardDoubleArrowRight />
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardWithDetails;
