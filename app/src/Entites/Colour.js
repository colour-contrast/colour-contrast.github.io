export default class Colour {
  constructor(colour) {
    if (!colour.startsWith('#')) {
      colour = '#' + colour;
    }
    colour = colour.replace(/\#*/, '#');
    this.colour = colour;
  }

  get value() {
    return this.colour;
  }

  get luminance() {
    const { r, g, b } = this.getRgb();
    const colors = [r, g, b].map((color) => {
      color /= 255;
      return color <= 0.03928 ? color / 12.92 : Math.pow((color + 0.055) / 1.055, 2.4);
    });
    return colors[0] * 0.2126 + colors[1] * 0.7152 + colors[2] * 0.0722;
  }

  isValid() {
    const test = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return !!this.colour.match(test);
  }

  getRgb() {
    //  3 char hex
    let result;
    if (this.colour.length > 4) {
      result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.colour);
    } else {
      result = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(this.colour);
      result[1] = result[1] + '' + result[1];
      result[2] = result[2] + '' + result[2];
      result[3] = result[3] + '' + result[3];
    }

    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  }
}
