import { combineReducers } from 'redux';

import posts from './posts';
import works from './works'
export const Postreducer = combineReducers({posts});
export const Workreducer=combineReducers({works});
// export const reducers=combineReducers({});