import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Messaging from "../components/Messaging";
import Cta from "../components/Cta";
import OurTeams from "../components/OurTeams";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Client from "../components/Client";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Messaging />
      <Cta />
      <OurTeams />
      <Faq />
      <Client />
      <Footer />
    </>
  );
};

export default Home;
