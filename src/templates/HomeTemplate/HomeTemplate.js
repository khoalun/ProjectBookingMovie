import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export const HomeTemplate = (props) => {
  // props path exact component
  const { Component, ...restProps } = props; // boc tach' props
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header {...propsRoute} />
            <HomeCarousel {...propsRoute} />
            <Component {...propsRoute} />
            <hr style={{ marginTop: "500px" }} />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};
