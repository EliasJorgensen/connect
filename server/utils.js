var utils = {};

/**
 * Seaches for string in array of objects, in lowercase.
 * Only searches through keys named 'nickname'.
 * @param  {Array}  arr   Array to search in.
 * @param  {String} str   String to search for.
 * @return {Bool}         True if found, False if not.
 */
utils.searchArrayLowerCase = function (arr, str) {
  // convert string to lowercase
  str = str.toLowerCase();

  // convert array content to lowercase and search for string
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]['nickname'].toLowerCase() === str) {
      return true;
    }
  }

  // if not Found
  return false;
}

module.exports = utils;
