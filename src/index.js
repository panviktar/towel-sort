
module.exports = function towelSort (matrix) {
  let newArray = [];
  if (matrix === undefined) {
      return newArray;
  }
    for (let i = 0; i < matrix.length; i++ ) {
        if (i % 2 === 0) {
            newArray.push(...matrix[i]);
        } else if(i % 2 === 1) {
            newArray.push(...(matrix[i].reverse()));
        }
    }
    return newArray;
}

