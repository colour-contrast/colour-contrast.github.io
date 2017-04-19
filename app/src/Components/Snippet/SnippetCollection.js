import React from 'react';
import styled from 'styled-components';
import Snippet from './Snippet';

//language=SCSS
const SnippetCollection = styled.div`
  & {
    width: 38%;
    font-family: 'Roboto Mono', monospace;
    text-align: justify;
  }
`;

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut condimentum mi. Maecenas id libero nisi. Vivamus semper eget nisl et vestibulum. Integer aliquet orci nec egestas imperdiet. Donec finibus nisi ac ullamcorper semper. Fusce condimentum sapien non sagittis placerat. Aliquam erat volutpat. Quisque interdum tincidunt augue ac varius. Etiam suscipit volutpat ex, rhoncus suscipit augue consequat non. Aenean ultricies ante et posuere pellentesque. Fusce mattis auctor diam, eget blandit justo semper maximus. Pellentesque a tortor massa. Nullam at venenatis lectus.";

export default class extends React.Component {

  render() {
    return (
      <SnippetCollection>
        <Snippet fontSize="10pt" colour={this.props.colour}>{loremIpsum}</Snippet>
        <Snippet fontSize="14pt" colour={this.props.colour}>{loremIpsum}</Snippet>
        <Snippet fontSize="18pt" colour={this.props.colour}>{loremIpsum}</Snippet>
      </SnippetCollection>
    )
  }
}