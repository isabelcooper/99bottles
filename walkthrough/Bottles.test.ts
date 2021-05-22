import {BottlesSM} from "./Bottles";

describe('Bottles', () => {
  test('the first verse', () => {
    const expected = '99 bottles of beer on the wall, ' +
      '99 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '98 bottles of beer on the wall.\n';
    expect(new BottlesSM().verse(99)).toBe(expected);
  });

  test('another verse', () => {
    const randomVerseNumber3to99 =
      3 + Math.floor(Math.random() * (99 - 3))
    const expected =
      `${randomVerseNumber3to99} bottles of beer on the wall, ` +
      `${randomVerseNumber3to99} bottles of beer.\n` +
      'Take one down and pass it around, ' +
      `${randomVerseNumber3to99 - 1} bottles of beer on the wall.\n`;
    expect(new BottlesSM().verse(randomVerseNumber3to99)).toBe(expected);
  });

  test('verse 2', () => {
    const expected =
      '2 bottles of beer on the wall, ' +
      '2 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '1 bottle of beer on the wall.\n';
    expect(new BottlesSM().verse(2)).toBe(expected);
  });

   test('verse 1', () => {
     const expected =
       '1 bottle of beer on the wall, ' +
       '1 bottle of beer.\n' +
       'Take it down and pass it around, ' +
       'no more bottles of beer on the wall.\n';
     expect(new BottlesSM().verse(1)).toBe(expected);
   });

});
