export class BottlesSM {
  verse(number: number) {
    if (number === 2) {
      return `${number} bottles of beer on the wall, ${number} bottles of beer.\nTake one down and pass it around, ${number - 1} bottle of beer on the wall.\n`
    } else {
      return `${number} bottles of beer on the wall, ${number} bottles of beer.\nTake one down and pass it around, ${number - 1} bottles of beer on the wall.\n`
    }
  }
}
