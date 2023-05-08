import { configureStore } from "@reduxjs/toolkit";
import onboardingReducer from './state/OnboardingSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, onboardingReducer)

// eslint-disable-next-line react-refresh/only-export-components
export const store = configureStore({
    reducer: persistedReducer,
    // eslint-disable-next-line no-undef
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
  })
  
  export const persistor = persistStore(store)