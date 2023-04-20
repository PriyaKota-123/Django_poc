import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from '../Actions/Action'

export const Store1=configureStore({
    reducer:{
        display:sliceReducer
    },
  
})