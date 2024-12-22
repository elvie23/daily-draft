import React from "react";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Daily Draft - Contacts";
  });
  return (
    <div className="p-48">
      <div className="flex justify-center items-center flex-col space-y-9 mb-24">
        <h1 className="text-7xl font-[Oswald] font-light tracking-widest text-center">
          You want to share some interesting story with us? Let’s work together!
        </h1>
        <p className="text-2xl font-[Poppins] font-light text-justify ">
          Contact Daily Draft to schedule a discovery call, request a quote, or
          get answers to any questions you have about our services.
        </p>

        <div className="flex-1 flex justify-end">
          <button className="btn2">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
