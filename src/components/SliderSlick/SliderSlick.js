/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import {
  SET_CURRENT_FILM,
  SET_UPCOMING_FILM,
} from "../../actions/types/ManageFilmType";
import FilmCard from "../Film/FilmCard";
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

const SliderSlick = (props) => {
  const dispatch = useDispatch();
  const renderMovie = () => {
    return props.arrFilm.slice(0, 12).map((item, index) => {
      return (
        <div key={index} className={`${styleSlick["width-item"]}`}>
          <FilmCard item={item} />
        </div>
      );
    });
  };
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
      <button
        className="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded bg-neutral-900	 text-white mt-5 "
        style={{ marginLeft: "57px" }}
        onClick={() => {
          const action = { type: SET_CURRENT_FILM };
          dispatch(action);
        }}
      >
        Current Movie
        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap bg-violet-400 origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400">
          New
        </span>
      </button>

      <button
        className="relative px-8 py-4 ml-4  font-semibold rounded bg-neutral-900	 text-white"
        onClick={() => {
          const action = { type: SET_UPCOMING_FILM };
          dispatch(action);
        }}
      >
        Movie ComingSoon
      </button>

      <Slider {...settings}>{renderMovie()}</Slider>
    </div>
  );
};

export default SliderSlick;
