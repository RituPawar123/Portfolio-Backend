import { ADD_USER_IN_AGE, UPDATE_AGE } from "../actions/actionsTypes";
import { initialAgeState } from "../data";

const ageReducer = (state = initialAgeState, action) => {
  switch (action.type) {

    case UPDATE_AGE: {
      let newState = [...state];
      newState[action.data["index"]]["age"] = action.data.age;
      return newState;
    }

    case ADD_USER_IN_AGE: {
      return [...state, { name: action.data }];
    }

    default:
      return state;
  }
};
export default ageReducer;
