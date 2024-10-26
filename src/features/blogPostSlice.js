import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    post: [],
    isLoading: false,
    isError: ""
};

// -----------------------------------------
// 	create async-thank request
// -----------------------------------------
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const createBlogPost = createAsyncThunk("blogPost/createBlogPost", async () => {
    const response = await axios.get(SERVER_URL);
    return response?.data;
});

const blogPostSlice = createSlice({
    name: "blogPost",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createBlogPost.pending, (state, action) => {
                state.isLoading = "True";
            })
            .addCase(createBlogPost.fulfilled, (state, action) => {
                state.isLoading = "false";
                state.post.push(...action.payload);
            })
            .addCase(createBlogPost.rejected, (state, action) => {
                state.isError = action.payload;
            });
    }
});

export default blogPostSlice.reducer;
