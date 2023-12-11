import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducer";
import { persistStore } from "redux-persist";
import CityPrefer from "../reducer/AddPrefer";
import MariPrefer from "../reducer/MariPrefer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  mainReducer: mainReducer,
  addCityPrefer: CityPrefer,
  MariPrefer: MariPrefer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
