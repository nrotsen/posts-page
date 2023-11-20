import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/Md";
import PropTypes from "prop-types";
import { useState } from "react";
import { StyledInput } from "../StyledInput/StyledInput.component";

import "./DropInput.styles.css";

export const DropInput = ({
  buttonText = "Press",
  icon,
  title,
  postData,
  setPostData,
}) => {
  const [selectedDropDown, setSelectedDropDown] = useState(false);

  return (
    <div className="dropInputWrapper">
      <div
        className="dropDownbutton"
        onClick={() => setSelectedDropDown((prev) => !prev)}
      >
        <div className="icon-text-container">
          {icon && icon}
          <span>{buttonText}</span>
        </div>
        {selectedDropDown ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </div>
      {selectedDropDown && (
        <div className="dropContentWrapper">
          {buttonText === "Title, subtitle, category" && (
            <>
              <StyledInput
                label="Title"
                maxCharacters="50 characters maximum"
                postData={postData}
                setPostData={setPostData}
              />
              <StyledInput
                label="Subtitle"
                maxCharacters="70 characters maximum"
                postData={postData}
                setPostData={setPostData}
              />
              <StyledInput
                label="Category"
                maxCharacters="20 characters maximum"
                postData={postData}
                setPostData={setPostData}
              />
              <StyledInput
                label="Date"
                postData={postData}
                setPostData={setPostData}
              />
            </>
          )}
          {buttonText === "Body" && (
            <>
              <span className="contentTitle">{title}</span>
              <StyledInput
                label="Primary"
                maxCharacters="160 characters maximum"
                postData={postData}
                setPostData={setPostData}
              />
              <StyledInput
                label="Secondary"
                maxCharacters="160 characters maximum"
                postData={postData}
                setPostData={setPostData}
              />
            </>
          )}
          {buttonText === "Images" && (
            <>
              <StyledInput
                label="File"
                postData={postData}
                setPostData={setPostData}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

DropInput.propTypes = {
  buttonText: PropTypes.string,
  icon: PropTypes.element,
  title: PropTypes.string,
  postData: PropTypes.object,
  setPostData: PropTypes.func,
};
