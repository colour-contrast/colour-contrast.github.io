import React from 'react';
import styled from 'styled-components';
import Input from './Input';

//language=SCSS
export default styled(Input)`
  & {
    width: 30%;
    min-width: 300px;
    max-width: 400px;
  }
`