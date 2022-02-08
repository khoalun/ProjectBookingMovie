import React, { Component } from "react";
import Slider from "react-slick";
import Film from "../Film/Film";
import styleSlick from "./SliderSlick.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{
        ...style,
        display: "block",
        color: "black",
        left: "100%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{
        ...style,
        display: "block",
        color: "black",
        left: "-50px",
      }}
      onClick={onClick}
    />
  );
}

export default class SliderSlick extends Component {
  renderMovie = () => {
    return this.props.arrFilm.map((item, index) => {
      return (
        <div key={item} className={`${styleSlick["width-item"]}`}>
          <Film movie={item} />
        </div>
      );
    });
  };
  render() {
    const settings = {
      className: "center ",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <h2>Multiple Rows</h2>
        <Slider {...settings}>
          {this.renderMovie()}
          {this.renderMovie()}
          {this.renderMovie()}
          {this.renderMovie()}
          {this.renderMovie()}
          {this.renderMovie()}
          {this.renderMovie()}
          {this.renderMovie()}
          {this.renderMovie()}
          {this.renderMovie()}
        </Slider>
      </div>
    );
  }
}
