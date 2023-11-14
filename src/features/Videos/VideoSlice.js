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

export const fetchVedios = createAsyncThunk("vedios/fetchVedios", async () => {
    const response = await axios.get("http://localhost:9000/videos");
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
                console.log("ok", SERVER_URL, vedioUrl);
            })
            .addCase(fetchVedios.rejected, (state, action) => {
                state.isLoading = "False"
                state.isError = "True";
                state.errorMessage = action.payload;
                console.log("rejected", action.payload);
            });
    }
});

export default vedioFetchSlice.reducer;
