import React from "react";
import { emojis } from "../../emojis";
import { capitalize } from "../../utility/capitalize";
import { Tooltip } from "antd";

const OptionsPanel = ({
  options,
  selectedOption,
  onOptionSelect,
  animation,
}) => {
 
  return (
    <div className="bg-white w-1/2 flex items-center justify-center">
      <div className={`flex space-x-8 ${animation}`}>
        {options.map((label, index) => (
          <button
            key={index}
            onClick={() => onOptionSelect(label)}
            disabled={animation}
            className={`text-5xl hover:scale-110 transform transition-all duration-300  ${
              selectedOption === label ? "text-blue-600" : "text-gray-400"
            } `}
           
          >
            <Tooltip  title={capitalize(label)}>
              { emojis[capitalize(label)] ? emojis[capitalize(label)] : capitalize(label)  }
              </Tooltip>
            </button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(OptionsPanel);
 
