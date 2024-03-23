import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/PersonalInfoSlice';
import educationReducer from './reducers/EducationSlice';
import skillsReducer from './reducers/SkillsSlice';

export const store = configureStore({
    reducer: {
        userReducer,
        educationReducer,
        skillsReducer
    }
});
