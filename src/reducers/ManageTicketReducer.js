import { SET_DETAIL_TICKET } from "../actions/types/ManageTicketType";

const stateDefault = {
  detailTicket: {},
};

export const ManageTicketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DETAIL_TICKET: {
      state.detailTicket = action.detailTicket;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
