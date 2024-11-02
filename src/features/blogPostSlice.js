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

export const UpdateBlogPost = createAsyncThunk("blogPost/UpdateBlogPost",  async (UpdatedData) =>{
    const {updateURl, data} = UpdatedData
    const response = await axios.put(updateURl, data);
    return response?.data;
})

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
            })

            .addCase(UpdateBlogPost.pending, (state, action) => {
                state.isLoading = "True";
            })
            .addCase(UpdateBlogPost.fulfilled, (state, action) => {
                state.isLoading = "false";
                const {id, data} = action.payload
                const findIndex = state.post.findIndex((item)=> item.id === id)
                console.log("Posts before update:", state.post);
                if (findIndex !== -1) {
                    state.post[findIndex] = data;
                    console.log("update  data= ", state.post[findIndex], state.post)
                } 
            })
            .addCase(UpdateBlogPost.rejected, (state, action) => {
                state.isError = action.payload;
            });
    }
});

export default blogPostSlice.reducer;
