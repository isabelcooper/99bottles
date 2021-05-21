export const sing = function () {
  const arr = []

  for (let i = 99; i >= 1; i--) {
    const plurality = i > 1 || i === 0 ? 's' : ''
    const numberOfBottles = i > 0 ? i : 'no more'
    arr.push(`${i > 0 ? i : 'No more'} bottle${plurality} of beer on the wall, ${numberOfBottles} bottle${plurality} of beer.`)

    const numberOfBottlesLeft = i - 1
    if (numberOfBottlesLeft > 0) {
      const pluralityLeft = numberOfBottlesLeft > 1 ? 's' : ''
      arr.push(`Take one down and pass it around, ${numberOfBottlesLeft || 'no more'} bottle${pluralityLeft} of beer on the wall.`)
    }
  }

  arr.push(`Take one down and pass it around, no more bottles of beer on the wall.`)
  arr.push(`No more bottles of beer on the wall, no more bottles of beer.`)
  arr.push('Go to the store and buy some more, 99 bottles of beer on the wall.')

  return arr
};
