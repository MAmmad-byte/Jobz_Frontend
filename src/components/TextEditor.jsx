import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Box } from "@chakra-ui/react";

export default function TextEditor({ placeholder, onChange, styles }) {
  const ref = useRef();
  const [content, setContent] = useState("");
  return (
    <Box color="#000" mt={5} style={styles}>
      <JoditEditor
        ref={ref}
        onChange={onChange}
        config={{
          buttons: [
            "bold",
            "italic",
            "underline",
            "fontsize",
            "brush",
            "align",
            "ul",
            "ol",
            "fullsize",
          ],
          statusbar: false,
          placeholder: placeholder,
          sizeLG:false
        }}
      />
    </Box>
  );
}
