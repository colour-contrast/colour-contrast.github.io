import React, { Component } from 'react';
import CircleWrapper from '../Circle/CircleWrapper';
import Circle from '../Circle/Circle';

export default class Guidance extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contrast: this.calculateContrast(this.props.colour1, this.props.colour2)
    }
  }

  componentWillReceiveProps(nextProps) {
    const props = Object.assign({}, this.props, nextProps);
    this.setState({ contrast: this.calculateContrast(props.colour1, props.colour2) })
  }

  calculateContrast(col1, col2) {
    const col1Lum = this.calculateLuminanace(this.hexToRgb(col1)) + 0.05;
    const col2Lum = this.calculateLuminanace(this.hexToRgb(col2)) + 0.05;
    if(col1Lum > col2Lum) {
      return Math.abs(col1Lum / col2Lum).toFixed(2);
    } else {
      return Math.abs(col2Lum / col1Lum).toFixed(2);
    }
  }

  hexToRgb(hex) {
    //  3 char hex
    let result;
    if (hex.length > 4) {
      result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    } else {
      result = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(hex);
      result[1] = result[1] + '' + result[1];
      result[2] = result[2] + '' + result[2];
      result[3] = result[3] + '' + result[3];
    }

    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  calculateLuminanace({ r, g, b }) {
    var colors = [r, g, b].map(function (color) {
      color /= 255;
      return (color <= 0.03928) ? color / 12.92 : Math.pow(((color + 0.055) / 1.055), 2.4);
    });
    return colors[0] * 0.2126 + colors[1] * 0.7152 + colors[2] * 0.0722;
  }

  render() {
    return (
      <CircleWrapper>
        <WCAGAA_Normal contrast={this.state.contrast} />
        <WCAGAA_Large contrast={this.state.contrast} />
        <Contrast contrast={this.state.contrast} />
        <WCAGAAA_Normal contrast={this.state.contrast} />
        <WCAGAAA_Large contrast={this.state.contrast} />
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
