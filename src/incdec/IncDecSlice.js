import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
};


export const incDecSlice = createSlice({
    name: "IncrementDecrement",
    initialState,
    reducers: {
        increment: (state) => {

            state.value += 1;

        },
        decrement: (state) => {
            if (state.value <= 0) {
                state.value = 0
            }
            else {
                state.value -= 1;
            }

        }
    }
})

export const { increment, decrement } = incDecSlice.actions;

export default incDecSlice.reducer;
