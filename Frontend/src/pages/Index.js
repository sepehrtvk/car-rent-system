import React from "react";
import MainHeader from "../components/Header/MainHeader";
import Cars from "../components/Cars/Cars";
import IconSection from "../components/iconSection";

const Index = () => {
  return (
    <>
      <MainHeader />
      <IconSection />
      <Cars mode="4" />
    </>
  );
};

export default Index;
