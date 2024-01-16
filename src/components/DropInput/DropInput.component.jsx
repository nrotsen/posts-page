/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/Md";
import { useState } from "react";
import { StyledInput } from "../StyledInput/StyledInput.component";
import { useEffect } from "react";
import { FORM_DATA } from "../../utils/formData";
import styles from "./DropInput.module.css";

export const DropInput = ({
  icon,
  title,
  setImgPost,
  imgPost,
  setImgPreview,
}) => {
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
    <div className={styles.container}>
      <div
        className={styles.dropDownButton}
        onClick={() => setSelectedDropDown((prev) => !prev)}
      >
        <div className={styles.iconTextContainer}>
          {icon && icon}
          <span>{title}</span>
        </div>
        {selectedDropDown ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </div>

      {selectedDropDown && (
        <div className={styles.dropContentWrapper}>
          {formInputs?.length &&
            formInputs.map((input, index) => (
              <StyledInput
                key={index}
                label={input.label}
                maxCharacters={input.maxCharacters}
                type={input.type}
                setImgPost={setImgPost}
                setImgPreview={setImgPreview}
                imgPost={imgPost}
              />
            ))}
        </div>
      )}
    </div>
  );
};
