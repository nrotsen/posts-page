import { useState } from "react";
import { NavBar } from "../../components/NavBar/NavBar.component";
import { DropInput } from "../../components/DropInput/DropInput.component";
import { MdTitle } from "react-icons/Md";
import { GrTextAlignLeft } from "react-icons/Gr";
import { BsImages } from "react-icons/Bs";

import "./CreatePostPage.style.css";

export const CreatePostPage = () => {
  const [postData, setPostData] = useState({
    title: "",
    subtitle: "",
    category: "",
    date: "",
    file: "",
    primary: "",
    secondary: "",
  });

  return (
    <div className="writePost-container">
      <NavBar />

      <div className="post-and-preview-wrapper">
        <div className="form-container">
          <div className="buttons-post">
            <button>Post</button>
            <button>Clear all</button>
          </div>
          <DropInput
            buttonText="Title, subtitle, category"
            icon={<MdTitle className="iconDropDown" />}
            postData={postData}
            setPostData={setPostData}
          />
          <DropInput
            buttonText="Body"
            icon={<GrTextAlignLeft className="iconDropDown" />}
            postData={postData}
            setPostData={setPostData}
            title="Text"
            maxCharacters="150 characters max"
          />
          <DropInput
            buttonText="Images"
            icon={<BsImages className="iconDropDown" />}
            postData={postData}
            setPostData={setPostData}
          />
        </div>

        <div className="preview-container">
          <div className="mode-preview-buttons">
            <button>Mobile</button>
            <button>Desktop</button>
          </div>
          <div className="preview">
            <div className="post-wrapper">
              <div>
                <span>{postData.category}</span>
                <h1 className="post-title">{postData.title}</h1>
                <h2 className="sub-title">{postData.subtitle}</h2>
              </div>
              <div className="subtitles-container">
                <span>{postData.date.split("-").reverse().join("-")}</span>
              </div>
              <div className="img-post-wrapper">
                <img className="create-post-img" src={postData.file} />
                <span>{postData.primary}</span>
              </div>
              <div className="bodytexts">
                <span>{postData.secondary}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
