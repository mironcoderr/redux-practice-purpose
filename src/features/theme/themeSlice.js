import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    value: '#000000',
}

export const themeSlice = createSlice({
    name: 'color',
    initialState: initialValue,
    reducers: {
        themeColor: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { themeColor } = themeSlice.actions;
export default themeSlice.reducer;