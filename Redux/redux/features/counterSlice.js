import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:100
    },
    reducers:{
        increment:(state)=>{
            state.value += 1
        },
        decrement:(state)=>{
            state.value -=1
        },
        IncrementByAmount:(state,actions)=>{
            state.value += actions.payload
        }
    }
})

export const {increment,decrement, IncrementByAmount} = counterSlice.actions
export default counterSlice.reducer