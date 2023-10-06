import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/Common";


function Residencies() {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container" id="residencies">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popualr Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButton/>
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="r-card flexColStart ">
                <img src={card.image} alt="" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Residencies;

const SliderButton =()=>{
  const swiper = useSwiper();
  return(
    <div className="r-button flexCenter">
      <button onClick={()=>swiper.slidePrev()}>&lt;</button>
      <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}
