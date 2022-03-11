import { history } from "../App";
import { manageUserService } from "../services/ManageUser";
import {
  LOG_IN_ACTION,
  SET_INFOR_USER_BOOKING,
} from "./types/ManageUser";

export const loginAction = (inforLogin) => {
  return async (dispatch) => {
    try {
      const result = await manageUserService.getUser(inforLogin);

      if (result.data.statusCode === 200) {
        dispatch({
          type: LOG_IN_ACTION,
          inforLogin: result.data.content,
        });
        // return to page before
        history.goBack();
      }
      console.log("result", result);
    } catch (error) {
      console.log("errors", error.response.data);
    }
  };
};

export const getUserInforAction = () => {
  return async (dispatch) => {
    try {
      const result = await manageUserService.inforUserBooking();

      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_INFOR_USER_BOOKING, //gửi lên reducer
          userInfor: result.data.content,
        });
      }
      console.log("result", result);
    } catch (error) {
      console.log("errors", error.response.data);
    }
  };
};
