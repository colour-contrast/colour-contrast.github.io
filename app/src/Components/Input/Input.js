import styled from 'styled-components';

//language=SCSS
export default styled.input`
  & {
    font-family: 'Roboto Mono', monospace;
    font-size: 3rem;

    box-sizing: border-box;
    padding: 10px 20px;

    text-align: center;
    letter-spacing: 5px;

    color: #333;
    border: 4px solid ${props => props.isValid ? 'rgba(255,255,255, 0)' : '#CB5450'};
    outline: 0;
    background-color: rgba(255,255,255, .3);
    
    border-radius: 2px; 
 
  }
  
  &:hover,
  &:focus {
    border: 4px solid ${props => props.isValid ? 'rgba(255, 255, 255, 0.3)' : '#CB5450' }; 
  }
`
