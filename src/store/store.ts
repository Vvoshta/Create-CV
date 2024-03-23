import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/PersonalInfoSlice';
import educationReducer from './reducers/EducationSlice';
import skillsReducer from './reducers/SkillsSlice';
import workExpReducer from './reducers/WorkExpSlice';

export const store = configureStore({
    reducer: {
        userReducer,
        educationReducer,
        skillsReducer,
        workExpReducer
    }
});
