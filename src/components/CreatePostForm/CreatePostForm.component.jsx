/* eslint-disable react/prop-types */
import { DropInput } from "../DropInput/DropInput.component";
import { FORM_DATA_SECTIONS } from "../../utils/formData";

export const CreatePostForm = () => {
  return (
    <div>
      <div className="buttons-post">
        <button>Post</button>
        <button>Clear all</button>
      </div>
      {FORM_DATA_SECTIONS.map((section, index) => (
        <DropInput key={index} title={section.title} icon={section.icon} />
      ))}
    </div>
  );
};
