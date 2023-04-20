import { createSlice } from "@reduxjs/toolkit";

export const objectDta=createSlice({
    name:"getting",
    initialState:{
        data:[],
        data1:[],
        data2:[],
        mobile:[],
        username:[],
        dat:[],
        superUser:[]
    },
    reducers:{
        sending:(state,action)=>{
          state.data=action.payload
        },
        sending1:(state,action)=>{
           state.data1=action.payload
        },
        sending2:(state,action)=>{
            state.data2=[...state.data2,...[action.payload]]
         },
         sending3:(state,action)=>{
            state.mobile=action.payload
         },
         UserName:(state,action)=>{
            state.username=action.payload
         },
         Dat:(state,action)=>{
            state.dat=action.payload
         },
         user:(state,action)=>{
            state.superUser=action.payload
         }
    }
})
export const{sending,sending1,sending2,sending3,UserName,Dat,user}=objectDta.actions
export default objectDta.reducer