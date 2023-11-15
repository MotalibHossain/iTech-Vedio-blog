import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tagsDataFetch } from "./TagAPI";

const initialState = {
    tags: [],
    isLoading: false,
    errorMessage: ""
};

// -----------------------------------------
// 	create async-thank request
// -----------------------------------------
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const url = `${SERVER_URL}/tags`;

export const fetchTags = createAsyncThunk("Tags/fetchTags", async () => {
    const response = await tagsDataFetch(url);
    return response.data;
});

// -----------------------------------------
// 	create slice
// -----------------------------------------
const tagsSlice = createSlice({
    name: "tags",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, (state, action) => {
                state.isLoading = "True";
            })
            .addCase(fetchTags.fulfilled, (state, action) => {
                state.isLoading = "False";
                state.tags = action.payload;
            })
            .addCase(fetchTags.rejected, (state, action) => {
                state.isLoading = "False";
                state.error = action.payload;
            });
    }
});

export default tagsSlice.reducer
