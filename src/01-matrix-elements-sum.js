/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const matrix1 = matrix;
  const len = matrix1.length;
  for (let i = 0; i < len; i++) {
    for (let k = 0; k < matrix1[i].length; k++) {
      if (i !== len - 1) {
        if (matrix1[i][k] === 0) {
          for (let z = i + 1; z < len; z++) {
            matrix1[z][k] = 0;
          }
        }
      }
    }
  }
  return matrix1.reduce((sum, cur) => sum + cur.reduce((total, elem) => total + elem, 0), 0);
}

module.exports = getMatrixElementsSum;
