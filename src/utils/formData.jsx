/* eslint-disable react-refresh/only-export-components */
import { BsImages } from "react-icons/Bs";
import { GrTextAlignLeft } from "react-icons/Gr";
import { MdTitle } from "react-icons/Md";

const TITLE_SUBTITLE_CATEGORY = "Title, subtitle, category";
const BODY = "Body";
const IMAGES = "Images";

export const FORM_DATA_SECTIONS = [
  {
    title: TITLE_SUBTITLE_CATEGORY,
    icon: <MdTitle />,
  },
  {
    title: BODY,
    icon: <GrTextAlignLeft />,
  },
  {
    title: IMAGES,
    icon: <BsImages />,
  },
];

export const FORM_DATA = [
  {
    label: "Title",
    section: TITLE_SUBTITLE_CATEGORY,
    maxCharacters: 50,
  },
  {
    label: "Category",
    section: TITLE_SUBTITLE_CATEGORY,
    maxCharacters: 50,
  },
  {
    label: "Subtitle",
    section: TITLE_SUBTITLE_CATEGORY,
    maxCharacters: 50,
  },
  {
    label: "Date",
    section: TITLE_SUBTITLE_CATEGORY,
    type: "date",
  },
  {
    label: "Primary",
    section: BODY,
    maxCharacters: 50,
  },
  {
    label: "Secondary",
    section: BODY,
    maxCharacters: 50,
  },
  {
    label: "File",
    section: IMAGES,
    type: "file",
  },
];
