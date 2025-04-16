import React from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Typical from "react-typical";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      {/* White fade shadows */}
      <div className="shadow-top"></div>
      <div className="shadow-bottom"></div>

      <div className=" hero-container">
        {/* padding innerWidth flexCenter */}
        {/* Left part */}
        <div className="hero-left">
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
          >
            Discover Homes <br />
            That Match Your{" "}
            <Typical
              steps={[
                "Lifestyle",
                2000,
                "Budget",
                2000,
                "Dream",
                2000,
                "Needs",
                2000,
              ]}
              loop={Infinity}
              wrapper="i"
              className="typing-text"
            />
          </motion.h1>
          <p className="tagline">
            The easiest way to find a space that truly feels like home.
          </p>

          {/* Search bar */}
          <div className="search-bar">
            <HiLocationMarker className="loc-icon" color="red" size={24} />
            <input type="text" placeholder="Search for homes..." />
            <button className="search-button">Search</button>
          </div>
        </div>

        {/* right part */}
        <div className="hero-right">
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/hero-image.jpeg`} alt="hero" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flexCenter stats">
        <div className="flexColStart stat">
          <span>
            <CountUp start={867} end={1697} duration={4} />
            <span>+</span>
          </span>
          Premium Products
        </div>

        <div className="flexColStart stat">
          <span>
            <CountUp start={867} end={1697} duration={4} />
            <span>+</span>
          </span>
          Happy Customers
        </div>

        <div className="flexColStart stat">
          <span>
            <CountUp start={15} end={48} duration={4} />
            <span>+</span>
          </span>
          Award Winning
        </div>
      </div>
    </section>
  );
};

export default Hero;
