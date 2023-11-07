/**
 *
 * @template T
 * @param {T[]} array
 * @returns {T[]}
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * @template T
 * @param {T[]} array
 * @returns {T[][]}
 */
function generatePairs(array) {
  const shuffledArray = shuffleArray(array);
  const pairs = [];
  for (let i = 0; i < shuffledArray.length; i++) {
    const pair = [
      shuffledArray[i],
      shuffledArray[(i + 1) % shuffledArray.length],
    ];
    pairs.push(pair);
  }
  return pairs;
}

/**
 * @template T
 * @param {T[]} array
 * @returns {T[][]}
 */
export function getPairs(people) {
  let pairs = generatePairs(people);

  while (pairs.some((pair) => pair[0].name === pair[1].name)) {
    console.warn("Regenerating pairs");
    pairs = generatePairs(people);
  }
  return pairs;
}
