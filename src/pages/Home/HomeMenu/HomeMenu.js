import React, { useState } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;
export default function HomeMenu(props) {
  const [state] = useState({
    tabPosition: "left",
  });
  //   const changeTabPosition = (e) => {
  //     setState({ tabPosition: e.target.value });
  //   };
  const { tabPosition } = state;
  return (
    <div>
      <>
        <Tabs tabPosition={tabPosition}>
          <TabPane
            tab={
              <img
                src="https://pbs.twimg.com/media/DyKHSklX0AApOAS.jpg"
                className="rounded-full"
                width="50px"
                alt="goku.jpg"
              />
            }
            key="1"
          >
            Content of Tab 1
          </TabPane>
          <TabPane
            tab={
              <img
                src="https://pbs.twimg.com/media/DyKHSklX0AApOAS.jpg"
                className="rounded-full"
                width="50px"
                alt="goku.jpg"
              />
            }
            key="2"
          >
            Content of Tab 2
          </TabPane>
          <TabPane
            tab={
              <img
                src="https://pbs.twimg.com/media/DyKHSklX0AApOAS.jpg"
                className="rounded-full"
                width="50px"
                alt="goku.jpg"
              />
            }
            key="3"
          >
            Content of Tab 3
          </TabPane>
        </Tabs>
      </>
    </div>
  );
}
