import { manageTheatreService } from "../services/ManageTheatreService";
import { SET_ARRAY_THEATRE } from "./types/ManageTheatreType";

export const getListTheatre = () => {
  return async (dispatch) => {
    try {
      const result = await manageTheatreService.getTheatreList();
      console.log("result", result.data.content);

      if (result.status === 200) {
        dispatch({
          type: SET_ARRAY_THEATRE,
          arrTheatre: result.data.content,
        });
      }
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
