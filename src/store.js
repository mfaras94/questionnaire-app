import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./features/questionsSlice"
// store
 const store  = configureStore({
    reducer:{
        questions:questionsReducer
    }
})


export default store