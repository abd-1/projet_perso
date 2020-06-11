import React, { useState } from 'react';
import styled from 'styled-components';
import EditorToolbar from './editorToolbar';
import TextEditor from './textEditor';
import ButtonPost from './buttonPost';

const ForumPost = () => {
  const [text, setText] = useState('');
  console.log(text);

  const onchange = e => {
    e.preventDefault();
    setText(e.target.value);
  };

  return (
    <FormPost>
      <Row>
        <BlocEditorForum>
          <div>
            <ConteneurEditor>
              <EditorToolbar></EditorToolbar>
              <TextEditor onchange={onchange}></TextEditor>
            </ConteneurEditor>
            <PrevisuEditor>{text}</PrevisuEditor>
          </div>
        </BlocEditorForum>
        <ButtonPost msg={text}></ButtonPost>
      </Row>
    </FormPost>
  );
};

const PrevisuEditor = styled.div`
  display: block;
  min-height: 9.375rem;
  word-wrap: break-word;
  padding: 0.625rem;
  border: 0.0625rem solid #bebecc;
  margin-bottom: 0.625rem;
  overflow: hidden;
  font-size: 0.75rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const ConteneurEditor = styled.div`
  background: #f3f3f5;
  position: relative;
  border: 0.0625rem solid #bebecc;
  margin-bottom: 0.625rem;
`;
const BlocEditorForum = styled.div`
  padding-left: 0.3125rem;
  padding-right: 0.3125rem;
  position: relative;
  min-height: 0.0625rem;
`;
const Row = styled.div`
  margin-left: -0.3125rem;
  margin-right: -0.3125rem;
  &:before {
    display: table;
    content: ' ';
  }
`;

const FormPost = styled.form`
  margin-bottom: 1.875rem;
`;
export default ForumPost;
