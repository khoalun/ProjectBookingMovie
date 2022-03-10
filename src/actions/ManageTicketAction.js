// GOI API TICKET Tai day de dat ve

import { manageTicketService } from "../services/ManageTicketService";
import { SET_DETAIL_TICKET } from "./types/ManageTicketType";

export const getDetailTicketAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await manageTicketService.getDetailTicket(id);
      console.log("result", result);
      if (result.status === 200) {
        dispatch({
          type: SET_DETAIL_TICKET,
          detailTicket: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};
