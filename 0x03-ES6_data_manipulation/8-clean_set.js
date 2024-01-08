// 8-clean_set.js

/**
 * cleanSet - Returns a string of set values that start with a specific string.
 * @param {Set} set - The Set to clean.
 * @param {string} startString - The starting string to filter set values.
 * @returns {string} - String containing set values that start with the specified string, separated by -.
 */
function cleanSet(set, startString) {
  const setArray = Array.from(set);
  const filteredValues = setArray.filter((value) => value.startsWith(startString));
  const cleanedValues = filteredValues.map((value) => value.slice(startString.length));
  const resultString = cleanedValues.join('-');
  return resultString;
}

// Exporting the function to make it available for other modules
export default cleanSet;
