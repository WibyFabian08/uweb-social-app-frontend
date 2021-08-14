import { combineReducers } from "redux";
import { globalState } from "./globalReducer";
import { userState, usersState } from "./userReducer";
import { timeLineState } from "./postReducer";
import { myPostState } from "./myPostReducer";

const reducer = combineReducers({
    globalState,
    userState,
    usersState,
    timeLineState,
    myPostState
})

export default reducer;