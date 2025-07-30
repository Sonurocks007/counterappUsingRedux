import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slices/CounterSlice"


export const Store = configureStore({
    reducer:{counter:counterReducer},
})