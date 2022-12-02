import { combineReducers, configureStore } from '@reduxjs/toolkit';
import incDeReducer from '../incdec/IncDecSlice';
import loginSlice from '../components/login/loginSlice';
import registrationSlice from '../components/registration/registrationSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

let rootReducer = combineReducers({
    login: loginSlice,
    register: registrationSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
        reducer: persistedReducer,
        // counter: incDeReducer,
        // login: loginSlice,
        // register: registrationSlice
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    
});

export let persistor = persistStore(store)
