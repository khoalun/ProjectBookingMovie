import { LOG_IN_ACTION } from "../actions/types/ManageUser";
import { TOKEN, USER_LOGIN } from "../util/settings/config";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const stateDefault = {
  userLogin: user,
};

export const ManageUserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LOG_IN_ACTION: {
      const { inforLogin } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(inforLogin));
      localStorage.setItem(TOKEN, inforLogin.accessToken)
      return { ...state, userLogin: inforLogin };
    }
    default:
      return { ...state };
  }
};
