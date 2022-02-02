import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "./Layout/Header/Header";

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
            <Component {...propsRoute} />
            <footer className="bg-black h-10">Day la footer</footer>
          </Fragment>
        );
      }}
    />
  );
};
