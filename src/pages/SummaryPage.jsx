import React from "react";
import { emojis } from "../emojis";
import { useSelector } from "react-redux";

const SummaryPage = () => {
  const answers = useSelector((state) => state.questions.answers);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-500   text-white animate-reveal-left">
      <h2 className="text-5xl font-semibold mb-8 animate-slide-in">
        Questionnaire Insights
      </h2>
      <ul className="text-2xl space-y-4">
        {answers.map((answer, index) => (
          <li key={index}>
            <span className="font-bold animate-slide-in">
              {answer.question}:
            </span>
            {` ${answer.answer} ${emojis[answer.answer]}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(SummaryPage);
