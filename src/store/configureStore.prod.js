import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";

// const enhancer = compose(applyMiddleware(a, b, c));

const configureStore = () => createStore(rootReducer);

export default configureStore;
