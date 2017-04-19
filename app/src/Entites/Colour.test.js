import Colour from './Colour';

describe('The colour object', () => {
  it('should store a colour', () => {
    const expected = '#000';
    const actual = new Colour(expected);
    expect(actual.colour).toBe(expected);
  });

  it('should check the colours validity: 3 digit hex', () => {
    const expected = true;
    const actual = new Colour('#000').isValid();
    expect(actual).toBe(expected);
  });

  it('should check the colours validity: 6 digit hex', () => {
    const expected = true;
    const actual = new Colour('#000000').isValid();
    expect(actual).toBe(expected);
  });

  it('should check the colours validity: Invalid character', () => {
    const expected = false;
    const actual = new Colour('#00G000').isValid();
    expect(actual).toBe(expected);
  });

  it('should check the colours validity: Invalid length (Too long)', () => {
    const expected = false;
    const actual = new Colour('#0000000').isValid();
    expect(actual).toBe(expected);
  });

  it('should check the colours validity: Invalid length (Too short)', () => {
    const expected = false;
    const actual = new Colour('#0000').isValid();
    expect(actual).toBe(expected);
  });

  describe('Hex to RGB', () => {
    it('should convert black correctly', () => {
      const expected = { r: 0, g: 0, b: 0 };
      const actual = new Colour('#000000').getRgb();
      expect(actual).toEqual(expected);
    });

    it('should convert black (shorthand) correctly', () => {
      const expected = { r: 0, g: 0, b: 0 };
      const actual = new Colour('#000').getRgb();
      expect(actual).toEqual(expected);
    });

    it('should convert white correctly', () => {
      const expected = { r: 255, g: 255, b: 255 };
      const actual = new Colour('#FFFFFF').getRgb();
      expect(actual).toEqual(expected);
    });

    it('should convert white (shorthand) correctly', () => {
      const expected = { r: 255, g: 255, b: 255 };
      const actual = new Colour('#FFF').getRgb();
      expect(actual).toEqual(expected);
    });

    it('should convert Dark Moderate Pink correctly', () => {
      const expected = { r: 153, g: 51, b: 102 };
      const actual = new Colour('#993366').getRgb();
      expect(actual).toEqual(expected);
    });

    it('should convert Dark Moderate Pink (shorthand) correctly', () => {
      const expected = { r: 153, g: 51, b: 102 };
      const actual = new Colour('#936').getRgb();
      expect(actual).toEqual(expected);
    });
  });
});
