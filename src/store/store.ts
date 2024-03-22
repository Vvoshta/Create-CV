import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/PersonalInfoSlice';
import educationReducer from './reducers/EducationSlice';

export const store = configureStore({
    reducer: {
        userReducer,
        educationReducer
    }
});
