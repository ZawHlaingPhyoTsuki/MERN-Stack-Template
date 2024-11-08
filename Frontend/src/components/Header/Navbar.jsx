import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import useStore from "../../stores/useStore";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { wishlist, cart } = useStore();

  // Close the menu if clicking outside the dropdown or on the logo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".menu-toggle")
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className=" bg-[#323232] text-[#d9d9d9]">
      <div className="relative flex items-center justify-between py-4 w-[80%] mx-auto z-10">
        {/* Logo */}
        <Link
          to="/"
          className="font-[Dalfitra] tracking-widest text-3xl font-bold"
          onClick={closeMenu}
        >
          Tsukuyomi
        </Link>

        {/* Links for larger screens */}
        <div className="hidden lg:flex space-x-4 gap-6 lg:gap-12">
          <Link to="/" className="hover:text-gray-400 text-xl ">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-gray-400 text-xl">
            About
          </Link>
          <Link to="/services" className="hover:text-gray-400 text-xl">
            Services
          </Link>
          <Link to="/contact" className="hover:text-gray-400 text-xl">
            Contact
          </Link>
        </div>

        {/* Icons (Search, Heart, Cart) */}
        <div className="flex items-center space-x-4">
          <FaSearch className="cursor-pointer hover:text-gray-400 text-xl" />
          <Link to={"/wishlist"} className="relative">
            <FaHeart className="cursor-pointer hover:text-gray-400 text-xl" />
            {wishlist.length > 0 && <Badge count={wishlist.length} />}
          </Link>
          <Link to={"/cart"} className="relative">
            <FaShoppingCart className="cursor-pointer hover:text-gray-400 text-xl" />
            {cart.length > 0 && <Badge count={cart.length} />}
          </Link>

          {/* Menu Icon for smaller screens */}
          <div className="lg:hidden menu-toggle">
            {isMenuOpen ? (
              <FaTimes
                onClick={toggleMenu}
                className="cursor-pointer hover:text-gray-400 text-xl"
              />
            ) : (
              <FaBars
                onClick={toggleMenu}
                className="cursor-pointer hover:text-gray-400 text-xl"
              />
            )}
          </div>
        </div>

        {/* Dropdown Menu for smaller screens */}
        {isMenuOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 w-full bg-[#323232] text-center lg:hidden border-[1px] border-[#474747] py-3 px-4"
          >
            <Link
              to="/"
              className="block py-2 hover:bg-gray-700"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="block py-2 hover:bg-gray-700"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block py-2 hover:bg-gray-700"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block py-2 hover:bg-gray-700"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
