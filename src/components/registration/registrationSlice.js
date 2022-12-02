import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
    message: ""
}


export const registerApi = createAsyncThunk(
    'register/user',
    async (formData) => {
        try {
            let response = await axios.post("http://10.10.9.24:3000/users/registration", formData)
            if (response.status === 200) {
                toast.success(response.data.message)
                return {
                    message: "User Registered Successfully"
                }
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
)

let registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(registerApi.fulfilled, (state, action) => {
            console.log(action.payload);
            state.message = "User Registered Successfully";
        })
    },
})



export default registerSlice.reducer;