import groupReducer from "./groupReducer";
import appStateReducer from "./appStateReducer";
//import groupAsyncReducer from "./groupAsyncReducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
   groupReducer,
   appState: appStateReducer,
});
