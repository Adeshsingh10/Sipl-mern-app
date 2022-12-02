import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
    id: "",
    name: "",
    email: "",
    city: ""
}

export const login = createAsyncThunk(
    "login/UserLogin",
    async (loginCredientials) => {
        try {
            let loginApiResponse = await axios.post('http://10.10.9.24:3000/users/login', loginCredientials)
            if (loginApiResponse.status === 200) {
                await axios.get('http://10.10.9.24:3000/users/token-generator').then((res) => {
                    localStorage.setItem("auth-token", res?.data)
                })
                toast.success(loginApiResponse.data.message)
                localStorage.setItem("user-detail", JSON.stringify(loginApiResponse.data.user_detail))
                return {
                    payloadData: loginApiResponse.data.user_detail,
                    res: {
                        message: loginApiResponse.data.message,
                        status: loginApiResponse.data.status,
                    }
                }
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message)
        }
    }
);

let loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(login.fulfilled, (state, action) => {
            state.id = action.payload && action.payload.payloadData.id;
            state.name = action.payload && action.payload.payloadData.name;
            state.email = action.payload && action.payload.payloadData.email;
            state.city = action.payload?.payloadData.city;
        })
    },
});

export default loginSlice.reducer;