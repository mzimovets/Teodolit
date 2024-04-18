import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import SimpleImage from "@editorjs/simple-image";

export const EDITOR_JS_TOOLS = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    inlineToolbar: true,
  },

  list: List,
  warning: Warning,
  marker: Marker,
  image: {
    class: Image,
    config: {
      endpoints: {
        byFile: "http://localhost:3000/imageTopic",
      },
      withBorder: false,
    },
  },
  
  checklist: CheckList,
  delimiter: Delimiter,
  simpleImage: SimpleImage,
};
