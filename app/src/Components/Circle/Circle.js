import React from 'react';
import styled from 'styled-components';

//language=SCSS
export default styled.div`
  & {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    font-size: ${props => props.size ? props.size : '1.1em'};
    background-color: ${props => props.colour ? props.colour : props.pass ? '#1f9c30' : '#c1293d'};
    color: #FFF;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 1.4em;
    font-family: 'Roboto Mono', monospace
  }
`