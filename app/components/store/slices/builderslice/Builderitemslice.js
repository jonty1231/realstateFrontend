"use client"
import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"

import { localurl } from "../../baseurl"

export const getBuilderinfo=createAsyncThunk("/builderinfo",async(id)=>{
    const res= await axios.post(`${localurl}/builder/data`,{id})

    return res.data
})

const Builderinfoslice=createSlice({
    name:"builderinfo",
initialState:{data:[],isLoading:false,isError:false},

extraReducers:(builder)=>{
    builder.addCase(getBuilderinfo.pending,(state)=>{
        state.isLoading=true
    })
    builder.addCase(getBuilderinfo.fulfilled,(state,action)=>{
        state.data=action.payload;
        state.isLoading=false;
    })
    builder.addCase(getBuilderinfo.rejected,(state,action)=>{
        console.log(action.payload)
        state.isError=true;
        state.isLoading=false
    })
}



})

export default Builderinfoslice.reducer