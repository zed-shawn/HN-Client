import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import dataReducer from "./dataStore";
import readReducer from "./readHandler";

const rootReducer = combineReducers({
  data: dataReducer,
  read: readReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;
