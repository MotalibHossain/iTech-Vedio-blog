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
console.log("vedioUrl", vedioUrl)

export const fetchVedios = createAsyncThunk("vedios/fetchVedios", async (tags) => {
    const response = await axios.get(vedioUrl);
    console.log("tags-------------", tags)
    return response?.data;
});

// -----------------------------------------
// 	create slice
// -----------------------------------------

const vedioFetchSlice = createSlice({
    name: "vedios",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVedios.pending, (state, action) => {
                state.isLoading = "True";
            })
            .addCase(fetchVedios.fulfilled, (state, action) => {
                state.isLoading = "False";
                state.vedios = action.payload;
                console.log("ok", SERVER_URL);
            })
            .addCase(fetchVedios.rejected, (state, action) => {
                state.isLoading = "False"
                state.isError = "True";
                state.errorMessage = action.payload;
            });
    }
});

export default vedioFetchSlice.reducer;
