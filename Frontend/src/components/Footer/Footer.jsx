import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#323232] text-[#d9d9d9] flex flex-col items-center gap-5 py-5 px-[8vw] pt-[80px] mt-[100px]">
      <div className="flex flex-col sm:grid sm:grid-cols-2  lg:grid lg:grid-cols-5 gap-[80px]">
        <div className=" col-span-1 -mt-1">
          <h2 className=" font-bold text-3xl">Tsukuyomi</h2>
        </div>
        <div className=" col-span-1">
          <h3 className="font-semibold text-2xl">Support</h3>
          <div className="flex flex-col gap-2 mt-4">
            <p>Tachileik, Shan State, Myanmar</p>
            <p>tro2233zhp@gmail.com</p>
            <p>+099 39 70 422</p>
          </div>
        </div>
        <div className=" col-span-1">
          <h3 className="font-semibold text-2xl">Account</h3>
          <div className="flex flex-col gap-2 mt-4">
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
        </div>
        <div className=" col-span-1">
          <h3 className="font-semibold text-2xl">Quick Link</h3>
          <div className="flex flex-col gap-2 mt-4">
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>
        <div className=" col-span-1">
          <h3 className="font-semibold text-2xl">Social Media</h3>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-3 justify-between mt-4 text-xl">
            <Link to={"https://www.facebook.com/ZawHlaingPhyo.23"}>
              <FaFacebookF />
            </Link>
            <Link to={"https://x.com/ZawHlaingPhyo"}>
              <FaTwitter />
            </Link>
            <Link to={"https://www.instagram.com/tsukuyomi1123/"}>
              <FaInstagram />
            </Link>
            <Link to={"https://github.com/ZawHlaingPhyoTsuki"}>
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
      <hr className=" border-t-2 border-gray-400 w-full lg:mt-3 mt-10" />
      <p>
        © Copyright Tsukuyomi {new Date().getFullYear()}. All Right Reversed
      </p>
    </footer>
  );
};

export default Footer;
