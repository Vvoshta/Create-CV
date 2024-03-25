import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WorkExpState {
    workplaces: WorkPlace[];
}

export interface WorkPlace {
    company: string;
    job: string;
    workPeriodStart: string;
    workPeriodEnd: string;
    description: string;
}

const initialState: WorkExpState = {
    workplaces: []
};

const WorkExpSlice = createSlice({
    name: 'work-experience',
    initialState,
    reducers: {
        addWorkplace(state) {
            const initialWorkPlace: WorkPlace = {
                company: '',
                job: '',
                workPeriodStart: '',
                workPeriodEnd: '',
                description: ''
            };
            state.workplaces.push(initialWorkPlace);
        },
        updateWorkplace(
            state,
            action: PayloadAction<{
                index: number;
                workplace: Partial<WorkPlace>;
            }>
        ) {
            state.workplaces[action.payload.index] = {
                ...state.workplaces[action.payload.index],
                ...action.payload.workplace
            };
        }
    }
});

export const { addWorkplace, updateWorkplace } = WorkExpSlice.actions;

export default WorkExpSlice.reducer;
