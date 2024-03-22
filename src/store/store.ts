import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/PersonalInfoSlice';

export const store = configureStore({
    reducer: {
        userReducer
    }
});
