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
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const createBlogPost = createAsyncThunk("blogPost/createBlogPost", async (date)=>{
	const response = await axios.post(SERVER_URL, data);
    return response?.data;
});

const blogPostSlice = createSlice({
    name: "blogPost",
    initialState,
    extraReducer: (builder) => {
        builder.addCase(createBlogPost.pending, (state, action) => {
            state.isLoading = "True";
        });
    }
});

export default blogPostSlice.reducer
