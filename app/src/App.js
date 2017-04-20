import React, { Component } from 'react';
import Background from './Components/Background/Background.js';
import ColourInput from './Components/Input/ColourInput';
import InputWrapper from './Components/InputWrapper/InputWrapper';
import SnippetCollection from './Components/Snippet/SnippetCollection';
import SnippetWrapper from './Components/Snippet/SnippetWrapper';
import Guidance from './Components/Guidance/Guidance';
import Colour from './Entites/Colour';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      colour1: new Colour('#9C1F4D'),
      colour2: new Colour('#F4EB49'),
      validcolour1: new Colour('#9C1F4D'),
      validcolour2: new Colour('#F4EB49'),
    };
    this.onColourChange = this.onColourChange.bind(this);
  }

  onColourChange(e) {
    const name = e.target.name;
    let value = e.target.value;
    const colour = new Colour(value);
    this.setState({ [name]: colour });
    if (colour.isValid()) {
      const newName = 'valid' + name;
      this.setState({ [newName]: colour })
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <Background colour={this.state.validcolour1.value} />
          <Background colour={this.state.validcolour2.value} offset="50%" />
          <InputWrapper>
            <ColourInput type="text" name="colour1" isValid={this.state.colour1.isValid()} onChange={this.onColourChange}
                         value={this.state.colour1.value} />
            <ColourInput type="text" name="colour2" isValid={this.state.colour2.isValid()} onChange={this.onColourChange}
                         value={this.state.colour2.value} />
          </InputWrapper>
          <Guidance colour1={this.state.validcolour1} colour2={this.state.validcolour2} />
          <SnippetWrapper>
            <SnippetCollection colour={this.state.validcolour2.value} />
            <SnippetCollection colour={this.state.validcolour1.value} />
          </SnippetWrapper>
        </div>
      </div>
    );
  }
}
