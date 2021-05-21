export const sing = function () {
  const arr = []

  for (let i = 99; i >= 0; i--) {
    const plurality = i > 1 || i === 0 ? 's' : ''
    const numberOfBottles = i > 0 ? i : 'no more'
    arr.push(`${i > 0 ? i : 'No more'} bottle${plurality} of beer on the wall, ${numberOfBottles} bottle${plurality} of beer.`)

    const numberOfBottlesLeft = i > 0 ? i - 1 : 'no more'
    const pluralityLeft = numberOfBottlesLeft > 1 || numberOfBottlesLeft === 0 ? 's' : ''

    if (numberOfBottlesLeft === 'no more') {
      arr.push('Go to the store and buy some more, 99 bottles of beer on the wall.')
    } else {
      arr.push(`Take one down and pass it around, ${numberOfBottlesLeft || 'no more'} bottle${pluralityLeft} of beer on the wall.`)
    }

  }

  return arr
};
