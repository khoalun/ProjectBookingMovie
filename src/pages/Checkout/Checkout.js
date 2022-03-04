import React from "react";
import { useSelector } from "react-redux";

const Checkout = (props) => {
  const { userLogin } = useSelector((state) => state.ManageUserReducer);
  return (
    <div className="container" style={{}}>
      <div className="grid grid-cols-12">
        <div className="col-span-8"></div>

        <div className="col-span-4">
          <h3 className="text-center text-2xl"> 0 Euro</h3>
          <hr />
          <h3 className="text-xl"> Batman Revenge</h3>
          <p> Location: BHD Star -Vincom 3/2</p>
          <p>Day Release : 25/04/2021 - 12:05 Theatre 5</p>
          <hr />
          <div className="grid grid-cols-2 my-5">
            <div > <span className="text-red-400 text-lg">Seat</span> </div>
            <div className="text-right"> <span className="text-green-800 text-lg">0 Euro</span></div>
          </div>
          <hr />
          <div className="my-5">
            <i> Email </i> <br />
            {userLogin.email}
          </div>
          <hr/>
          <div className="my-5">
            <i> Phone </i> <br />
            {userLogin.soDT}
          </div>
          <hr/>
          <div className="mb-0 flex flex-col justify-end">
              Booking Ticket
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
