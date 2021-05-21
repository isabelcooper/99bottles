export const sing = function () {
  const arr = []
  let numberOfBottles = 99

  while (numberOfBottles > 0) {
    const plurality = getPlural(numberOfBottles)
    arr.push(`${numberOfBottles} bottle${plurality} of beer on the wall, ${numberOfBottles} bottle${plurality} of beer.`)

    const numberOfBottlesLeft = numberOfBottles - 1
    if (numberOfBottlesLeft > 0) {
      const pluralityLeft = getPlural(numberOfBottlesLeft)
      arr.push(`Take one down and pass it around, ${numberOfBottlesLeft || 'no more'} bottle${pluralityLeft} of beer on the wall.`)
    }
    numberOfBottles--
  }
  arr.push(`Take one down and pass it around, no more bottles of beer on the wall.`)
  arr.push(`No more bottles of beer on the wall, no more bottles of beer.`)
  arr.push('Go to the store and buy some more, 99 bottles of beer on the wall.')

  return arr
};

function getPlural(numberOfBottles: number): string {
  return numberOfBottles > 1 ? 's' : '';
}
