/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrixNew = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = [];
    for (let k = 0; k < matrix[i].length; k++) {
      let count = 0;
      if (i !== 0) { // previous up
        if (matrix[i - 1][k] === true) {
          count++;
        }
      }
      if (i !== matrix.length - 1) { // next down
        if (matrix[i + 1][k] === true) {
          count++;
        }
      }
      if (k !== 0) { // previous left
        if (matrix[i][k - 1] === true) {
          count++;
        }
      }
      if (k !== matrix.length[i] - 1) { // next right
        if (matrix[i][k + 1] === true) {
          count++;
        }
      }
      if (i !== 0 && k !== 0) { // diagonal left up
        if (matrix[i - 1][k - 1] === true) {
          count++;
        }
      }
      if (i !== matrix.length - 1 && k !== 0) { // diagonal left down
        if (matrix[i + 1][k - 1] === true) {
          count++;
        }
      }
      if (i !== 0 && k !== matrix.length[i] - 1) { // diagonal right up
        if (matrix[i - 1][k + 1] === true) {
          count++;
        }
      }
      if (i !== matrix.length - 1 && k !== matrix.length[i] - 1) { // diagonal right down
        if (matrix[i + 1][k + 1] === true) {
          count++;
        }
      }
      row.push(count);
    }
    matrixNew.push(row);
  }
  return matrixNew;
}

module.exports = minesweeper;
