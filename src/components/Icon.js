import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
`;

const Icon = ({ path }) => {
  return <StyledImg src={path} />
}

export default Icon;

