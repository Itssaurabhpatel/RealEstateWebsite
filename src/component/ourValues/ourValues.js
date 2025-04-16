import React from "react";
import "./ourValues.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import data from "../../utils/accordion.js";

const OurValues = () => {
  return (
    <section clasName="v-sec">
      <div className="v-wrap"  id="ourValues">
        <h3>Our Values</h3>
        <h4>Value We Give to You</h4>
        <p>
          We always ready to help by providijng the best services for you. We
          beleive a good blace to live can make your life better
        </p>
        <div className="accord-box">
          <Accordion allowMultipleExpanded={false} preExpended={[0]}>
            {data.map((item, i) => {
              return (
                <AccordionItem className="accordionItem" key={i} uuid={i}>
                  <AccordionItemHeading className="accor-cont">
                    <AccordionItemButton className="flexCenter accordion-btn">
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="heading">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineKeyboardArrowDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.details}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
