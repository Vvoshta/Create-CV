import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SkillsState {
    skills: string[];
}

const initialState: SkillsState = {
    skills: []
};

const SkillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        setSkills(state, action: PayloadAction<string[]>) {
            state.skills = action.payload;
        }
    }
});

export const { setSkills } = SkillsSlice.actions;

export default SkillsSlice.reducer;
