/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import Film from "../../components/Film";
import SliderSlick from "../../components/SliderSlick/SliderSlick";

export default function Home(props) {
  console.log("propsHome", props);
  const { arrFilm } = useSelector((state) => state.MovieListReducer);

  const renderFilm = () => {
    return arrFilm.map((movie, index) => {
      return <Film key={index} />;
    });
  };

  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container px-5  mx-auto">
          <SliderSlick />
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div className="flex flex-wrap -m-4 my-5 justify-center">
            <p>Day la homepage</p>
            {renderFilm()}
          </div>
        </div>
      </section>
      <div className="mx-44 ">
        <HomeMenu />
      </div>
    </div>
  );
}
