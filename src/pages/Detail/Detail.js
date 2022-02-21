import React, { useEffect } from "react";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "../../assets/styles/circle.scss";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getDetailMovie } from "../../actions/ManageTheatreAction";
import moment from "moment";
import { Rate } from "antd";
const { TabPane } = Tabs;
export default function Detail(props) {
  const filmDetail = useSelector((state) => state.MovieListReducer.filmDetail);
  console.log({ filmDetail });
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;
    console.log("id", id);
    dispatch(getDetailMovie(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundSize: "100%",
        backgroundPostion: "center",
        minHeight: "100vh",
      }}
    >
      <CustomCard
        style={{ paddingTop: "150px", minHeight: "100vh" }}
        effectColor="#000000" // required
        color="#14AEFF" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12">
          <div className="col-span-5 col-start-3 ">
            <div className="grid grid-cols-2 ">
              <img
                src={filmDetail.hinhAnh}
                alt="123"
                style={{ width: "215px", height: "339px" }}
              />
              <div className="flex flex-col justify-center  ml-7">
                <p className="text-sm text-gray-100	">
                  Day Release:
                  {moment(filmDetail.ngayKhoiChieu).format(" dd - mm - yyyy")}
                </p>
                <p className="text-3xl text-gray-100	 leading-2 font-bold">
                  {filmDetail.tenPhim}
                </p>
                <p className="text-sm text-gray-100	">{filmDetail.moTa}</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 ml-20">
            <p style={{ marginLeft: "22%" }} className="text-2xl text-gray-100">
              Review
              <div style={{ marginLeft: "-8%" }}>
                <Rate
                  allowHalf
                  defaultValue={filmDetail.danhGia / 2}
                  style={{ color: "rgb(168, 151, 151)" }}
                />
              </div>
            </p>

            <div className={`c100 p${filmDetail.danhGia * 8} big`}>
              <span>{filmDetail.danhGia * 8}%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex  container mx-auto px-6">
          <Tabs tabPosition={"left"}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              f Content of Tab 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab 3
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}
