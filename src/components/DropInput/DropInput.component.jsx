/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/Md";
import { useState } from "react";
import { StyledInput } from "../StyledInput/StyledInput.component";

import "./DropInput.styles.css";
import { useEffect } from "react";
import { FORM_DATA } from "../../utils/formData";

export const DropInput = ({ icon, title }) => {
  const [selectedDropDown, setSelectedDropDown] = useState(false);
  const [formInputs, setFormInputs] = useState([]);

  const filterFormDataBySection = () => {
    const filteredArray = FORM_DATA.filter((input) => input.section === title);
    return filteredArray;
  };

  useEffect(() => {
    setFormInputs(filterFormDataBySection());
  }, []);

  return (
    <div className="dropInputWrapper">
      <div
        className="dropDownbutton"
        onClick={() => setSelectedDropDown((prev) => !prev)}
      >
        <div className="icon-text-container">
          {icon && icon}
          <span>{title}</span>
        </div>
        {selectedDropDown ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </div>

      {selectedDropDown && (
        <div className="dropContentWrapper">
          {formInputs?.length &&
            formInputs.map((input, index) => (
              <StyledInput
                key={index}
                label={input.label}
                maxCharacters={input.maxCharacters}
              />
            ))}
        </div>
      )}
    </div>
  );
};
