import React from "react";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "../../assets/styles/circle.scss";
import { Tabs } from "antd";
const Detail = (props) => {
  const { TabPane } = Tabs;
  return (
    <div
      style={{
        backgroundImage: "url(https://picsum.photos/1000)",
        minHeight: "100vh",
      }}
    >
      <CustomCard
        style={{ paddingTop: "150px", minHeight: "100vh" }}
        effectColor="#C780FF" // required
        color="#14AEFF" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12">
          <div className="col-span-4 col-start-4">
            <div className="grid grid-cols-2 ">
              <img src="https://picsum.photos/250/350" alt="123" />
              <div className="flex flex-col justify-center">
                <p>Movie</p>
                <p>Description</p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div class="c100 p50 big">
              <span>50%</span>
              <div class="slice">
                <div class="bar"></div>
                <div class="fill"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center mr-20">
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
};

export default Detail;
