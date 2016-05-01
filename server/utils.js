var utils = {};

/**
 * Seaches for string in array, in lowercase.
 * @param  {array}  arr Array to search in.
 * @param  {String} str String to search for.
 * @return {Bool}   True if found, False if not.
 */
utils.searchArrayLowerCase = function (arr, str) {
  console.log("Array: " + arr + ". String: ", str);

  // convert string to lowercase
  str = str.toLowerCase();

  // convert array content to lowercase and search for string
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === str) {
      console.info("Found");
      return true;
    }
  }

  // if not Found
  console.info("Nope");
  return false;
}

module.exports = utils;
