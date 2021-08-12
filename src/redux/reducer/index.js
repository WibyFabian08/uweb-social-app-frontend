import { combineReducers } from "redux";
import { globalState } from "./globalReducer";
import { userState, usersState } from "./userReducer";
import { timeLineState } from "./postReducer";

const reducer = combineReducers({
    globalState,
    userState,
    usersState,
    timeLineState
})

export default reducer;