import { useDispatch, useSelector } from "react-redux";
import { updateAns } from "../features/QuestionsSlice";

import React, { useEffect, useState } from "react";
import Carousel from "../componants/CustomCarousel/Carousel";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../componants/Loading";
import { capitalize } from "../utility/capitalize";
import { useNavigate } from "react-router-dom";
import { fetchQuestions, submitData } from "../features/QuestionsThunk";

function QuestionnairePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions = useSelector((state) => state.questions.items);
  const status = useSelector((state) => state.questions.status);
  const error = useSelector((state) => state.questions.error);
  const answers = useSelector((state) => state.questions.answers);
  const [currentStep, setCurrentStep] = useState(0);

  const handleOptionSelect = (selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentStep] = {
      question: questions.posts[currentStep].title,
      answer: capitalize(selectedOption),
    };
    dispatch(updateAns(updatedAnswers));
    setCurrentStep(currentStep + 1);
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuestions());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (answers.length > 0 && currentStep >= questions.posts.length) {
      dispatch(submitData(answers));
      toast.success("Your answers have been submitted!", {
        toastId: "submit-success",
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        progress: false,
        theme: "dark",
   
      });
      navigate("/summary");
    }
  }, [answers, currentStep, dispatch, navigate, questions.posts.length]);

  if (status === "loading") return <Loading />;
  if (status === "failed") return <p>Error: {error}</p>;

  if (
    questions.posts &&
    questions.posts.length > 0 &&
    currentStep < questions.posts.length
  ) {
    return (
      <>
        <Carousel
          question={questions.posts[currentStep].title}
          options={questions.posts[currentStep].tags}
          onOptionSelect={handleOptionSelect}
          selectedOption={answers[currentStep]?.answer}
          totalQuestions={questions.posts.length}
          currentStep={currentStep}
        />
      </>
    );
  }

  return null
}

export default QuestionnairePage;
