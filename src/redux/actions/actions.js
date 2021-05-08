import { ADD_USER, ADD_USER_IN_AGE, UPDATE_AGE } from "./actionsTypes";

const addUser = (username) => {
  return {
    type: ADD_USER,
    data: username,
  };
};

const addUserThunk = (username) => {
  return (dispatch) => {
    dispatch(addUser(username));
  };
};

const updateAge = (nameIndex, age) => {
  return {
    type: UPDATE_AGE,
    data: { index: nameIndex, age: age },
  };
};

const updateAgeThunk = (nameIndex, age) => {
  return (dispatch) => {
    dispatch(updateAge(nameIndex, age));
  };
};

const addUserInAge = (username) => {
  return {
    type: ADD_USER_IN_AGE,
    data: username,
  };
};

const addUserInAgeThunk = (username) => {
  return (dispatch) => {
    dispatch(addUserInAge(username));
  };
};

export {
  addUserInAgeThunk as addUserInAge,
  addUserThunk as addUser,
  updateAgeThunk as updateAge,
};
