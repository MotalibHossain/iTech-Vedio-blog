import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    vedios: [],
    isLoading: false,
    isError: false,
    errorMessage: ""
};

// -----------------------------------------
// 	create async-thank request
// -----------------------------------------
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const vedioUrl = `${SERVER_URL}/videos`;

export const createVedios = createAsyncThunk("crudVedio/createVediosVedios", async (data) => {
	const response = await axios.post(vedioUrl, data);
    return response?.data;
});

const crudVedioSlice = createSlice({
    name: "crudVedio",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createVedios.pending, (state, action) => {
                state.isLoading = "True";
            })
            .addCase(createVedios.fulfilled, (state, action) => {
                state.isLoading = "False";
                state.vedios.push(action.payload);
            })
            .addCase(createVedios.rejected, (state, action) => {
                state.isLoading = "False"
                state.isError = "True";
                state.errorMessage = action.payload;
            });
    }
});

export default crudVedioSlice.reducer;