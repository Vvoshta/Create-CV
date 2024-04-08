import { configureStore, combineReducers } from '@reduxjs/toolkit';
import personalInfoReducer from './reducers/PersonalInfoSlice';
import educationReducer from './reducers/EducationSlice';
import skillsReducer from './reducers/SkillsSlice';
import workExpReducer from './reducers/WorkExpSlice';

const rootReducer = combineReducers({
    personalInfoReducer,
    educationReducer,
    skillsReducer,
    workExpReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
