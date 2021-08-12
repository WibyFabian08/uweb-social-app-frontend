const initialState = null;

export const userState = (state = initialState, action) => {
  if (action.type === "SET_USER") {
    return action.value;
  }
  return state;
};

const initialUsersState = null;

export const usersState = (state = initialUsersState, action) => {
  if (action.type === "SET_USERS") {
    return action.value;
  }
  return state;
};
