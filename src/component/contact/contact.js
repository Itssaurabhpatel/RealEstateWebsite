import React from "react";
import "./contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="C-wrapper" id="contact">
      <div className="c-container paddings innerWidth flexCenter column">
        <h3>Our Contact Us</h3>
        <div className="c-sub">Easy to contact us</div>

        <p className="c-subtext">
          We always ready to help by providing the best services for you. <br />
          We beleive a good blace to live can make your life better
        </p>

        <div className="contact-options">
          <div className="contact-box">
            <div className="top">
              <div className="icon">
                <MdCall size={25} color="#6d5dfc" />
              </div>
              <div className="info">
                <span className="contact-title">Call</span>
                <span className="contact-number">021 123 145 14</span>
              </div>
            </div>
            <button className="contact-button">Call now</button>
          </div>

          <div className="contact-box">
            <div className="top">
              <div className="icon">
                <BsFillChatDotsFill size={25} color="#6d5dfc" />
              </div>
              <div className="info">
                <span className="contact-title">Chat</span>
                <span className="contact-number">021 123 145 14</span>
              </div>
            </div>
            <button className="contact-button">Chat now</button>
          </div>

          <div className="contact-box">
            <div className="top">
              <div className="icon">
                <HiChatBubbleBottomCenter size={25} color="#6d5dfc" />
              </div>
              <div className="info">
                <span className="contact-title">Message</span>
                <span className="contact-number">021 123 145 14</span>
              </div>
            </div>
            <button className="contact-button">Message now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
