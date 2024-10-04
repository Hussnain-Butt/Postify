import React from "react";
import MainLayout from "../../components/MainLayout";
import HeroSection from "./container/HeroSection";

const Home = () => {
  return (
    <div>
      <MainLayout>
        <HeroSection />
      </MainLayout>
    </div>
  );
};

export default Home;
