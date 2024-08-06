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

const createInitialWorkplace = (): WorkPlace => ({
    company: '',
    job: '',
    workPeriodStart: '',
    workPeriodEnd: '',
    description: ''
});

const initialState: WorkExpState = {
    workplaces: [createInitialWorkplace()]
};

const WorkExpSlice = createSlice({
    name: 'work-experience',
    initialState,
    reducers: {
        addWorkplace(state) {
            state.workplaces.push(createInitialWorkplace());
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
