/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (!obj) {
    return obj;
  }
  const newObj = new Object();
  for (let elem in obj) {
      newObj[obj[elem]] = elem
  }
  return newObj;
}
