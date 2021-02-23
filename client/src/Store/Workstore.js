import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {Workreducer} from '..Reducers/index.js'
export default createStore({Workreducer},compose(applyMiddleware(thunk)));