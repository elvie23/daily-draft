import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-emerald-100">
      {/* Left Section */}
      <div className="mb-4 md:mb-0">
        <p className="font-[Quicksand] text-base sm:text-lg md:text-lg text-black font-medium tracking-widest text-center md:text-left">
          © {currentYear} Daily Draft. All rights reserved.
        </p>
      </div>

      {/* Center Section */}
      <div className="flex-1 flex items-center justify-center mb-4 md:mb-0">
        <div className="flex flex-col text-center">
          <p className="text-3xl sm:text-4xl md:text-4xl font-light font-[Jost] tracking-widest">daily</p>
          <p className="text-3xl sm:text-4xl md:text-4xl font-light font-[Jost] tracking-widest">drafts.</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <p className="font-[Quicksand] text-base sm:text-lg md:text-lg text-black font-medium tracking-widest mb-4">
          Connect with us
        </p>
        <div className="flex flex-wrap justify-center space-x-6 sm:space-x-8 md:space-x-8 mt-2">
          <a href="#" className="text-xl sm:text-2xl md:text-2xl flex flex-col items-center mb-4">
            <i className="fab fa-instagram text-black w-8 h-8"></i>
            <p className="font-[Quicksand] text-sm sm:text-lg md:text-lg text-black font-medium tracking-widest mt-2">
              Instagram
            </p>
          </a>

          <a href="#" className="text-xl sm:text-2xl md:text-2xl flex flex-col items-center mb-4">
            <i className="fab fa-twitter text-black w-8 h-8"></i>
            <p className="font-[Quicksand] text-sm sm:text-lg md:text-lg text-black font-medium tracking-widest mt-2">
              Twitter
            </p>
          </a>

          <a href="#" className="text-xl sm:text-2xl md:text-2xl flex flex-col items-center mb-4">
            <i className="fab fa-youtube text-black w-8 h-8"></i>
            <p className="font-[Quicksand] text-sm sm:text-lg md:text-lg text-black font-medium tracking-widest mt-2">
              YouTube
            </p>
          </a>

          <a href="#" className="text-xl sm:text-2xl md:text-2xl flex flex-col items-center mb-4">
            <i className="fab fa-facebook text-black w-8 h-8"></i>
            <p className="font-[Quicksand] text-sm sm:text-lg md:text-lg text-black font-medium tracking-widest mt-2">
              Facebook
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
