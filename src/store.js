import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../src/features/QuestionsSlice"
// store
 const store  = configureStore({
    reducer:{
        questions:questionsReducer
    }
})


export default store