"use client";

import { useState, useEffect } from "react";

export default function OTPModal({ isOpen, onClose, phoneNumber, onVerify }) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [countdown, setCountdown] = useState(30);
  const [error, setError] = useState("");
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let interval;
    if (isOpen && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [isOpen, countdown]);

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerify = () => {
    const otpString = otp.join("");
    if (otpString.length !== 4) {
      setError("Please enter complete OTP");
      return;
    }
    setError("");
    onVerify(otpString);
  };

  const handleResend = () => {
    setCountdown(30);
    setOtp(["", "", "", ""]);
    setError("");
    setCanResend(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <h2 className="mb-4 text-2xl font-bold text-center">
          Verify Mobile Number
        </h2>
        <p className="mb-6 text-center text-gray-600">
          OTP sent on Mobile Number {phoneNumber}
        </p>

        <div className="mb-6 flex justify-center gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="h-12 w-12 rounded-lg border border-gray-300 text-center text-lg focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          ))}
        </div>

        <div className="mb-6 text-center">
          <button
            onClick={handleResend}
            disabled={!canResend}
            className="text-sm text-gray-600 hover:text-green-600 disabled:text-gray-400"
          >
            {canResend ? "Resend OTP" : `Resend OTP in ${countdown} seconds`}
          </button>
        </div>

        <button
          onClick={handleVerify}
          disabled={otp.some((digit) => !digit)}
          className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700 disabled:bg-blue-300"
        >
          Verify & Login
        </button>

        <div className="mt-6 flex items-center gap-2 justify-center">
          <input
            type="checkbox"
            id="whatsapp-updates"
            className="rounded border-gray-300 text-green-600 focus:ring-green-500"
          />
          <label htmlFor="whatsapp-updates" className="text-sm text-gray-600">
            Get regular Credit Report updates via WhatsApp
          </label>
        </div>

        <p className="mt-4 text-center text-xs text-gray-500">
          By logging in, you agree to the following
          <br />
          <a href="#" className="text-blue-600">
            Credit Report Terms of Use
          </a>
          {", "}
          <a href="#" className="text-blue-600">
            Terms of Use
          </a>
          {" and "}
          <a href="#" className="text-blue-600">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
