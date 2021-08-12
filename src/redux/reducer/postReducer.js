const initialTimeLineState = [];

export const timeLineState = (state = initialTimeLineState, action) => {
  if (action.type === "SET_TIMELINE") {
    return action.value;
  }
  return state;
};
