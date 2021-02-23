import { createStore, applyMiddleware, compose } from 'redux';
import {Postreducer} from '../Reducers/index'
import thunk from 'redux-thunk';
export default createStore({Postreducer},compose(applyMiddleware(thunk)));