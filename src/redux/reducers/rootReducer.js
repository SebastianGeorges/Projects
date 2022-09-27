import { combineReducers } from "redux";
import { memberReducer } from "./members/memberReducer";

const rootReducer = combineReducers({
  membersState: memberReducer,
  // projectState: projectReducer
})

export default rootReducer;