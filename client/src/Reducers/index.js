import { combineReducers } from 'redux';

import posts from './posts';
import works from './works'
export const reducers = combineReducers({ posts,works });
// export const reducers=combineReducers({});