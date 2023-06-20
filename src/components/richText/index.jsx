import { makeStyles } from "@material-ui/core";
import React from "react";

import clsx from "clsx";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichTextEditor = (props) => {
  const classes = useStyles();
  const { helperText, error, formik } = props;
  const handleEditorChange = (editorState) => {
    formik.setFieldValue("description", editorState.blocks[0].text);
    formik.setFieldValue("descriptionView", editorState);
  };
  const toolbarOptions = {
    blockType: {
      className: "demo-option-custom-wide",
      dropdownClassName: "demo-dropdown-custom",
    },
    inline: {
      options: ["bold", "italic", "underline"],
      bold: { className: clsx(classes.toolbarButton) },
      italic: { className: clsx(classes.toolbarButton) },
      underline: { className: clsx(classes.toolbarButton) },
    },

    list: {
      options: ["unordered", "ordered", "indent", "outdent"],
      unordered: { className: clsx(classes.toolbarButton) },
      ordered: { className: clsx(classes.toolbarButton) },
    },
    fontSize: {
      className: "bordered-option-classname",
    },

    // Remove the font size, font, and block type options
    options: ["blockType", "inline", "list", "fontSize"],
    // Remove the block type dropdown
    // blockType: {
    //   inDropdown: false,
    // },

    // Remove the font size dropdown

    // Remove the font family dropdown

    // link: {
    //   options: ["HTML Code"],
    // },
  };
  return (
    <>
      <Editor
        {...props}
        wrapperClassName={classes.wrapper}
        editorClassName={classes.editor}
        toolbarClassName={classes.toolbar}
        onEditorStateChange={handleEditorChange}
        placeholder="Write your description here..."
        toolbar={toolbarOptions}
      />

      <div className={clsx(classes.helperText, { [classes.error]: error })}>
        <small dangerouslySetInnerHTML={{ __html: helperText }} />
      </div>
    </>
  );
};

export default RichTextEditor;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    "& .rdw-editor-toolbar": {
      padding: "5px 0px 0px 10px",
      // borderBottom: "1px solid black",
      borderRadius: 0,
    },

    "& .makeStyles-toolbar-128": {
      marginBottom: "0px",
    },
  },
  editor: {
    height: "200px !important",
    // background: theme.palette.primary.light,
    color: theme.palette.text.primary,
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#ffff",

    "&::-webkit-scrollbar": {
      width: 5,
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "transparent",
      borderRadius: 10,
    },
  },
  toolbar: {
    marginBottom: "10px !important ",
    border: "none",
    borderRadius: "10px",
    "& .rdw-option-active": {
      background: "#939393",
      boxShadow: "none",
    },
    "& .rdw-option-wrapper": {
      border: "none",
      padding: 0,
      opacity: "inherit",
    },
    "& .rdw-option-wrapper:active": {
      boxShadow: "none",
    },
    "& .rdw-option-wrapper:hover": {
      boxShadow: "none",
    },
    "& .rdw-dropdown-wrapper": {
      border: "none",
    },
    "& .rdw-list-wrapper": {
      gap: 10,
    },
  },

  toolbarButton: {
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.secondary.dark,
    },
  },
  helperText: {
    padding: "2px 0 5px",
    textAlign: "left",
    color: theme.palette.text.primary,
  },
  error: {
    color: "red",
  },
}));
