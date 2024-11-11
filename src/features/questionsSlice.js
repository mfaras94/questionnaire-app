import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchQuestions } from "./QuestionsThunk";

// questionsSlice
const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    items: { posts: [] },
    status: "idle",
    error: null,
    answers: [],
  },
  reducers: {
    updateAns: (state, action) => {
      state.answers = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;

        toast.success("We are ready to take Answers.", {
          toastId: "successToastId",
          position: "bottom-right",
          autoClose: 800,
          hideProgressBar: true,
          closeOnClick: true,
          progress: false,
          theme: "dark",
        });

        toast.info(
          "Please select the most relevant emoji that best represents your answer. Hover over the emojis to view their corresponding titles for clarification.",
          { toastId: "infoToastId",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            progress: false,
            theme: "dark",
           }
        );
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;

        toast.error("Something went wrong. Please try again later.", {
          toastId: "errorToastId",
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          progress: false,
          theme: "dark",
        });
      });
  },
});

export const { updateAns } = questionsSlice.actions;

export default questionsSlice.reducer;
