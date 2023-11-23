import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    relatedTags: [],
    search: ""
};

// -----------------------------------------
// 	create slice
// -----------------------------------------

const relatedVediosSlice = createSlice({
    name: "relatedTags",
    initialState,
    reducers: {
        addTags: (state, action) => {
            state.relatedTags.push(action.payload);
        }
    }
});

export const { addTags } = relatedVediosSlice.actions;
export default relatedVediosSlice.reducer;
