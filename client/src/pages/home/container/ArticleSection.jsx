import React from "react";
import ArticleCard from "../../../components/ArticleCard";

const ArticleSection = () => {
  return (
    <>
      <section className="w-auto lg:w-[1200px] mx-auto px-5 py-5 lg:grid lg:grid-cols-3 lg:gap-4 md:grid md:grid-cols-2 md:gap-4 items-center mt-12">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </section>
    </>
  );
};

export default ArticleSection;
