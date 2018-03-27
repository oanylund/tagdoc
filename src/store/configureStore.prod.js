import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import clipboard from "../middleware/clipboardMiddleware";

const enhancer = compose(applyMiddleware(clipboard));

const configureStore = () => createStore(rootReducer, enhancer);

export default configureStore;
