import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import NaviBtn from './NaviBtn'

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center h-[370px] gap-8">
        <h1 className="text-5xl md:text-7xl">404 Not Found</h1>
        <p className="text-sm text-gray-700">Your visited page is not found.</p>
        
        <NaviBtn
          rounded={"rounded-md"}
          className={"bg-red-500 text-[#d9d9d9] scale-75 md:scale-100"}
        >
          Go To Home Page
        </NaviBtn>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage
