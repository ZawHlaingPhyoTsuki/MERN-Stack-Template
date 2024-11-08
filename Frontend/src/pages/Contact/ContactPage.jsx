import React from "react";
import Breadcrumb1 from "../../components/Header/Breadcrumb1";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const ContactPage = () => {
  return (
    <div className="w-full">
      <Breadcrumb1 />
      <div className="flex flex-col md:flex-row gap-4 max-sm:justify-evenly ">
        {/* left side */}
        <div className="flex flex-col gap-3  shadow-lg py-6 px-4 max-md:max-w-[300px] max-md:mx-auto">
          <div className="flex flex-col gap-4 mb-4">
            <h2 className="flex gap-2 ">
              <FaPhone className="text-red-500 text-lg" />
              <span>Call To Us</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-sm text-gray-600">Phone: 099 39 70 422</p>
          </div>
          <hr className="border-t-2 border-gray-400 mb-4" />
          <div className="flex flex-col gap-4">
            <h2 className="flex gap-2">
              <IoMdMail className="text-red-500 text-lg" />
              <span>Email Us</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Fill out your form and we will contact you within 24 hours.
            </p>
            <p className="text-sm text-gray-600">Email: tro2233zhp@gmail.com</p>
          </div>
        </div>
        {/* right side */}
        <div className="shadow-lg py-6 px-4 flex flex-col gap-4 justify-between max-md:max-w-[300px] max-md:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <input
              className="border-none bg-[#f5f5f5]"
              placeholder="Your Name"
              type="text"
            />
            <input
              className="border-none bg-[#f5f5f5]"
              placeholder="Your Email"
              type="email"
            />
            <input
              className="border-none bg-[#f5f5f5]"
              placeholder="Your Phone"
              type="number"
            />
          </div>
          <div className="h-[200px]">
            <textarea
              className="w-full border-none bg-[#f5f5f5] h-full"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button className="border-2 border-red-500 mt-1 w-[215px] h-[56px] rounded-md bg-red-500 text-white py-[16px] px-[48px] md:place-self-end place-self-center">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
