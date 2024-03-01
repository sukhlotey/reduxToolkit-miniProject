import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    data:[],
    loading:false,
    error:null,
};

export const fetchData = createAsyncThunk("data/get", async ()=>{
    try{
        const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos");
        return response.data;
    }
    catch(error){
        throw error;
    }
});

const shootSlice = createSlice({
    name:'shoot',
    initialState,
    reducers: {
        // Other synchronous actions can go here
      },

    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.loading=false;
            state.data = action.payload;
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.loading=false;
            state.error = action.error.message;
        })
    }
})

export default shootSlice.reducer;