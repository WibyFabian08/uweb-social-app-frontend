const initialState = [];

export const myPostState = (state = initialState, action) => {
  if (action.type === "SET_MY_POST") {
    return action.value;
  }
  return state;
};
