import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    fullName: string;
    placeOfLiving: string;
    phoneNumber: string;
    birthday: string;
    avatar: string;
}

const initialState: UserState = {
    fullName: '',
    placeOfLiving: '',
    phoneNumber: '',
    birthday: '',
    avatar: ''
};

const PersonalInfoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFullName(state, action: PayloadAction<string>) {
            state.fullName = action.payload;
        },
        setPlaceOfLiving(state, action: PayloadAction<string>) {
            state.placeOfLiving = action.payload;
        },
        setPhoneNumber(state, action: PayloadAction<string>) {
            state.phoneNumber = action.payload;
        },
        setBirthday(state, action: PayloadAction<string>) {
            state.birthday = action.payload;
        },
        setAvatar(state, action: PayloadAction<string>) {
            state.avatar = action.payload;
        }
    }
});

export const {
    setFullName,
    setPlaceOfLiving,
    setPhoneNumber,
    setBirthday,
    setAvatar
} = PersonalInfoSlice.actions;

export default PersonalInfoSlice.reducer;
