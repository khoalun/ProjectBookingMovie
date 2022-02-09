/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import SliderSlick from "../../components/SliderSlick/SliderSlick";
import { getFilmAction } from "../../actions/ManageFilmAction";
import Film from "../../components/Film/Film";
export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.MovieListReducer);
  const dispatch = useDispatch();
  console.log("propsHome", props);

  // useEffect(() => {
  //   const action = getFilmAction();
  //   dispatch(action);
  // }, []);

  useEffect(() => {
    const action = getFilmAction();
    dispatch(action); //dispatch function từ thunk
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container px-5  mx-auto">
          <SliderSlick arrFilm={arrFilm} />
        </div>
      </section>
      <div className="mx-44 ">
        <HomeMenu />
      </div>
    </div>
  );
}
