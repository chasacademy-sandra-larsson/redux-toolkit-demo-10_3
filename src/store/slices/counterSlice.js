import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value = state.value + 1
        },
        decrement: (state, action) => {
            state.value = state.value - 1
        },
        valueToAdd: (state, action) => {
            state.value = state.value + action.payload
        },
        reset: (state) => {state.value =  0},
        

    }

})

export const {increment, decrement, valueToAdd, reset} = counterSlice.actions
export default counterSlice.reducer