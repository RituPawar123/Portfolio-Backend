import { ADD_USER } from "../actions/actionsTypes";
import { initialUserState } from "../data";

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return [...state, action.data];
    }

    default:
      return state;
  }
};
export default userReducer;
