/* eslint-disable no-undef */
import React from "react";
import { Carousel } from "antd";
export default function HomeCarousel() {
  const contentStyle = {
    height: "600px",
    color: "#fff",
    lineHeight: "300px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Carousel autoplay>
      <div>
        <div style={contentStyle}>
          <img
            src="./img/g4.jpg"
            style={{ width: "100%", height: "100%" }}
            alt="./img/g4.jpg"
            className="h-full w-full"
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            src="./img/g5.jpg"
            alt="./img/g5.jpg"
            className="h-full w-full"
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            src="./img/g6.jpg"
            alt="./img/g6.jpg"
            className="h-full w-full"
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            src="./img/g7.jpg"
            alt="./img/g7.jpg"
            className="h-full w-full"
          />
        </div>
      </div>
    </Carousel>
  );
}
