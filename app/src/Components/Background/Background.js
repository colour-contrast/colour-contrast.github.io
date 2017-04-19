import React from 'react';
import styled from 'styled-components';

//language=SCSS
export default styled.div`
  & {
    position:absolute;
    width: 50%;
    top:0;
    bottom: 0;
    left: ${props => props.offset ? props.offset : 0};
    background-color: ${props => props.colour};
    z-index: -1;
  }
`
