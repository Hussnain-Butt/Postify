import React from "react";
import MainLayout from "../../components/MainLayout";
import HeroSection from "./container/HeroSection";
import ArticleSection from "./container/ArticleSection";

const Home = () => {
  return (
    <div>
      <MainLayout>
        <HeroSection />
        <ArticleSection />
      </MainLayout>
    </div>
  );
};

export default Home;
