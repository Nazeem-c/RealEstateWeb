import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "./Values.css";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
import { useState } from "react";

const Values = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container" id="values">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="image" />
          </div>
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we give to you</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.{" "}
            <br />
            We beleive a good blace to live can make your life better
          </span>
          <Accordion
            className="accordian"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, index) => {
                const [className,setClassName] = useState(null)
              return (
                <AccordionItem
                // className="accordianitem"
                  className={`accordianitem ${className}`}
                  key={index}
                  uuid={index}
                >
                  <AccordionItemHeading>
                    
                    <AccordionItemButton className="flexCenter accordianitembutton">
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded
                          ? setClassName("expanded")
                          : setClassName("collapsed")
                      }
                    </AccordionItemState>
                      <span>
                        <div className="flexCenter icon">{item.icon}</div>
                      </span>

                      <span className="primaryText">{item.heading}</span>
                      <span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
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

export default Values;
