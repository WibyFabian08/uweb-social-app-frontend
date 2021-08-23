const initialState = true;

export const themeState = (state = initialState, action) => {
  if (action.type === "SET_THEME") {
    return action.value;
  }
  return state;
};
