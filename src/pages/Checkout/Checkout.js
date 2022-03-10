import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailTicketAction } from "../../actions/ManageTicketAction";
import style from "./Checkout.module.css";
import "./Checkout.css";
import {CloseOutlined} from 'ant-design/icons'
const Checkout = (props) => {
  const { userLogin } = useSelector((state) => state.ManageUserReducer);
  const { detailTicket } = useSelector((state) => state.ManageTicketReducer);
  const dispatch = useDispatch();
  // goi Api
  useEffect(() => {
    // Lay id từ Appjs gọi hàm tạo ra 1 async function
    const action = getDetailTicketAction(props.match.params.id);
    // dispatch function di
    dispatch(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log({ detailTicket });
  const { thongTinPhim, danhSachGhe } = detailTicket;
  const renderSeats = () => {
    return danhSachGhe?.map((seat, index) => {
      let classSeatVip = seat?.loaiGhe === "Vip" ? "seatVip" : "";
      let classSeatReserved = seat?.daDat === true ? "seatReserved" : "";
      return (
        <Fragment key={index}>
          <button
            disabled={seat?.daDat}
            key={index}
            className={`seat ${classSeatVip} ${classSeatReserved}`}
          >
            {seat?.daDat ? <CloseOutlined /> : seat?.stt}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  return (
    <div className="min-h-screen mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div
              className="bg-black "
              style={{ width: "80%", height: 15 }}
            ></div>
            <div className={`${style["trapezoid"]}`}>
              <h3
                className="mt-3 text-black   text-center font-bold text-xl text-green-600"
                style={{ disPlay: "inline-block" }}
              >
                Screen
              </h3>
            </div>
            <div className="mt-10">{renderSeats()}</div>
          </div>
        </div>

        <div className="col-span-3">
          <h3 className="text-center text-2xl"> 0 Euro</h3>
          <hr />
          <h3 className="text-xl mt-2">{thongTinPhim?.tenPhim}</h3>
          <p>
            Location:{thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}
          </p>
          <p>
            Day Release : {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}
          </p>
          <hr />
          <div className="grid grid-cols-2 my-5">
            <div>
              <span className="text-red-400 text-lg ">Seat</span>
            </div>
            <div className="text-right">
              <span className="text-green-800 text-lg">0 Euro</span>
            </div>
          </div>
          <hr />
          <div className="my-5">
            <i> Email </i> <br />
            {userLogin.email}
          </div>
          <hr />
          <div className="my-5">
            <i> Phone </i> <br />
            {userLogin.soDT}
          </div>
          <hr />
          <div className="mb-0 h-full flex flex-col justify-end items-center">
            <div className="bg-green-500 text-white w-full text-center py-2 font-bold text-2xl">
              Booking Ticket
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
