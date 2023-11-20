import PropTypes from "prop-types";
import { publishPost } from "../../store/slice/postSlice";
import { useDispatch } from "react-redux";

import "./StyledInput.styles.css";

export const StyledInput = ({
  label,
  maxCharacters,
  children,
  postData,
  setPostData,
}) => {
  const dispatch = useDispatch();

  const onHandleData = (text, data) => {
    setPostData((prevData) => ({
      ...prevData,
      [data]: text,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(publishPost(postData));
    setPostData({
      title: "",
      subtitle: "",
      category: "",
      date: "",
      file: "",
      primary: "",
      secondary: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul className="styledInputWrapper">
          {label === "Title" && (
            <>
              <span className="labelInput">{label}</span>
              <textarea
                className="inputStyle"
                type="text"
                name="input"
                onChange={(e) =>
                  onHandleData(e.target.value, label.toLowerCase())
                }
              >
                {children}
              </textarea>
              <span className="charsStyle">{maxCharacters}</span>
            </>
          )}
          {label === "Subtitle" && (
            <>
              <span className="labelInput">{label}</span>
              <textarea
                className="inputStyle"
                type="text"
                name="input"
                onChange={(e) =>
                  onHandleData(e.target.value, label.toLowerCase())
                }
              >
                {children}
              </textarea>
              <span className="charsStyle">{maxCharacters}</span>
            </>
          )}
          {label === "Category" && (
            <>
              <span className="labelInput">{label}</span>
              <textarea
                className="inputStyle"
                type="text"
                name="input"
                onChange={(e) =>
                  onHandleData(e.target.value, label.toLowerCase())
                }
              >
                {children}
              </textarea>
              <span className="charsStyle">{maxCharacters}</span>
            </>
          )}
          {label === "Date" && (
            <>
              <span className="labelInput">{label}</span>
              <input
                type="date"
                name="date"
                onChange={(e) =>
                  onHandleData(e.target.value, label.toLowerCase())
                }
              />
            </>
          )}
          {label === "File" && (
            <>
              <span className="labelInput">{label}</span>
              <input
                type="file"
                name="image"
                onChange={(e) => {
                  onHandleData(
                    URL.createObjectURL(e.target.files[0]),
                    label.toLowerCase()
                  );
                }}
              />
            </>
          )}
          {label === "Primary" && (
            <>
              <span className="labelInput">{label}</span>
              <textarea
                className="inputStyle"
                type="text"
                name="primary"
                onChange={(e) =>
                  onHandleData(e.target.value, label.toLowerCase())
                }
              >
                {children}
              </textarea>
              <span className="charsStyle">{maxCharacters}</span>
            </>
          )}
          {label === "Secondary" && (
            <>
              <span className="labelInput">{label}</span>
              <textarea
                className="inputStyle"
                type="text"
                name="secondary"
                onChange={(e) =>
                  onHandleData(e.target.value, label.toLowerCase())
                }
              >
                {children}
              </textarea>
              <span className="charsStyle">{maxCharacters}</span>
            </>
          )}
        </ul>
      </form>
    </div>
  );
};

StyledInput.propTypes = {
  label: PropTypes.string,
  maxCharacters: PropTypes.string,
  children: PropTypes.string,
  postData: PropTypes.object,
  setPostData: PropTypes.func,
};
