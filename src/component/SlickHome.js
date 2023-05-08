import React, { Component } from "react";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "../styles/slickHome.module.scss";

export default class SlickHome extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div className={styled.homeSlick}>
        {/* <h2>Fade</h2> */}
        <Slider {...settings}>
          <div className={styled.homeSlickImg}>
            <img src={"/封面5.png"} />
          </div>
          <div className={styled.homeSlickImg}>
            <img src={"/封面6.png"} />
          </div>
          <div className={styled.homeSlickImg}>
            <img src={"/封面3.png"} />
          </div>
          <div className={styled.homeSlickImg}>
            <img src={"/封面4.png"} />
          </div>
        </Slider>
      </div>
    );
  }
}
