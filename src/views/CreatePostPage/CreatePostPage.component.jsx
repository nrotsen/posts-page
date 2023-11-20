import { NavBar } from "../../components/NavBar/NavBar.component";
import { CreatePostForm } from "../../components/CreatePostForm/CreatePostForm.component";
import "./CreatePostPage.style.css";
import { useSelector } from "react-redux";

export const CreatePostPage = () => {
  const { previewPost } = useSelector((state) => state.posts);

  return (
    <div className="writePost-container">
      <NavBar />

      <div className="post-and-preview-wrapper">
        <div className="form-container">
          <CreatePostForm />
        </div>
        <div className="preview-container">
          <div className="mode-preview-buttons">
            <button>Mobile</button>
            <button>Desktop</button>
          </div>
          <div className="preview">
            {previewPost && (
              <div className="post-wrapper">
                <div>
                  <span>{previewPost.category}</span>
                  <h1 className="post-title">{previewPost.title}</h1>
                  <h2 className="sub-title">{previewPost.subtitle}</h2>
                </div>
                <div className="subtitles-container">
                  <span>{previewPost.date.split("-").reverse().join("-")}</span>
                </div>
                <div className="img-post-wrapper">
                  <img className="create-post-img" src={previewPost.file} />
                  <span>{previewPost.primary}</span>
                </div>
                <div className="bodytexts">
                  <span>{previewPost.secondary}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
