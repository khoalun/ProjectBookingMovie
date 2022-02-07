import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export const HomeTemplate = (props) => {
  // props path exact component
  const { Component, ...restProps } = props; // boc tach' props

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header {...propsRoute} />
            <HomeCarousel {...propsRoute} />
            <Component {...propsRoute} />
            <hr className="mt-10"/>
            <Footer {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};