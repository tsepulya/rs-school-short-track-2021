/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Array = s1.split('');
  const s2Array = s2.split('');
  for (let i = 0; i < s1Array.length; i++) {
    const index = s2Array.indexOf(s1Array[i]);
    if (index !== -1) {
      s2Array[index] = 'common';
    }
  }
  return s2Array.filter((elem) => elem === 'common').length;
}

module.exports = getCommonCharacterCount;
