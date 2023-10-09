import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Box } from '@mui/material';

function EditorDescription(props) {
  const { editorState, onEditorStateChange } = props;

  return (
    <Box sx={{ border: '1px solid #F1F1F1' }}>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        toolbarStyle={{ border: 0, borderBottom: '1px solid #F1F1F1' }}
        onEditorStateChange={onEditorStateChange}
        editorStyle={{ height: 250 }}
      />
    </Box>
  );
}

export default EditorDescription;
