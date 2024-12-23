"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";
import OTPModal from "../components/OTPModal";
import MobileInput from "../components/MobileInput";
import { BsCheckCircle, BsSearch, BsArrowRight } from "react-icons/bs";
import ApplicationForm from "./ApplicationForm";
import Info from "./Info";

export default function PersonalLoan() {
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleProceed = (number) => {
    setMobileNumber(number);
    setShowOtpModal(true);
  };

  const handleVerify = (otp) => {
    // Add your OTP verification logic here
    console.log("Verifying OTP:", otp);
    setIsVerified(true);
    setShowOtpModal(false);
  };

  const features = [
    "Compare & Choose the Best Offer",
    "Check Loan Amount Eligibility",
    "Know your Approval Chances",
  ];

  const features2 = [
    "Hand-picked offers from 30+ lenders",
    "Money in mins via Pre-Approved loans",
    "Instant sanction and disbursal",
    "Contact-less processes",
  ];

  return (
    <main className="flex md:flex-row flex-col md:h-screen overflow-y-auto">
      {/* Left Section */}
      <div
        className="md:block hidden lg:w-[43%] md:w-[47%] w-full px-[24px] py-[10px] md:h-screen overflow-y-auto"
        style={{
          background:
            "linear-gradient(180deg,rgb(222, 254, 202), rgba(243, 244, 255, 0))",
        }}
      >
        <Link
          href="/"
          className="flex-shrink-0 flex md:w-[75px] w-[70px] items-center ms-[-9px] my-[10px]"
        >
          <Image src="/logo.png" alt="logo" width={75} height={32} />
        </Link>
        <div className="max-w-[390px] mx-auto">
          <div className="">
            <h1 className="text-[24px] font-bold text-green-800 py-[20px]">
              Personal Loan
            </h1>
            <div className="space-y-[30px]">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-[24px] h-[24px] min-w-[24px] min-h-[24px] rounded-full bg-white/40 flex items-center justify-center">
                    <div className="w-[16px] h-[16px] rounded-full bg-white flex items-center justify-center">
                      <IoMdCheckmark
                        size={15}
                        className="text-green-600 flex-shrink-0"
                      />
                    </div>
                  </div>
                  <span className="text-[14px] text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src="/assets/personal-loan.svg"
              alt="personal-loan"
              width={309}
              height={359}
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-[57%] md:w-[53%] w-full bg-white overflow-y-auto md:h-screen">
        <div className="md:hidden flex items-center justify-between px-[24px] py-[10px]">
          <Link
            href="/"
            className="flex-shrink-0 flex md:w-[75px] w-[70px] items-center ms-[-9px] my-[10px]"
          >
            <Image src="/logo.png" alt="logo" width={75} height={32} />
          </Link>
        </div>
        <div className="md:p-12 px-5 pb-5">
          <div className="max-w-[480px] mx-auto mt-0 md:mt-[15px]">
            {!isVerified ? (
              <>
                {/* Main Content */}
                <div className="mt-0 md:mt-[15px]">
                  <h2 className="text-[20px] text-greenish mb-[8px]">
                    <span className="font-[500]">Unlock Best</span>{" "}
                    <span className="font-bold">Personal Loan</span>{" "}
                    <span className="font-[500]">
                      Offers suitable for your needs from
                    </span>{" "}
                    <span className="font-bold">30+ Lenders</span>
                  </h2>
                  <div className="w-[50px] h-[2px] flex bg-green-500 mt-1 mb-4"></div>

                  {/* Features */}
                  <div className="mb-[25px]">
                    {features2.map((feature2, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-[12px] font-[500] text-gray-600 md:py-[10px] py-[5px]"
                      >
                        <BsCheckCircle
                          size={16}
                          className="min-w-[16px] text-green-600"
                        />
                        <span>{feature2}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Number Input */}
                  <MobileInput onProceed={handleProceed} />

                  {/* Proceed Button */}
                  <button
                    onClick={() => handleProceed(mobileNumber)}
                    className="w-full bg-greenish text-white md:py-4 py-2 font-[600] rounded-lg hover:bg-green-600 transition-colors mt-[24px]"
                  >
                    Proceed
                  </button>

                  {/* OTP Modal */}
                  <OTPModal
                    phoneNumber={`+91-${mobileNumber}`}
                    isOpen={showOtpModal}
                    onClose={() => setShowOtpModal(false)}
                    onVerify={handleVerify}
                  />

                  {/* Terms */}
                  <p className="text-center text-[10px] md:text-xs text-gray-500 my-[10px]">
                    By clicking on proceed, you have read and agree to the{" "}
                    <a href="#" className="text-green-700">
                      Credit Report Terms of Use
                    </a>
                    ,{" "}
                    <a href="#" className="text-green-700">
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-green-700">
                      Privacy Policy
                    </a>
                  </p>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-2 gap-[30px] mt-[20px]">
                    <div className="border p-[15px] rounded-lg">
                      <div className="mb-4 ms-[-15px] mt-[-15px]">
                        <Image
                          src="/assets/reward-banner.svg"
                          alt="Calculator"
                          width={85}
                          height={65}
                        />
                      </div>
                      <h3 className="text-[10px] font-[700] text-green-900">
                        Credit Card Reward Calculator
                      </h3>
                      <a
                        href="#"
                        className="text-greenish text-[10px] font-[600] pt-[8px] flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Calculate Now <BsArrowRight />
                      </a>
                    </div>
                    <div className="border p-[15px] rounded-lg">
                      <div className="mb-4 ms-[-15px] mt-[-15px]">
                        <Image
                          src="/assets/redeem-points.svg"
                          alt="Rewards"
                          width={85}
                          height={65}
                        />
                      </div>
                      <h3 className="text-[10px] font-[700] text-green-900">
                        Redeem Credit Card Reward Points
                      </h3>
                      <a
                        href="#"
                        className="text-greenish text-[10px] font-[600] pt-[8px] flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Check Now <BsArrowRight />
                      </a>
                    </div>
                  </div>

                  <Info />
                </div>
              </>
            ) : (
              <ApplicationForm />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
