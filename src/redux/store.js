import createStore from "redux/src/createStore";
import applyMiddleware from "redux/src/applyMiddleware";
import {logger} from "redux-logger";
import combineReducers from "redux/src/combineReducers";
import cardsReducers from "./reducers/cardsReducers";
import thunkMiddleware from 'redux-thunk';
import filterReducers from "./reducers/filterReducers";
import authReducer from "./reducers/authReducer";


const reducers = combineReducers({
    cards: cardsReducers,
    filters: filterReducers,
    auth: authReducer,
});


const store = ()=> createStore(reducers, applyMiddleware(logger, thunkMiddleware));

export default store;