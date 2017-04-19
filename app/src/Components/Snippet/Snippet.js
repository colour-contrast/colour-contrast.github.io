import styled from 'styled-components';

//language=SCSS
export default styled.p`
  & {
    color: ${props => props.colour};
    font-size: ${props => props.fontSize};
    overflow: hidden;
    text-overflow: clip;
    line-height: 1.4em;
    max-height: 5.6em;
    margin-top: 8%;
  }
`