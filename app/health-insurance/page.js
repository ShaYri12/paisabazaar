"use client";

import { useState } from "react";
import { FaUser, FaUserTie, FaFemale, FaChild } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
import MemberCard from "./MemberCard";
import AgeStep from "./AgeStep";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import CityStep from "./CityStep";
import SaveProgressStep from "./SaveProgressStep";
import Navbar from "../components/Navbar";
import MedicalHistoryStep from "./MedicalHistoryStep";

export default function InsurancePlan() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const [selectedGender, setSelectedGender] = useState("male");
  const [members, setMembers] = useState({
    self: false,
    wife: false,
    son: { selected: false, quantity: 1 },
    daughter: { selected: false, quantity: 1 },
    father: false,
    mother: false,
    grandfather: false,
    grandmother: false,
    fatherInLaw: false,
    motherInLaw: false,
  });

  const initialMembers = [
    { id: "self", name: "Self", icon: FaUser },
    { id: "wife", name: "Wife", icon: FaFemale },
    { id: "son", name: "Son", icon: FaChild, hasQuantity: true },
    { id: "daughter", name: "Daughter", icon: FaChild, hasQuantity: true },
    { id: "father", name: "Father", icon: FaUserTie },
    { id: "mother", name: "Mother", icon: FaFemale },
  ];

  const extraMembers = [
    { id: "grandfather", name: "Grandfather", icon: FaUserTie },
    { id: "grandmother", name: "Grandmother", icon: FaFemale },
    { id: "fatherInLaw", name: "Father-in-law", icon: FaUserTie },
    { id: "motherInLaw", name: "Mother-in-law", icon: FaFemale },
  ];

  const toggleMember = (id) => {
    setMembers((prev) => ({
      ...prev,
      [id]: prev[id]?.quantity
        ? { ...prev[id], selected: !prev[id].selected }
        : !prev[id],
    }));
  };

  const updateQuantity = (id, delta) => {
    setMembers((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        quantity: Math.max(1, prev[id].quantity + delta),
      },
    }));
  };

  const handleContinue = () => {
    const hasSelectedMembers = Object.values(members).some(
      (value) => value === true || (typeof value === "object" && value.selected)
    );
    if (hasSelectedMembers) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleViewPlan = () => {
    // View Plan Code
  };

  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen py-8 px-4 mt-[72px] sm:px-6 lg:px-8 flex items-center justify-center w-full">
        <ProgressBar progress={(currentStep - 1) * 25} />

        <div className="w-full max-w-4xl mx-auto relative mt-[20px]">
          {/* Back Button */}
          {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="md:block hidden absolute left-0 top-1/2 -translate-y-1/2 mb-8 w-12 h-12 flex items-center justify-center rounded-full hover:bg-greenish/[3%] transition-colors shadow-lg"
            >
              <IoChevronBack className="w-6 h-6 text-greenish" />
            </button>
          )}
          {currentStep === 1 && (
            <>
              <div className="text-center">
                <h1 className="text-[32px] font-[500] text-gray-900 mb-[16px]">
                  Find top plans for you with up to{" "}
                  <span className="text-greenish font-bold">25% discount</span>
                  <span className="text-[20px] text-gray-700 align-top">
                    **
                  </span>
                </h1>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setSelectedGender("male")}
                  className={`px-6 py-2 rounded-md shadow-md ${
                    selectedGender === "male"
                      ? "bg-greenish text-white"
                      : "bg-greenish/[3%] text-gray-700"
                  }`}
                >
                  Male
                </button>
                <button
                  onClick={() => setSelectedGender("female")}
                  className={`px-6 py-2 rounded-md shadow-md ${
                    selectedGender === "female"
                      ? "bg-greenish text-white"
                      : "bg-greenish/[3%] text-gray-700"
                  }`}
                >
                  Female
                </button>
              </div>

              <div>
                <h2 className="text-base font-bold text-gray-700 mb-[12px] mt-[24px] text-center">
                  Select members you want to insure
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {initialMembers.map((member) => (
                    <MemberCard
                      key={member.id}
                      member={member}
                      selected={members[member.id]}
                      onToggle={() => toggleMember(member.id)}
                      onUpdateQuantity={
                        member.hasQuantity
                          ? (delta) => updateQuantity(member.id, delta)
                          : undefined
                      }
                    />
                  ))}

                  {showMore &&
                    extraMembers.map((member) => (
                      <MemberCard
                        key={member.id}
                        member={member}
                        selected={members[member.id]}
                        onToggle={() => toggleMember(member.id)}
                      />
                    ))}
                </div>

                <button
                  onClick={() => setShowMore(!showMore)}
                  className="mt-6 text-greenish font-medium flex items-center justify-center gap-2 mx-auto"
                >
                  {showMore ? "Show less members" : "More members"}
                  <IoIosArrowDown
                    className={`transition ${
                      showMore ? "rotate-[180deg]" : ""
                    }`}
                  />
                </button>
              </div>

              <div className="flex  gap-2 mt-8">
                {" "}
                <button
                  onClick={handleBack}
                  className="md:hidden w-12 h-12 flex items-center justify-center rounded-lg hover:bg-greenish/[3%] transition-colors shadow-lg"
                >
                  <IoChevronBack className="w-6 h-6 text-greenish" />
                </button>
                <button
                  onClick={handleContinue}
                  className="flex items-center justify-center shadow-lg gap-1 w-full md:w-[320px] px-8 py-3 bg-greenish text-white rounded-lg font-[600] hover:bg-green-600 transition-colors mx-auto block"
                >
                  Continue <IoIosArrowForward />
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center mt-4">
                By clicking on "Continue", you agree to our{" "}
                <a href="#" className="text-greenish">
                  Privacy Policy
                </a>
                ,{" "}
                <a href="#" className="text-greenish">
                  Terms of Use
                </a>{" "}
                &{" "}
                <a href="#" className="text-greenish">
                  *Disclaimer
                </a>
              </p>
            </>
          )}

          {currentStep === 2 && (
            <AgeStep
              members={members}
              handleContinue={handleContinue}
              handleBack={handleBack}
            />
          )}

          {currentStep === 3 && (
            <CityStep handleContinue={handleContinue} handleBack={handleBack} />
          )}

          {currentStep === 4 && (
            <SaveProgressStep
              handleContinue={handleContinue}
              handleBack={handleBack}
            />
          )}

          {currentStep === 5 && (
            <MedicalHistoryStep
              handleViewPlan={handleViewPlan}
              handleBack={handleBack}
            />
          )}
        </div>
      </div>
    </div>
  );
}
