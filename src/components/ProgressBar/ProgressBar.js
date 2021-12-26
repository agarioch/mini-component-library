/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    innerBarHeight: '16px',
  },
  medium: {
    innerBarHeight: '12px',
  },
  small: {
    innerBarHeight: '8px',
  },
}

const ProgressBar = ({ value, size }) => {
  return <Wrapper size={size} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"><InnerBar size={size} value={value}><VisuallyHidden>{value}</VisuallyHidden></InnerBar></Wrapper>;
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: ${props => props.size === 'large' ? '8px' : '4px'};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  display: block;
  overflow: hidden;
  padding: ${props => props.size === 'large' && '4px'};
  `

const InnerBar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: ${props => props.value > 99 ? '4px' : '4px 0 0 4px'};
  height: ${props => SIZES[props.size].innerBarHeight};
  width: ${props => (props.value || 0)+ '%'} ;
`

export default ProgressBar;
