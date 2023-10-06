import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-containers" id="contacts">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.{" "}
            <br /> We beleive a good blace to live can make your life better
          </span>
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart logrow">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText" style={{ width: "150px" }}>
                      Call
                    </span>
                    <span className="secondaryText" style={{ width: "150px" }}>
                      021 458 956 21
                    </span>
                  </div>
                </div>
                <button className="button">Call Now</button>
              </div>
              <div className="flexColCenter mode">
              <div className="flexStart logrow">
                <div className="flexCenter icon">
                  <BsFillChatDotsFill size={25} />
                </div>
                <div className="flexColStart details">
                  <span className="primaryText" style={{ width: "150px" }}>
                    Chat
                  </span>
                  <span className="secondaryText" style={{ width: "150px" }}>
                    875 124 893 6
                  </span>
                </div>
              </div>
              <button className="button">Chat</button>
            </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart logrow">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText" style={{ width: "150px" }}>
                      Video Call
                    </span>
                    <span className="secondaryText" style={{ width: "150px" }}>
                      021 458 956 21
                    </span>
                  </div>
                </div>
                <button className="button">Video Call Now</button>
              </div>
              <div className="flexColCenter mode">
              <div className="flexStart logrow">
                <div className="flexCenter icon">
                  <HiChatBubbleBottomCenter size={25} />
                </div>
                <div className="flexColStart details">
                  <span className="primaryText" style={{ width: "150px" }}>
                    Message
                  </span>
                  <span className="secondaryText" style={{ width: "150px" }}>
                    875 124 893 6
                  </span>
                </div>
              </div>
              <button className="button">Video Call Now</button>
            </div>
            </div>
            
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
