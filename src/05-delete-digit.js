/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num = n.toString().split('');
  num = num.map((elem) => Number(elem));
  const min = Math.min(...num);
  num.splice(num.indexOf(min), 1);
  return Number(num.join(''));
}

module.exports = deleteDigit;
