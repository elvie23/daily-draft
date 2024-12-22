import React from "react";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Daily Draft - Contacts";
  });

  return (
    <div className="p-6 sm:p-12 lg:p-24">
      <div className="flex flex-col items-center space-y-6 sm:space-y-8 lg:space-y-9 mb-24">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-[Oswald] font-light tracking-widest text-center">
          You want to share some interesting story with us? Let’s work together!
        </h1>
        <p className="text-xl sm:text-2xl lg:text-2xl font-[Poppins] font-light text-center sm:text-justify">
          Contact Daily Draft to schedule a discovery call, request a quote, or
          get answers to any questions you have about our services.
        </p>

        <div className="flex justify-center w-full">
          <button className="btn2 mt-6 sm:mt-8 px-12 py-4">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
