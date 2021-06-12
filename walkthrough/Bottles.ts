export class BottlesSM {
  verse(number: number) {
    switch (number) {
      case 0:
        return (
          'No more bottles of beer on the wall, ' +
          'no more bottles of beer.\n' +
          'Go to the store and buy some more, ' +
          '99 bottles of beer on the wall.\n'
        );
      case 1:
        return (
          '1 bottle of beer on the wall, ' +
          '1 bottle of beer.\n' +
          'Take it down and pass it around, ' +
          'no more bottles of beer on the wall.\n'
        );
      default:
        return (
          `${number} bottles of beer on the wall, ` +
          `${number} bottles of beer.\n` +
          'Take one down and pass it around, ' +
          `${number - 1} ${BottlesSM.container(number - 1)} of beer on the wall.\n`
        );
    }
  }

  verses(start: number, end: number) {
    return BottlesSM.generateNumberArray(start, end)
      .map(i => this.verse(i))
      .join('\n');
  }


  private static generateNumberArray(max: number, min: number): number[] {
    const numbers = [];
    for (let n = max; n >= min; n--) {
      numbers.push(n);
    }
    return numbers;
  }

  private static container(number: number): string {
    return number === 1 ? 'bottle' : 'bottles'
  }
}
