import React from "react";
import MainHeader from "../components/Header/MainHeader";
import Cars from "../components/Cars/Cars";
import IconSection from "../components/iconSection";
import UsersSection from "../components/usersSection";
import Footer from "../components/footer/footer";
const Index = () => {
  return (
    <>
      <MainHeader />
      <IconSection />
      <Cars mode="4" />
      <UsersSection/>
      <Footer />
    </>
  );
};

export default Index;
