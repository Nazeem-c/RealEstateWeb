import React from "react";
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container" id="getstart">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <span>
            <button className="button">Get started</button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
