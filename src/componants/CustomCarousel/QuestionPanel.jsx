import React from "react";

const QuestionPanel = ({ question, animation}) => {


  return (
    <div className=" bg-blue-600 text-white w-1/2 flex items-center justify-center p-10">
      <h1 className={`text-5xl font-semibold w-9/12 ${animation}`}>
        {question}?
      </h1>
     
    </div>
  );
};


export default React.memo(QuestionPanel);
