import React, { Component } from 'react';
import Background from './Components/Background/Background.js';
import ColourInput from './Components/Input/ColourInput';
import InputWrapper from './Components/InputWrapper/InputWrapper';
import SnippetCollection from './Components/Snippet/SnippetCollection';
import SnippetWrapper from './Components/Snippet/SnippetWrapper';
import Guidance from './Components/Guidance/Guidance';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      colour1: '#9C1F4D',
      colour2: '#F4EB49',
      validcolour1: '#9C1F4D',
      validcolour2: '#F4EB49',
    };
    this.onColourChange = this.onColourChange.bind(this);
  }

  onColourChange(e) {
    const name = e.target.name;
    let value = e.target.value;
    if (!value.startsWith('#')) {
      value = '#' + value;
    }
    value = value.replace(/\#*/, '#');
    this.setState({ [name]: value });
    if (this.isValidColour(value)) {
      const newName = 'valid' + name;
      this.setState({ [newName]: value })
    }
  }

  isValidColour(colour) {
    const test = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return colour.match(test);
  }

  render() {
    return (
      <div className="App">
        <div>
          <Background colour={this.state.colour1} />
          <Background colour={this.state.colour2} offset="50%" />
          <InputWrapper>
            <ColourInput type="text" name="colour1" isValid={this.isValidColour(this.state.colour1)} onChange={this.onColourChange}
                         value={this.state.colour1} />
            <ColourInput type="text" name="colour2" isValid={this.isValidColour(this.state.colour2)} onChange={this.onColourChange}
                         value={this.state.colour2} />
          </InputWrapper>
          <Guidance colour1={this.state.validcolour1} colour2={this.state.validcolour2} />
          <SnippetWrapper>
            <SnippetCollection colour={this.state.colour2} />
            <SnippetCollection colour={this.state.colour1} />
          </SnippetWrapper>
        </div>
      </div>
    );
  }
}
