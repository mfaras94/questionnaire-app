import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./features/QuestionsSlice"
// store
 export const store  = configureStore({
    reducer:{
        questions:questionsReducer
    }
})


