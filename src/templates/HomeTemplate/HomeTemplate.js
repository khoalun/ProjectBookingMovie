import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

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
            <Component {...propsRoute} />
            <hr />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};
