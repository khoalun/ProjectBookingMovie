import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailTicketAction } from "../../actions/ManageTicketAction";
import style from "./Checkout.module.css";
import "./Checkout.css";
import { BOOK_SEAT } from "../../actions/types/ManageTicketType";
const Checkout = (props) => {
  const { userLogin } = useSelector((state) => state.ManageUserReducer);
  const { detailTicket, listSeatChosen } = useSelector(
    (state) => state.ManageTicketReducer
  );
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
      let classSeatChosing = "";
      // Kiem tra tung ghe render xem co trong mang ghe dang dat hay khong
      let indexGheDD = listSeatChosen.findIndex(
        (gheDD) => gheDD.maGhe === seat.maGhe
      );
      if (indexGheDD !== -1) {
        classSeatReserved = "seatChoosing";
      }

      return (
        <Fragment key={index}>
          <button
            disabled={seat?.daDat}
            key={index}
            className={`seat ${classSeatVip} ${classSeatReserved} ${classSeatChosing}`}
            onClick={() => {
              dispatch({
                type: BOOK_SEAT,
                SeatChosen: seat,
              });
            }}
          >
            {seat?.daDat ? (
              <div className="flex justify-center font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ) : (
              seat?.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="min-h-screen mt-12">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="headerFilm ">
            <img
              src={thongTinPhim?.hinhAnh}
              style={{
                borderRadius: "5px",
                width: "120px",
                height: "120px",
                objectFit: "fill",
              }}
            />
            <div className="ml-4 text-left flex flex-col justify-center">
              <h3 className="font-bold text-4xl">{thongTinPhim?.tenPhim}</h3>
              <span className="text-sm subpixel-antialiased italic text-gray-600 font-bold">
                Location: {thongTinPhim?.diaChi}
              </span>
              <span className="text-sm subpixel-antialiased italic text-gray-600 font-bold">
                Theatre: {thongTinPhim?.tenCumRap}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center mt-5">
            <div
              className="bg-black "
              style={{ width: "80%", height: 15 }}
            ></div>
            <div className={`${style["trapezoid"]}`}>
              <h3
                className="mt-3 text-black   text-center font-bold text-xl text-green-700"
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
              <span className="text-red-400 text-lg font-bold">Seat </span>
              <div>
                {listSeatChosen?.map((seat, index) => {
                  return (
                    <span
                      key={index}
                      className="text-green-500 mr-2 text-xl font-bold"
                    >
                      {/* {" "} */}
                      {seat?.stt}
                      {(index + 1) % 4 === 0 ? <br /> : ""}
                    </span>
                    // <table key={index} className="text-green-500 mr-2 text-xl">
                    //   <thead>
                    //     <tr>
                    //       <th>{seat?.stt}</th>
                    //     </tr>
                    //   </thead>
                    // </table>
                  );
                })}
              </div>
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
