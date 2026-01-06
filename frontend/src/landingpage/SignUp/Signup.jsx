

import React, { useState } from "react";

function Signup() {
  const [mobileNumber, setMobileNumber] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (mobileNumber.length === 10) {
      alert("Signup successful for: " + mobileNumber);
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  // Handle number input changes
  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setMobileNumber(value);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#444] font-sans selection:bg-[#387ed1] selection:text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-16 max-w-4xl">
          <h1 className="text-[32px] md:text-[44px] font-medium mb-4 leading-tight">
            Open a free demat and trading account online
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#666]">
            Start investing brokerage free and join a community of 1.6+ crore investors and traders.
          </p>
        </div>

        {/* Content */}
        <div className="w-full flex flex-col md:flex-row items-start justify-center gap-10 lg:gap-24">

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/Media/account_open.svg"
              alt="Signup illustration"
              className="w-full max-w-[500px] h-auto object-contain"
              onError={(e) => {
                e.target.src = "https://picsum.photos/seed/zerodha/600/450";
              }}
            />
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 max-w-[400px]">
            <h2 className="text-[32px] font-semibold mb-2">Signup now</h2>
            <p className="text-[#9b9b9b] text-lg mb-10">
              Or track your existing application.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm text-[#666] block mb-2">
                  Mobile number
                </label>

                <div className="flex border border-[#ccc] rounded focus-within:border-[#387ed1]">
                  <span className="bg-[#f9f9f9] px-4 py-3 text-[#9b9b9b] border-r border-[#ccc] text-sm">
                    +91
                  </span>
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

                <p className="text-[12px] text-[#9b9b9b] mt-2">
                  You will receive an OTP on your number
                </p>
              </div>

              <button
                type="submit"
                className="bg-[#387ed1] text-white px-12 py-3 rounded text-lg hover:bg-[#2c69b1] transition-all"
              >
                Get OTP
              </button>
            </form>

            <div className="mt-8">
              <a
                href="#"
                className="text-[#387ed1] hover:text-[#2c69b1] text-sm font-medium"
              >
                Want to open an NRI account?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
