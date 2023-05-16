import { combineReducers } from "redux";

import memo from './memo';
import memoLike from './memoLike';

const rootReducer = combineReducers({memo, memoLike});

export default rootReducer