import { createSlice } from "@reduxjs/toolkit";

export const counterslice = createSlice({
    name: 'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment: (state)=>{
            state.value += 1
        },
        decrement: (state)=>{
            state.value -= 1
        },
        incrementbyamount: (state,actions)=>{
            state.value += actions.payload
        },
        decrementbyamount:(state,actions)=>{
            state.value -= actions.payload
        }
    }
})
export const {increment,decrement,incrementbyamount,decrementbyamount} = counterslice.actions

export default counterslice.reducer