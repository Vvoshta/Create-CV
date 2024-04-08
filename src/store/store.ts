import { configureStore } from '@reduxjs/toolkit';
import personalInfoReducer from './reducers/PersonalInfoSlice';
import educationReducer from './reducers/EducationSlice';
import skillsReducer from './reducers/SkillsSlice';
import workExpReducer from './reducers/WorkExpSlice';

export const store = configureStore({
    reducer: {
        personalInfoReducer,
        educationReducer,
        skillsReducer,
        workExpReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
