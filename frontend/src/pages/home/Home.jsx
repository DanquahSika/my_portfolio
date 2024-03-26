import React from "react";
import Hero from "../../components/hero/Hero";
import Counter from "../../components/counter/Counter";
import About from "../../components/about/About";
import ServicesTab from "../../components/services-section/ServicesTab";
import Contact from "../../components/contact/Contact";
import PortfolioTab from "../../components/portfolio-section/PortfolioTab";
import BlogTab from "../../components/blog-section/BlogTab";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Counter />
      <About />
      <ServicesTab />
      <Contact />
      <PortfolioTab />
      <BlogTab />
      <Footer />
    </div>
  );
};

export default Home;
