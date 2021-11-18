/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  let arr = path.split('.');
  return obj => arr.map(e => {
    if (obj[e]) {
      return obj = obj[e]
    }
  }).pop();
}
