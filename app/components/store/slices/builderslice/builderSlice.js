"use client"
import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"

import { localurl } from "../../baseurl"

export const getBuilder=createAsyncThunk("/buildern",async(param)=>{
    const res= await axios.post(`${localurl}/builder`,{id:param})

    return res.data
})

const Builderslice=createSlice({
    name:"builder",
initialState:{data:[],isLoading:false,isError:false},

extraReducers:(builder)=>{
    builder.addCase(getBuilder.pending,(state)=>{
        state.isLoading=true
    })
    builder.addCase(getBuilder.fulfilled,(state,action)=>{
        state.data=action.payload;
        state.isLoading=false;
    })
    builder.addCase(getBuilder.rejected,(state,action)=>{
        console.log(action.payload)
        state.isError=true;
        state.isLoading=false
    })
}



})

export default Builderslice.reducer