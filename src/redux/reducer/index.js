import { combineReducers } from "redux";
import { globalState } from "./globalReducer";
import { userState, usersState } from "./userReducer";
import { timeLineState } from "./postReducer";
import { myPostState } from "./myPostReducer";
import { themeState } from "./themeReducer";

const reducer = combineReducers({
  globalState,
  userState,
  usersState,
  timeLineState,
  myPostState,
  themeState,
});

export default reducer;
