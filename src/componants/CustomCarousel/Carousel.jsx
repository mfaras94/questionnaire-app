import React, { useEffect, useState } from "react";
import OptionsPanel from "./OptionsPanel";
import QuestionPanel from "./QuestionPanel";

const Carousel = ({
  question,
  options,
  onOptionSelect,
  selectedOption,
  indicator = true,
  totalQuestions,
  currentStep
}) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setAnimationClass("animate-slide-in");
    const timer = setTimeout(() => setAnimationClass(""), 500);

    return () => clearTimeout(timer);
  }, [question]);

  return (
    <div className={`flex h-screen relative`}>
      <QuestionPanel question={question} animation={animationClass} />
      <OptionsPanel
        options={options}
        onOptionSelect={onOptionSelect}
        selectedOption={selectedOption}
        animation={animationClass}
      />
      
      
       {indicator && (
        <div className="flex flex-col gap-1.5 absolute w-fit h-fit left-14 inset-y-0 m-auto">
        
          {Array.from({ length: totalQuestions }).map((_, index) => (
            <div
              key={index}
              className={`w-[15px] h-[15px] rounded-full border-2 border-white ${
                currentStep === index ? "bg-blue-600" : "bg-white"
              }`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};


export default React.memo(Carousel);
