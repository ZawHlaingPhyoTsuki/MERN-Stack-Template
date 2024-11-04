import React from "react";
import Breadcrumb1 from "../../components/Header/Breadcrumb1";
import AboutUs from "../../components/AboutUs/AboutUs";
import TeamProfile from "../../components/AboutUs/TeamProfile";


const AboutUsPage = () => {
  return (
    <div>
      <Breadcrumb1 />
      <AboutUs/>
      <TeamProfile/>
    </div>
  );
};

export default AboutUsPage;
