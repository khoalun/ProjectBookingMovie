import React from "react";
import { Redirect } from 'react-router-dom'
import { USER_LOGIN } from "../../util/settings/config";
const Checkout = (props) => {
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/login" />;
  }
    
  return <div>checkout</div>;
};

export default Checkout;
