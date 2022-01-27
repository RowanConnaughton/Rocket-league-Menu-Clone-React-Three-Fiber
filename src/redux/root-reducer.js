import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import modelReducer from "./model/model.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['model']
}


const rootReducer = combineReducers({
    model: modelReducer,
});

export default persistReducer(persistConfig, rootReducer);