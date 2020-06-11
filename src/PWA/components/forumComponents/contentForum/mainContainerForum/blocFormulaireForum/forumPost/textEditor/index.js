import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextEditor = ({ onchange }) => {
  return (
    <MainDiv>
      <AreaEditor
        placeholder="Pour que les discussions restent agréables, 
      nous vous remercions de rester poli en toutes circonstances. 
      En postant sur nos espaces, vous vous engagez à en respecter la charte d'utilisation. 
      Tout message discriminatoire ou incitant à la haine sera supprimé et son auteur sanctionné."
        onChange={e => onchange(e)}
      ></AreaEditor>
    </MainDiv>
  );
};

const AreaEditor = styled.textarea`
  width: 94%;
  height: 6.875rem;
  border: 0 solid transparent;
  padding: 0.625rem;
  overflow: auto;
`;

const MainDiv = styled.div`
  background: #fff;
  overflow: hidden;
  border-top: 0.0625rem solid #bfbfcd;
`;

TextEditor.propTypes = { onchange: PropTypes.func };

export default TextEditor;
