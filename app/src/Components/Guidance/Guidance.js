import React, { Component } from 'react';
import CircleWrapper from '../Circle/CircleWrapper';
import Circle from '../Circle/Circle';

export default class Guidance extends Component {

  calculateContrast(col1, col2) {
    const col1Lum = col1.luminance + 0.05;
    const col2Lum = col2.luminance + 0.05;
    if (col1Lum > col2Lum) {
      return Math.abs(col1Lum / col2Lum).toFixed(2);
    } else {
      return Math.abs(col2Lum / col1Lum).toFixed(2);
    }
  }

  render() {
    const contrast = this.calculateContrast(this.props.colour1, this.props.colour2);
    return (
      <CircleWrapper>
        <WCAGAA_Normal contrast={contrast} />
        <WCAGAA_Large contrast={contrast} />
        <Contrast contrast={contrast} />
        <WCAGAAA_Normal contrast={contrast} />
        <WCAGAAA_Large contrast={contrast} />
      </CircleWrapper>
    )
  }
}

const WCAGAA_Normal = ({ contrast }) => (
  <Circle pass={contrast > 4.5}>
    <span>WCAG AA 14pt</span>
  </Circle>
);

const WCAGAA_Large = ({ contrast }) => (
  <Circle pass={contrast > 3}>
    <span>WCAG AA 18pt</span>
  </Circle>
);

const Contrast = ({ contrast }) => (
  <Circle colour="#3D8AF7" size="2em">
    <span>{contrast}</span>
  </Circle>
);

const WCAGAAA_Normal = ({ contrast }) => (
  <Circle pass={contrast > 7.1}>
    <span>WCAG AAA 14pt</span>
  </Circle>
);

const WCAGAAA_Large = ({ contrast }) => (
  <Circle pass={contrast > 4.5}>
    <span>WCAG AAA 18pt</span>
  </Circle>
);
