/* 
For each generation, please see below for all rules.
0 = empty
1 = newborn
2 = adult
3 = senior
- if value is 0 
    - 2 adult neighbors => value = 1 (Reproduction)
    - anything else => value = 0 (No change)
- if value is 1 
    - if >= 5 neighboards => value = 0 (Overcrowding)
    - if <= 1 neighbors => value = 0 (isolation)
    - anything else (<1 and >5) => value = 2 (maturing)
- if value is 2
    - if >= 3 total neighboards => value = 0 (overcrowding)
    - if no neighboards => value = 0 (isolation)
    - anything else (>= 1 and < 3) => value = 3 (maturing)
- if value is 3
    - all conditions => value = 0 (Death)
*/

let genFive = [
  [0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 2, 2, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
];

let genTen = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const cache = {};

const generations = (array, generation, genNum = 0) => {
  cache[genNum] = array;
  let newArr = Array(array.length)
    .fill(Array(array.length).fill(0))
    .map((a) => a.slice());
  if (genNum === generation) return array;
  else {
    genNum += 1;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] === 3) newArr[i][j] = 0;
        else {
          if (i === 0) newArr[i][j] = helperZero(array, i, j);
          if (i === array.length - 1) newArr[i][j] = helperLast(array, i, j);
          if (i > 0 && i < array.length - 1) newArr[i][j] = helper(array, i, j);
        };
      };
    };
    return generations(newArr, generation, genNum);
  };
};

const helperZero = (array, i, j) => {
  const number = array[i][j];
  let count = 0;
  if (number === 0) {
    if (array[i + 1][j] === 2) count += 1;
    if (j < array[i].length - 1) {
      if (array[i][j + 1] === 2) count += 1;
      if (array[i + 1][j + 1] === 2) count += 1;
    };
    if (j > 0) {
      if (array[i][j - 1] === 2) count += 1;
      if (array[i + 1][j - 1] === 2) count += 1;
    };
  } else {
    if (array[i + 1][j] > 0) count += 1;
    if (j < array[i].length - 1) {
      if (array[i][j + 1] > 0) count += 1;
      if (array[i + 1][j + 1] > 0) count += 1;
    }
    if (j > 0) {
      if (array[i][j - 1] > 0) count += 1;
      if (array[i + 1][j - 1] > 0) count += 1;
    };
  };
  return checker(number, count);
};

const helperLast = (array, i, j) => {
  const number = array[i][j];
  let count = 0;
  if (number === 0) {
    if (array[i - 1][j] === 2) count += 1;
    if (j < array[i].length - 1) {
      if (array[i][j + 1] === 2) count += 1;
      if (array[i - 1][j + 1] === 2) count += 1;
    };
    if (j > 0) {
      if (array[i][j - 1] === 2) count += 1;
      if (array[i - 1][j - 1] === 2) count += 1;
    };
  } else {
    if (array[i - 1][j] > 0) count += 1;
    if (j < array[i].length - 1) {
      if (array[i][j + 1] > 0) count += 1;
      if (array[i - 1][j + 1] > 0) count += 1;
    };
    if (j > 0) {
      if (array[i][j - 1] > 0) count += 1;
      if (array[i - 1][j - 1] > 0) count += 1;
    };
  };
  return checker(number, count);
};

const helper = (array, i, j) => {
  const number = array[i][j];
  let count = 0;
  if (number === 0) {
    if (array[i - 1][j] === 2) count += 1;
    if (array[i + 1][j] === 2) count += 1;
    if (j < array[i].length - 1) {
      if (array[i][j + 1] === 2) count += 1;
      if (array[i - 1][j + 1] === 2) count += 1;
      if (array[i + 1][j + 1] === 2) count += 1;
    };
    if (j > 0) {
      if (array[i][j - 1] === 2) count += 1;
      if (array[i - 1][j - 1] === 2) count += 1;
      if (array[i + 1][j - 1] === 2) count += 1;
    };
  } else {
    if (array[i - 1][j] > 0) count += 1;
    if (array[i + 1][j] > 0) count += 1;
    if (j < array[i].length) {
      if (array[i][j + 1] > 0) count += 1;
      if (array[i - 1][j + 1] > 0) count += 1;
      if (array[i + 1][j + 1] > 0) count += 1;
    };
    if (j > 0) {
      if (array[i][j - 1] > 0) count += 1;
      if (array[i - 1][j - 1] > 0) count += 1;
      if (array[i + 1][j - 1] > 0) count += 1;
    };
  };
  return checker(number, count);
};

const checker = (number, count) => {
  if (number === 1) return count >= 5 || count <= 1 ? 0 : 2;
  if (number === 2) return count >= 3 || count === 0 ? 0 : 3;
  if (number === 0) return count === 2 ? 1 : 0;
};

console.log(generations(genFive, 1));
// console.log(generations(genTen, 20));
// console.log(cache['20'])
