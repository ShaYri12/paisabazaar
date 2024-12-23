"use client";
import Image from "next/image";
import { BsCheckCircle, BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import MobileInput from "../components/MobileInput";
import { useState } from "react";
import OTPModal from "../components/OTPModal";
import { ApplicationForm } from "./ApplicationForm";

export default function HomeLoan() {
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
    "Compare Offers from Top Banks",
    "Best Interest Rate",
    "Loan Tenure up to 30 Years",
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
          <div className="mb-4">
            <h1 className="text-[24px] font-bold text-green-800 py-[20px]">
              Home Loan
            </h1>
            <p className="text-[14px] font-[400] text-gray-700">
              Owning a house and calling it your home is a dream many of us
              carry in our hearts. Paisabazaar helps you achieve that dream by
              offering the best deal.
            </p>
          </div>
          <div className="relative flex items-center justify-center mt-4">
            <Image
              src="/assets/home-loan.svg"
              alt="Home Loan"
              width={310}
              height={310}
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
        <div className="md:p-12 pb-5 px-5 overflow-y-auto min-h-screen">
          <div className="max-w-[480px] mx-auto">
            {!isVerified ? (
              <>
                {/* Main Content */}
                <div className="md:mt-[15px]">
                  <h2 className="text-[20px] text-greenish mb-[8px]">
                    <span className="font-[500]">Unlock Best</span>{" "}
                    <span className="font-bold">Home Loan</span>{" "}
                    <span className="font-[500]">Offers</span>
                    <br />
                    <span className="font-[500]">from</span>{" "}
                    <span className="font-bold">20+ Lenders</span>
                  </h2>

                  {/* Features */}
                  <div className="mb-[25px] space-y-[16px] mt-[16px]">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-[12px] font-[500] text-gray-600"
                      >
                        <BsCheckCircle
                          size={16}
                          className="min-w-[16px] text-green-600"
                        />
                        <span>{feature}</span>
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
                  <p className="text-center text-[12px] md:text-sm text-gray-500 my-[10px]">
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
