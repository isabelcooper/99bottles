export class Bottles {
  public sing() : string[] {
    return Bottles.generateNumberArray(99, 0)
      .map(i => Bottles.verse(i)).flat()
  }

  private static verse(numberOfBottles: number) : string[]{
    const lines: string[] = []
    if (numberOfBottles > 0) {
      const plurality = Bottles.getPlural(numberOfBottles)
      lines.push(`${numberOfBottles} bottle${plurality} of beer on the wall, ${numberOfBottles} bottle${plurality} of beer.`)

      const numberOfBottlesLeft = numberOfBottles - 1
      if (numberOfBottlesLeft > 0) {
        const pluralityLeft = Bottles.getPlural(numberOfBottlesLeft)
        lines.push(`Take one down and pass it around, ${numberOfBottlesLeft || 'no more'} bottle${pluralityLeft} of beer on the wall.`)
      }
    } else {
      lines.push(`Take one down and pass it around, no more bottles of beer on the wall.`)
      lines.push(`No more bottles of beer on the wall, no more bottles of beer.`)
      lines.push('Go to the store and buy some more, 99 bottles of beer on the wall.')
    }

    return lines
  };

  private static generateNumberArray(max: number, min: number): number[] {
    const numbers = [];
    for (let n = max; n >= min; n--) {
      numbers.push(n);
    }
    return numbers;
  }

  private static getPlural(number: number): string {
    return number > 1 ? 's' : '';
  }

}
