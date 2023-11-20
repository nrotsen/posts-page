/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import "./StyledInput.styles.css";
import { setPreviewPost } from "../../store/slice/postSlice";

export const StyledInput = ({ label, maxCharacters, text }) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <span className="container-label">{label}</span>
      <textarea
        className="container-input"
        type="text"
        name={label.toLowerCase()}
        onChange={(e) =>
          dispatch(
            setPreviewPost({ name: e.target.name, value: e.target.value })
          )
        }
      >
        {text}
      </textarea>
      <span className="container-max">{`${maxCharacters} characters maximum`}</span>
    </div>
  );
};
