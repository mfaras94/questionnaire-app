import { createAsyncThunk } from "@reduxjs/toolkit";

// fatching data form an API
export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async () => {
    const response = await fetch("https://dummyjson.com/posts?limit=5");
    return await response.json();
  }
);
// submit data
export const submitData = createAsyncThunk(
  "questions/submitData",
  async (data) => {
    const response = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: data.question,
        question: data.question,
        answer: data.answer,
        userId: 1,
      }),
    });

    const result = await response.json();
    return result;
  }
);
