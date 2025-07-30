import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:0,
};

export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value = state.value+1;
        },
        decrement:(state)=>{
            state.value = state.value-1;
        },
        reset:(state)=>{
            state.value = 0
        },
        setValue:(state,action)=>{
            state.value = action.payload;
        },

    }
})

export const{increment,decrement,reset,setValue}=CounterSlice.actions;
export default CounterSlice.reducer;
