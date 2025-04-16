import React from "react";
import "./company.css";

const Company = () => {
  return (
    <div className="companies" id="company">
      <h3>Our Trusted Partners</h3>
      
      <div className="comp-logo">
        <img src={`${process.env.PUBLIC_URL}/dlf.png`} alt="DLF" />
        <img src={`${process.env.PUBLIC_URL}/godrej.png`} alt="Godrej" />
        <img src={`${process.env.PUBLIC_URL}/lodha.png`} alt="Lodha" />
        <img src={`${process.env.PUBLIC_URL}/brigade.png`} alt="Brigade" />
        <img src={`${process.env.PUBLIC_URL}/tata.png`} alt="Tata" />
        <img src={`${process.env.PUBLIC_URL}/oberoi.png`} alt="Oberoi" />
      </div>
    </div>
  );
};

export default Company;
