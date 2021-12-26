import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    borderWidth: '2px',
    fontSize: '1.1rem',
    iconSize: 24,
    iconWeight: 2,
    padding: '8px'
  },
  small: {
    borderWidth: '1px',
    fontSize: '0.9rem',
    iconSize: 16,
    iconWeight: 1,
    padding: '4px'
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper size={size} width={width}>
      <VisuallyHidden as='label'>{label}</VisuallyHidden>
      <IconWrapper aria-hidden='true'><Icon id={icon} size={SIZES[size].iconSize} strokeWidth={SIZES[size].iconWeight}/></IconWrapper>
      <TextInput size={size} type="text" placeholder={placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  border-bottom: ${props => SIZES[props.size].borderWidth} solid ${COLORS.black};
  color: ${COLORS.gray700};
  display: flex;
  width: ${props => props.width + 'px'};
  &:focus-within{
    outline: 5px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
  `
const TextInput = styled.input`
  border: none;
  color: inherit;
  display: inline-block;
  font-size: ${props => SIZES[props.size].fontSize}; 
  font-weight: 700;
  outline: none;
  padding: ${props => SIZES[props.size].padding};
  width: 100%;
  &::placeholder{
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  &:hover{
    color: ${COLORS.black};
  }
`
const IconWrapper = styled.div`
  display: inline-block;
`

export default IconInput;
