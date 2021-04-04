import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducer as authReducer} from 'features/auth/core/slice';
import {reducer as recordsReducer} from 'features/records/core/slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'walkthrough', 'profile'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  records: recordsReducer,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger, thunk),
});

const persistor = persistStore(store);

type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {store, persistor, useAppDispatch, useAppSelector};
