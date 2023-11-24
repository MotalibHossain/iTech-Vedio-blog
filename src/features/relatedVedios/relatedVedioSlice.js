import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    relatedTags: [],
    search: "",
};

// -----------------------------------------
// 	create slice
// -----------------------------------------

const relatedVediosSlice = createSlice({
    name: "relatedTags",
    initialState,
    reducers: {
        addTags: (state, action) => {
            if (state.relatedTags.includes(action.payload)) {
                const tagIndex = state.relatedTags.indexOf(action.payload);
                if (tagIndex > -1) {
                    state.relatedTags.splice(tagIndex, 1);
                } else {
                    return state;
                }
            } else {
                state.relatedTags.push(action.payload);
            }
        },
    },
});

export const { addTags } = relatedVediosSlice.actions;
export default relatedVediosSlice.reducer;
