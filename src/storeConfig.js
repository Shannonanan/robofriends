
import { createStore, applyMiddleware , compose} from 'redux';
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./epic";
import { rootReducer } from "./reducers";




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();
let store;
export const storeConfig = () => {
  store = createStore(
    rootReducer,
      composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
  );
  epicMiddleware.run(rootEpic);
  //store.dispatch(fetchItemTypesStart());
  return store;
};

