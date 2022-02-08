/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import SliderSlick from "../../components/SliderSlick/SliderSlick";
import { getFilmAction } from "../../actions/ManageFilmAction";

export default function Home(props) {
  console.log("propsHome", props);
  const { arrFilm } = useSelector((state) => state.MovieListReducer);
  const dispatch = useDispatch();
  // const renderFilm = () => {
  //   return arrFilm.map((movie, index) => {
  //     return <Film key={index} />;
  //   });
  // };
  
  // useEffect(() => {
  //   const action = getFilmAction();
  //   dispatch(action);
  // }, []);

  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container px-5  mx-auto">
          <SliderSlick arrFilm={arrFilm} />
          {/* <div className="flex flex-wrap -m-4 my-5 justify-center">
            <p>Day la homepage</p> 
            {renderFilm()}
          </div> */}
        </div>
      </section>
      <div className="mx-44 ">
        <HomeMenu />
      </div>
    </div>
  );
}
