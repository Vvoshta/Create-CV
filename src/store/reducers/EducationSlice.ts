import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DegreeOptions } from '../../components/Education/consts';

interface EducationState {
    institution: string;
    graduationDate: string;
    degree: DegreeOptions;
}

const initialState: EducationState = {
    institution: '',
    graduationDate: '',
    degree: DegreeOptions.Bachelor
};

const EducationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {
        setInstitution(state, action: PayloadAction<string>) {
            state.institution = action.payload;
        },
        setGraduationDate(state, action: PayloadAction<string>) {
            state.graduationDate = action.payload;
        },
        setDegree(state, action: PayloadAction<DegreeOptions>) {
            state.degree = action.payload;
        }
    }
});

export const { setInstitution, setGraduationDate, setDegree } =
    EducationSlice.actions;

export default EducationSlice.reducer;
