

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signup() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("MOBILE"); // MOBILE | OTP

  // STEP 1: Send OTP
  const handleContinue = async (e) => {
  e.preventDefault();

  if (mobileNumber.length !== 10) {
    alert("Invalid number");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/api/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobileNumber }),
        credentials: "include", // ✅ important for cookie/JWT
    });

    const data = await res.json();

    if (data.success) {
      setStep("OTP"); // ✅ only move to OTP step if backend confirms
    } else {
      alert("Failed to send OTP, try again.");
    }
  } catch (err) {
    console.error("Error sending OTP:", err);
    alert("Error sending OTP, check your connection.");
  }
};



  //step2 : Verify OTP
  const navigate = useNavigate();
  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      alert("Enter valid OTP");
      return;
    }

   const res = await fetch("http://localhost:3000/api/verify-otp", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ mobileNumber, otp }),
  credentials: "include", // ✅ ensures JWT cookie is stored
});


    const data = await res.json();

    if (data.success) {

       window.location.href = "http://localhost:5174"    // ✅ correct redirect
    } else {
      alert("Invalid OTP ❌");
    }
  };


  // Handle number input
  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) setMobileNumber(value);
  };

  return (
    <div className="min-h-screen bg-white text-[#444] font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-16 max-w-4xl">
          <h1 className="text-[32px] md:text-[44px] font-medium mb-4">
            Open a free demat and trading account online
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#666]">
            Start investing brokerage free.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-start justify-center gap-10">

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/Media/account_open.svg"
              alt="Signup"
              className="w-full max-w-[500px]"
            />
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 max-w-[400px]">
            <h2 className="text-[32px] font-semibold mb-2">Signup now</h2>

            {/* STEP 1: MOBILE */}
            {step === "MOBILE" && (
              <form onSubmit={handleContinue} className="space-y-6">
                <div>
                  <label className="text-sm text-[#666] block mb-2">
                    Mobile number
                  </label>

                  <div className="flex border rounded">
                    <span className="bg-[#f9f9f9] px-4 py-3 border-r">+91</span>
                    <input
                      type="tel"
                      className="flex-1 px-4 py-2 outline-none text-lg"
                      placeholder="10 digit mobile number"
                      value={mobileNumber}
                      onChange={handleNumberChange}
                      maxLength={10}
                      required
                    />
                  </div>
                </div>

                <button className="bg-[#387ed1] text-white px-12 py-3 rounded">
                  Get OTP
                </button>
              </form>
            )}

            {/* STEP 2: OTP */}
            {step === "OTP" && (
              <div className="space-y-6">
                <p className="text-sm">
                  OTP sent to <strong>+91 {mobileNumber}</strong>
                </p>

                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) =>
                    setOtp(e.target.value.replace(/\D/g, ""))
                  }
                  maxLength={6}
                  className="w-full border px-4 py-3 text-lg rounded"
                />

                <button
                  onClick={handleVerifyOtp}
                  className="bg-[#387ed1] text-white px-12 py-3 rounded"
                >
                  Verify OTP
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
