import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./features/QuestionsSlice"
// store
 const store  = configureStore({
    reducer:{
        questions:questionsReducer
    }
})


export default store