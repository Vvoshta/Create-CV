import { configureStore } from '@reduxjs/toolkit';
import personalInfo from './reducers/PersonalInfoSlice';
import education from './reducers/EducationSlice';
import skills from './reducers/SkillsSlice';
import workExp from './reducers/WorkExpSlice';

export const store = configureStore({
    reducer: {
        personalInfo,
        education,
        skills,
        workExp
    }
});

export type RootState = ReturnType<typeof store.getState>;
