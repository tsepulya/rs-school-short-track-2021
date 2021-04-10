/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const strNew = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else if (count === 1) {
      strNew.push(str[i]);
    } else {
      strNew.push(`${count}${str[i]}`);
      count = 1;
    }
  }
  return strNew.join('');
}

module.exports = encodeLine;
