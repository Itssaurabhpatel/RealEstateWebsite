import React from "react";
import "./company.css";

const Company = () => {
  return (
    <div className="companies" id="company">
      <h3>Our Trusted Partners</h3>
      <div className="comp-logo">
        <img src="/dlf.png" alt="DLF" />
        <img src="/godrej.png" alt="Godrej" />
        <img src="/lodha.png" alt="Lodha" />
        <img src="/brigade.png" alt="Brigade" />
        <img src="/tata.png" alt="Tata" />
        <img src="/oberoi.png" alt="Oberoi" />
      </div>
    </div>
  );
};

export default Company;
