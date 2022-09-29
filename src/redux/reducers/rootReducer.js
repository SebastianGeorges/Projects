import { combineReducers } from "redux";
import { memberReducer } from "./members/memberReducer";
import { postReducer} from "./members/postReducer"

const rootReducer = combineReducers({
  membersState: memberReducer,
  postsState: postReducer
})

export default rootReducer;