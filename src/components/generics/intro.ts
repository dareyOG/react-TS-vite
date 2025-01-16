function getIndexOfArrayItem<T>(arr: T[], arrItem: T) {
  return arr.findIndex(item => item === arrItem);
}

getIndexOfArrayItem(['ape', 'box', 'cot', 'fish'], 'cot');

function createArrayPair<T, K>(input1: T, input2: K): [T, K] {
  return [input1, input2];
}

createArrayPair('ball', 50);
