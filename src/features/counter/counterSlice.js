import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialStateValue,
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        actionals: (state, action) => { state.value += action.payload }
    }
})

export const { increment, decrement, actionals } = counterSlice.actions
export default counterSlice.reducer