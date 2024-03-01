import {createSlice} from "@reduxjs/toolkit"

const initialState=[];

const displaySlice = createSlice({
    name:'displayShoot',
    initialState,
    reducers:{
        show(state,action){
            state.forEach(action.payload)
        }
    }
})

export const {show} = displaySlice.actions;
export default displaySlice.reducer;