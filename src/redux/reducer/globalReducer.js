const initialState = {
  error: null,
  loading: false
};

export const globalState = (state = initialState, action) => {
  if (action.type === "SET_ERROR") {
    return {
      ...state,
      error: action.value
    }
  }

  if (action.type === "SET_LOADING") {
    return {
      ...state,
      loading: action.value
    }
  }
  return state;
};
