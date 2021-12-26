import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden'
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
    {label && <VisuallyHidden as={'label'}> {label}</VisuallyHidden>}
    <Wrapper >
      {displayedValue}
      <select value={value} onChange={onChange}>
        {children}
      </select>
      <IconWrapper>
        <Icon id='chevron-down' size={20} strokeWidth={2}/>
      </IconWrapper>
    </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  align-items: center;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  display: flex;
  padding: 12px 16px;
  position: relative;
  width: fit-content;
  & > select {
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 6px;
    margin: auto;
  }
  &:focus-within{
    outline: 5px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;  }
  &:hover {
    color: ${COLORS.black};
  }
`
const IconWrapper = styled.div` 
  cursor: none;
  margin-left: 12px;
  margin-right: -6px;
`




export default Select;
