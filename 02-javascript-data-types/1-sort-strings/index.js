/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const arrCopy = [...arr];
  const newArr = arrCopy.sort(((a, b) => {
    if (param === 'asc') {
      return sort2sort(a, b);
    } else {
      return sort2sort(b, a);
    }
  }));
  return newArr;
}

function sort2sort(a, b) {
  return a.localeCompare(b, ['ru', 'en'], {
    caseFirst: 'upper'
  });
}
